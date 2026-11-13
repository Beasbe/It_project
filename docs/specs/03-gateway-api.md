# SPEC-03 — Gateway API

> Источник требований: технические требования, раздел 3 «Gateway API».

## 0. Мета

| | |
|---|---|
| Статус | ✅ **Реализовано и проверено** |
| Реализация Gateway API | **Traefik v3.7.13** (провайдер `kubernetesGateway`) |
| Версия Gateway API | v1.5.1 (стандартный канал CRD) |
| Используемые ресурсы | `GatewayClass` (`traefik`), `Gateway` (`full-proj-gateway`), `HTTPRoute` (`full-proj-route`) |
| Внешний доступ | NodePort `80` (http://&lt;node-ip&gt;:80) + NodePort `443` (https://&lt;node-ip&gt;:443, самоподписанный TLS) |

## 1. Требования

| ID | Требование | Статус |
|----|-----------|--------|
| FR-GW-1 | Выбрана open-source реализация Gateway API | ✅ Traefik v3 (helm-чарт) |
| FR-GW-2 | GatewayClass | ✅ `traefik` (создаётся Traefik-чартом) |
| FR-GW-3 | Gateway | ✅ `full-proj-gateway`, listeners: HTTP :80 + HTTPS :443 (TLS Terminate), PROGRAMMED=True |
| FR-GW-4 | HTTPRoute → Service приложения | ✅ `full-proj-route` → Service `waf` :8080 |
| FR-GW-5 | Приложение доступно через Gateway API | ✅ curl → 200 + JSON (см. верификацию) |
| FR-GW-6 | README: название/версия реализации, используемые ресурсы | ✅ эта спецификация + [README](../../readme.md) |
| FR-GW-7 | Команда проверки доступности (curl) | ✅ ниже |

## 2. Реализация

Топология (вариант A — единая точка входа):
`Клиент → :80 (HTTP) / :443 (HTTPS) → Traefik (Gateway API) → HTTPRoute → Service waf`,
далее WAF сам маршрутизирует по пути: `/api`, `/admin`, `/storage`, `/sanctum`,
`/livewire`, `/filament`, `/css`, `/js`, `/vendor` → Service nginx → php-fpm;
всё остальное (фронтенд, `/api/contact`) → Service frontend. Оба приложения
доступны только через WAF — внешних NodePort у них нет.

- **GatewayClass** `traefik` (controllerName `traefik.io/gateway-controller`) — создаётся
  Traefik-чартом при `providers.kubernetesGateway.enabled: true` (`infra/traefik/values.yaml`).
- **Gateway** `full-proj-gateway` (`helm/templates/gateway.yaml`): listener `http` :80
  и listener `https` :443 (`tls.mode: Terminate`, `certificateRefs` → Secret
  `full-proj-tls`); Traefik сопоставляет listeners с entrypoints `web`/`websecure`
  по порту (`ports.web.port: 80`, `ports.websecure.port: 443`).
- **HTTPRoute** `full-proj-route`: `PathPrefix /` → backendRef `waf:8080`, прикреплён
  ТОЛЬКО к HTTPS-листенеру — WAF остаётся обязательной точкой входа
  (TLS терминируется НА Gateway, WAF инспектирует расшифрованный трафик).
- **HTTPRoute** `full-proj-http-redirect`: листенер `http`, фильтр `RequestRedirect`
  (scheme https, port 443) — весь HTTP-трафик уходит 302-редиректом на HTTPS,
  до WAF не доходит.
- Traefik-сервис — NodePort `80`/`443` (для k3s без MetalLB; на kubeadm — LoadBalancer).
- **Сертификат**: самоподписанный (openssl), генерируется идемпотентно скриптом
  `scripts/gen-cert.sh` (SAN: `localhost`, `127.0.0.1`, `192.168.200.1` — стабильный
  IP ноды на dummy-интерфейсе; можно добавить IP аргументами). Браузер покажет
  предупреждение о недоверенном CA — это ожидаемо.
- **Проброс схемы клиента**: WAF передаёт `X-Forwarded-Proto` не из своего
  `$scheme` (до WAF трафик всегда http), а из заголовка Traefik
  (`waf.nginxForwardedProto: "$http_x_forwarded_proto"`), а nginx бэкенда — в
  php-fpm (`helm/templates/nginx.yaml`). Laravel (`TrustProxies`, `*`) видит
  реальную схему и генерирует https-URL (редирект `/admin`, ассеты Filament,
  ссылки `/storage`). Без этого `/admin` редиректил на `http://...:443` и
  ломался при переходе по ссылке.

## 3. Верификация (фактические результаты)

```bash
kubectl get gatewayclass,gateway,httproute -n full-proj
# GatewayClass traefik; Gateway full-proj-gateway: PROGRAMMED=True, Address: <node-ip>

curl -s http://localhost/api/news | head -c 200   # 302 -> https://localhost/api/news

curl -sk https://localhost/api/news | head -c 200  # 200 + JSON
```

## 4. Дополнительные возможности (роадмап)

- несколько бэкендов/маршрутизация по path и hostname;
- cert-manager (Let's Encrypt) вместо самоподписанного сертификата.

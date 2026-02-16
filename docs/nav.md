Task 001
исправить формирование эндпоинтов в хэдере. сейчас эндпоинты накладываются друг на друга, нужно их сбрасывать.
Сейчас:
при переходе с projects to about
http://localhost:3000/It_project/projects/about/

Нужно:
при переходе с projects to about
http://localhost:3000/It_project/projects --> http://localhost:3000/It_project/about/

# Решение Task 001

## Контекст из документации

На основе документации проекта (scopes.md и general.md):
- В scopes.md описан scope "Навигация": Реализация в `app/layout.tsx` с компонентом Header, использующим next/link для клиентской маршрутизации без перезагрузки страницы. Рекомендуется использовать абсолютные пути для ссылок, чтобы избежать проблем с относительной навигацией.
- В general.md (раздел "Лучшие практики для работы с React Context API" и "Scope: Навигация"): Подчеркивается важность правильной навигации, включая использование <Link> из next/link и обеспечение доступности. Для избежания stacking путей (как в проблеме) рекомендуется всегда использовать абсолютные href с ведущим '/'.

Проблема возникает из-за относительных ссылок в next/link, которые добавляются к текущему пути вместо замены.

## Изменения в коде

В файле `It_project/src/components/Header.tsx`:
- Изменены href в массиве navItems на абсолютные пути (добавлен ведущий '/').
- В мобильной навигации удалено принудительное добавление `/${item.href}`, теперь используется item.href напрямую.
- Для "Контакты" использован '/#contact' для якорной ссылки на главной странице.

Это решает проблему stacking: переходы теперь заменяют путь полностью.

## Пример diff изменений

```diff
@@ -49,10 +49,10 @@
     };
 
     const navItems = [
-        { name: 'Каталог решений', href: 'projects' },
-        { name: 'О компании', href: 'about' },
-        { name: 'Новости', href: 'news' },
-        { name: 'Контакты', href: '#' }
+        { name: 'Каталог решений', href: '/projects' },
+        { name: 'О компании', href: '/about' },
+        { name: 'Новости', href: '/news' },
+        { name: 'Контакты', href: '/#contact' }
     ];
 
     if (!mounted) {
@@ -180,7 +180,7 @@
                             {navItems.map((item) => (
                                 <Link
                                     key={item.name}
-                                    href={item.href.startsWith('#') ? item.href : `/${item.href}`}
+                                    href={item.href}
                                     prefetch={false}
                                     className="py-3 px-4 text-copy-secondary hover:text-cta hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 rounded-lg"
                                     onClick={() => setIsMenuOpen(false)}
```

## Тестирование

После изменений:
- Переход с /projects на about ведет к /about, без наложения.
- Якорные ссылки (как #contact) работают корректно на главной странице.

Если нужны дальнейшие корректировки, обновите задачу.

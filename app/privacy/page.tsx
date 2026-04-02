// app/privacy/page.tsx
"use client";

import React, { Suspense } from "react";

function PrivacyContent() {
  return (
    <div className="min-h-screen py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-copy-primary mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-sm text-copy-secondary">
            Дата последнего обновления: 1 апреля 2026 г.
          </p>
        </div>

        {/* Содержание */}
        <div className="space-y-8">
          {/* Введение */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <h2 className="text-xl md:text-2xl font-semibold text-copy-primary mb-4">
              1. Общие положения
            </h2>
            <p className="text-copy-secondary leading-relaxed mb-3">
              Настоящая политика обработки персональных данных составлена в
              соответствии с требованиями Федерального закона от 27.07.2006 №
              152-ФЗ «О персональных данных» и определяет порядок обработки
              персональных данных и меры по обеспечению безопасности
              персональных данных, предпринимаемые ООО «Лайт ПРОЕКТ».
            </p>
            <p className="text-copy-secondary leading-relaxed">
              1.1. Оператор ставит своей важнейшей целью и условием
              осуществления своей деятельности соблюдение прав и свобод человека
              и гражданина при обработке его персональных данных, включая защиту
              прав на неприкосновенность частной жизни, личную и семейную тайну.
            </p>
          </section>

          {/* Какие данные собираем */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <h2 className="text-xl md:text-2xl font-semibold text-copy-primary mb-4">
              2. Какие персональные данные мы собираем
            </h2>
            <p className="text-copy-secondary leading-relaxed mb-3">
              Оператор может обрабатывать следующие персональные данные
              пользователя:
            </p>
            <ul className="list-disc list-inside text-copy-secondary leading-relaxed space-y-2 ml-4">
              <li>Фамилия, имя, отчество;</li>
              <li>Номер телефона;</li>
              <li>Адрес электронной почты;</li>
              <li>Название организации и должность;</li>
              <li>Данные, передаваемые в обратной связи и форме заявки.</li>
            </ul>
          </section>

          {/* Цели сбора */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <h2 className="text-xl md:text-2xl font-semibold text-copy-primary mb-4">
              3. Цели обработки персональных данных
            </h2>
            <p className="text-copy-secondary leading-relaxed mb-3">
              Оператор обрабатывает персональные данные пользователя в следующих
              целях:
            </p>
            <ul className="list-disc list-inside text-copy-secondary leading-relaxed space-y-2 ml-4">
              <li>Предоставление доступа пользователю к сервисам и услугам;</li>
              <li>Обработка заявок и обращений клиентов;</li>
              <li>Проведение маркетинговых и рекламных активностей;</li>
              <li>
                Улучшение качества обслуживания и работы сайта/приложения;
              </li>
              <li>
                Отправка информационных и новостных рассылок (с согласия).
              </li>
            </ul>
          </section>

          {/* Права пользователя */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <h2 className="text-xl md:text-2xl font-semibold text-copy-primary mb-4">
              4. Права пользователя
            </h2>
            <p className="text-copy-secondary leading-relaxed mb-3">
              Пользователь имеет право:
            </p>
            <ul className="list-disc list-inside text-copy-secondary leading-relaxed space-y-2 ml-4">
              <li>
                Получать информацию, касающуюся обработки его персональных
                данных;
              </li>
              <li>Требовать уточнения, блокирования или уничтожения данных;</li>
              <li>Отозвать согласие на обработку персональных данных;</li>
              <li>Обжаловать действия Оператора в уполномоченном органе.</li>
            </ul>
          </section>

          {/* Контакты */}
          <section className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <h2 className="text-xl md:text-2xl font-semibold text-copy-primary mb-4">
              5. Контактная информация
            </h2>
            <p className="text-copy-secondary leading-relaxed mb-3">
              По всем вопросам, связанным с обработкой персональных данных, вы
              можете обратиться к Оператору:
            </p>
            <div className="bg-cta/5 rounded-lg p-4 mt-3">
              <p className="text-copy-primary">
                <span className="font-medium">ООО «Лайт ПРОЕКТ»</span>
              </p>
              <p className="text-copy-secondary text-sm mt-2">
                Email:{" "}
                <a
                  href="mailto:privacy@lightproject.ru"
                  className="text-cta hover:underline"
                >
                  privacy@lightproject.ru
                </a>
              </p>
              <p className="text-copy-secondary text-sm">
                Телефон:{" "}
                <a href="tel:+74951234567" className="text-cta hover:underline">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p className="text-copy-secondary text-sm">
                Адрес: г. Москва, ул. Примерная, д. 1, офис 100
              </p>
            </div>
          </section>
        </div>

        {/* Кнопка возврата */}
        <div className="mt-8 text-center">
          <a
            href="/It_project"
            className="inline-flex items-center text-copy-secondary hover:text-cta transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-8 md:py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cta mx-auto"></div>
              <p className="mt-4 text-copy-secondary">Загрузка...</p>
            </div>
          </div>
        </div>
      }
    >
      <PrivacyContent />
    </Suspense>
  );
}

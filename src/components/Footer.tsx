"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const navigationLinks = [
    { name: "Каталог решений", href: "/catalog" },
    { name: "О компании", href: "/about" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/contacts" },
  ];

  const contactInfo = {
    address: "г. Москва, ул. Примерная, д. 123, офис 456",
    phone: "+7 (999) 123-45-67",
    email: "info@company.ru",
    workingHours: "Пн-Пт: 9:00-18:00",
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl ml-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и название */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              АйТи ПРОЕКТ
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Проектирование зданий и сооружений на передовой информационных
              технологий
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm">Адрес</p>
                <p className="text-gray-700 text-sm">{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Телефон</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                  className="text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Режим работы</p>
                <p className="text-gray-700 text-sm">
                  {contactInfo.workingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Копирайт */}
      <div className="mt-12 pt-8  border-t border-gray-200">
        <p className="text-gray-400 pb-11 text-sm text-center">
          © 2026 IT Project. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

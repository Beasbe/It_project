// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navigationLinks = [
        { name: 'Каталог решений', href: '#' },
        { name: 'О компании', href: '#' },
        { name: 'Новости', href: '#' },
        { name: 'Контакты', href: '#' }
    ];

    const contactInfo = {
        address: 'г. Москва, ул. Примерная, д. 123, офис 456',
        phone: '+7 (999) 123-45-67',
        email: 'info@company.ru',
        workingHours: 'Пн-Пт: 9:00-18:00'
    };

    const socialLinks = [
        { name: 'Telegram', icon: '📱', href: '#' },
        { name: 'WhatsApp', icon: '💬', href: '#' },
        { name: 'VK', icon: '📘', href: '#' },
        { name: 'Email', icon: '✉️', href: `mailto:${contactInfo.email}` }
    ];

    return (
        <footer className="bg-card border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Лого и описание */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-cta rounded-lg flex items-center justify-center mr-3">
                                <span className="text-cta-text font-bold text-xl">IT</span>
                            </div>
                            <span className="text-2xl font-bold text-copy-primary">IT Solutions</span>
                        </div>
                        <p className="text-copy-secondary mb-6">
                            Комплексные IT-решения для цифровизации вашего бизнеса.
                            Помогаем компаниям расти с помощью современных технологий.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-copy-primary hover:bg-cta hover:text-cta-text hover:border-cta transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Навигация */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-copy-primary mb-6 pb-2 border-b border-border">
                            Навигация
                        </h3>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-copy-secondary hover:text-cta transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-cta rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-copy-primary mb-6 pb-2 border-b border-border">
                            Контакты
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center mr-3 flex-shrink-0">
                                    📍
                                </div>
                                <div>
                                    <p className="font-medium text-copy-primary">Адрес</p>
                                    <p className="text-copy-secondary">{contactInfo.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center mr-3 flex-shrink-0">
                                    📞
                                </div>
                                <div>
                                    <p className="font-medium text-copy-primary">Телефон</p>
                                    <a
                                        href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                                        className="text-copy-secondary hover:text-cta transition-colors duration-200"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center mr-3 flex-shrink-0">
                                    ✉️
                                </div>
                                <div>
                                    <p className="font-medium text-copy-primary">Email</p>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-copy-secondary hover:text-cta transition-colors duration-200"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center mr-3 flex-shrink-0">
                                    🕐
                                </div>
                                <div>
                                    <p className="font-medium text-copy-primary">Режим работы</p>
                                    <p className="text-copy-secondary">{contactInfo.workingHours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Кнопка обратного звонка */}
                        <div className="mt-8 pt-6 border-t border-border">
                            <a
                                href="#"
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-cta text-cta-text font-medium hover:bg-cta-active transition-colors duration-200 border-2 border-cta hover:border-cta-active shadow-md hover:shadow-lg"
                            >
                                <span className="mr-2">📞</span>
                                Заказать обратный звонок
                            </a>
                        </div>
                    </div>
                </div>

                {/* Копирайт и доп. ссылки */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-copy-secondary text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} IT Solutions. Все права защищены.
                        </div>

                    </div>

                    {/* Информация о разработчике */}
                    <div className="mt-6 text-center text-xs text-copy-secondary opacity-70">
                        Разработано с ❤️ для вашего бизнеса
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
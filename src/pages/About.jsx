import React from 'react'

function About() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">О компании</h1>

                <div className="space-y-8">
                    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Наша миссия</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Мы - команда профессионалов, занимающаяся разработкой IT-решений
                            для современных бизнес-задач. Наша цель - создавать инновационные
                            продукты, которые упрощают жизнь пользователей и помогают компаниям
                            достигать новых высот в цифровую эпоху.
                        </p>
                    </section>

                    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Наша история</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Основанная в 2015 году, наша компания начинала с небольшой команды
                            энтузиастов. Сегодня мы выросли в полноценную IT-компанию с десятками
                            успешных проектов и довольных клиентов по всему миру.
                        </p>
                    </section>

                    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Наши ценности</h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>Качество:</strong> Мы гарантируем высокое качество каждого проекта</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>Инновации:</strong> Постоянное внедрение новых технологий</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>Надежность:</strong> Долгосрочная поддержка и сопровождение</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>Прозрачность:</strong> Четкие сроки, бюджет и коммуникация</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Наша команда</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            В нашей команде работают высококвалифицированные специалисты:
                            разработчики, дизайнеры, менеджеры проектов и тестировщики.
                            Каждый член команды - эксперт в своей области.
                        </p>
                    </section>

                    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Контакты</h2>
                        <div className="space-y-3 text-gray-700 dark:text-gray-300">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Email: info@company.com</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Телефон: +7 (XXX) XXX-XX-XX</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Адрес: г. Москва, ул. Примерная, д. 1</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About
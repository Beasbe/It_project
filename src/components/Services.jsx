import { useState } from 'react';

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        { id: 2, title: 'инфраструктура', description: 'Проектирование и внедрение серверной инфраструктуры, систем хранения данных, виртуализация, облачные решения и техническая поддержка.' },
        { id: 3, title: 'сети', description: 'Построение и оптимизация локальных и распределенных сетей, настройка маршрутизации, беспроводные решения и мониторинг сетевой инфраструктуры.' },
        { id: 4, title: 'информационная безопасность', description: 'Комплексная защита данных: аудит безопасности, внедрение систем защиты, мониторинг угроз и обучение сотрудников кибербезопасности.' },
        { id: 5, title: 'объединенные коммуникации', description: 'Интеграция голосовой связи, видеоконференций, мгновенных сообщений и корпоративных мессенджеров в единую коммуникационную среду.' },
        { id: 6, title: 'контактные центры', description: 'Внедрение современных контакт-центров, систем записи разговоров, аналитики клиентских обращений и интеграции с CRM-системами.' },
        { id: 7, title: 'бизнес-ориентированные решения', description: 'Разработка и внедрение специализированных решений для оптимизации бизнес-процессов, аналитики и повышения эффективности.' }
    ];

    return (
        <section className="py-16 bg-background ">
            <div className="px-4">

                <div className="text-center">
                    <p className="text-4xl md:text-5xl text-copy-primary mb-8">
                        IT решения для вашего бизнеса
                    </p>
                    <p className="text-lg text-copy-secondary mb-12">
                        Комплексные услуги для цифровизации вашей компании
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Левая колонка - сетка услуг */}
                    <div className="lg:w-1/2">
                        {/* УБЕРИТЕ bg-card shadow-lg - сделаем просто сетку */}
                        <div className="h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        className={`border border-primary-default rounded-xl p-8 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-lg min-h-[120px] flex flex-col justify-center ${
                                            activeService?.id === service.id
                                                ? 'bg-cta text-cta-text transform scale-[1.02] shadow-lg'
                                                : 'bg-card text-copy-primary'  // ← Исправлено
                                        }`}
                                        onMouseEnter={() => setActiveService(service)}
                                        onMouseLeave={() => setActiveService(null)}
                                    >
                                        <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide text-center">
                                            {service.title}
                                        </h3>
                                        {activeService?.id === service.id && (
                                            <div className="mt-2 flex justify-center">
                                                <div className="w-6 h-1 bg-cta-text rounded-full"></div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка - детали услуги */}
                    <div className="lg:w-1/2">
                        <div className="sticky top-8">
                            <div className={`border border-primary-default rounded-xl p-8 bg-card shadow-lg transition-all duration-500 min-h-[400px] flex flex-col ${
                                activeService ? 'justify-center' : 'justify-center items-center'
                            }`}>
                                {activeService ? (
                                    <div className="animate-fadeIn">
                                        <div className="mb-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-2 h-6 bg-cta rounded-full"></div>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-copy-primary uppercase tracking-wide">
                                                {activeService.title}
                                            </h3>
                                        </div>

                                        <div className="mb-8">
                                            <p className="text-lg text-copy-secondary leading-relaxed">
                                                {activeService.description}
                                            </p>
                                        </div>

                                    </div>
                                ) : (
                                    <div className="text-center p-8">
                                        <div className="w-24 mx-auto flex items-center justify-center mb-6">
                                        </div>

                                        <div className="mb-6">
                                            <span className="text-2xl text-copy-primary mb-3">
                                                IT решения для вашего бизнеса
                                            </span>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Футер секции */}
                <div className="mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
'use client'

import { useState } from 'react'
import servicesData from '@/data/services'

const Services = () => {
    const [activeService, setActiveService] = useState<number | null>(null)
    
    // По умолчанию показываем первый сервис
    const defaultService = servicesData[0]

    return (
        <section className="py-16 bg-background">
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
                        <div className="h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {servicesData.map((service) => (
                                    <button
                                        key={service.id}
                                        className={`border border-primary-default rounded-xl p-8 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-lg min-h-[120px] flex flex-col justify-center ${
                                            activeService === service.id
                                                ? 'bg-cta text-cta-text transform scale-[1.02] shadow-lg'
                                                : 'bg-card text-copy-primary'
                                        }`}
                                        onMouseEnter={() => setActiveService(service.id)}
                                        onMouseLeave={() => setActiveService(null)}
                                        onClick={() => setActiveService(service.id)}
                                    >
                                        <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide text-center">
                                            {service.title}
                                        </h3>
                                        {activeService === service.id && (
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
                            <div className={`border border-primary-default rounded-xl p-8 bg-card shadow-lg transition-all duration-500 min-h-[400px] flex flex-col justify-center`}>
                                {activeService !== null ? (
                                    <div className="animate-fadeIn">
                                        <div className="mb-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-2 h-6 bg-cta rounded-full"></div>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-copy-primary uppercase tracking-wide">
                                                {servicesData.find(s => s.id === activeService)?.title}
                                            </h3>
                                        </div>

                                        <div className="mb-8">
                                            <p className="text-lg text-copy-secondary leading-relaxed">
                                                {servicesData.find(s => s.id === activeService)?.description}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center p-8">
                                        <div className="mb-6">
                                            <span className="text-2xl text-copy-primary mb-3">
                                                {defaultService.title}
                                            </span>
                                        </div>
                                        <p className="text-lg text-copy-secondary leading-relaxed">
                                            {defaultService.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
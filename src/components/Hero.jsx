import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeShape, setActiveShape] = useState(0);

    const shapes = [
        { id: 1, color: 'cta', size: 'w-32 h-32', position: 'top-10 left-10' },
        { id: 2, color: 'grape', size: 'w-24 h-24', position: 'bottom-20 right-16' },
        { id: 3, color: 'cta-active', size: 'w-40 h-40', position: 'top-1/3 right-20' },
        { id: 4, color: 'border', size: 'w-16 h-16', position: 'bottom-10 left-1/3' },
    ];

    useEffect(() => {
        if (isHovered) {
            const interval = setInterval(() => {
                setActiveShape(prev => (prev + 1) % shapes.length);
            }, 1500);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <section className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 bg-background overflow-hidden">
            <div
                className="relative w-full max-w-4xl h-full flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Анимированный фон с фигурами */}
                <div className="absolute inset-0 -z-10">
                    {shapes.map((shape, index) => (
                        <div
                            key={shape.id}
                            className={`
                absolute rounded-full bg-${shape.color}/20
                ${shape.size} ${shape.position}
                transition-all duration-1000 ease-in-out
                ${isHovered && activeShape === index
                                ? 'opacity-100 scale-125 blur-0'
                                : 'opacity-30 scale-100 blur-sm'
                            }
                ${index === activeShape ? 'animate-pulse' : ''}
              `}
                        />
                    ))}
                </div>

                {/* Основной контент */}
                <div className="relative z-20 text-center">
                    {/* Главный заголовок с эффектом свечения */}
                    <div className={`
            relative inline-block mb-8
            transition-all duration-700
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              <span className={`
                block bg-gradient-to-r from-cta to-grape bg-clip-text text-transparent
                transition-all duration-500
                ${isHovered ? 'drop-shadow-[0_0_30px_rgba(var(--cta),0.5)]' : ''}
              `}>
                INNOVA
              </span>
                            <span className={`
                block text-3xl md:text-5xl font-light mt-2
                transition-all duration-700 delay-200
                ${isHovered
                                ? 'text-copy-primary translate-y-0 opacity-100'
                                : 'text-copy-secondary translate-y-4 opacity-0'
                            }
              `}>
                Tech Solutions
              </span>
                        </h1>

                        {/* Акцентная линия под текстом */}
                        <div className={`
              h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-cta to-transparent
              transition-all duration-1000
              ${isHovered ? 'w-full max-w-xl' : 'w-0'}
            `} />
                    </div>

                    {/* Вращающийся индикатор */}
                    <div className="flex justify-center mb-8">
                        <div className={`
              w-16 h-16 rounded-full border-2 border-dashed border-cta/50
              flex items-center justify-center
              transition-all duration-1000
              ${isHovered ? 'rotate-180 scale-125' : 'rotate-0 scale-100'}
            `}>
                            <div className={`
                w-3 h-3 rounded-full bg-cta
                transition-all duration-500
                ${isHovered ? 'scale-150' : ''}
              `} />
                        </div>
                    </div>

                    {/* Минималистичный текст */}
                    <div className={`
            space-y-4 max-w-xl mx-auto
            transition-all duration-700 delay-300
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
                        <p className="text-lg text-copy-secondary font-light">
                            Мы создаём будущее через инновации
                        </p>

                        {/* Анимированные точки */}
                        <div className="flex justify-center space-x-2">
                            {[1, 2, 3].map((dot) => (
                                <div
                                    key={dot}
                                    className={`
                    w-2 h-2 rounded-full bg-cta
                    transition-all duration-500
                    ${isHovered
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-0'
                                    }
                    ${isHovered ? `delay-${dot * 300}` : ''}
                  `}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Кнопка CTA */}
                    <div className={`
            mt-8
            transition-all duration-700 delay-500
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}>
                        <button className={`
              relative px-6 py-3 rounded-full bg-cta text-cta-text font-semibold
              overflow-hidden group
              transition-all duration-500
              hover:bg-cta-active hover:scale-105 hover:shadow-xl
              ${isHovered ? 'animate-bounce' : ''}
            `}>
                            <span className="relative z-10">Исследовать</span>
                            <span className={`
                absolute inset-0 bg-white/20 rounded-full
                transition-all duration-700
                ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
              `} />
                        </button>
                    </div>

                    {/* Индикатор наведения */}
                    <div className={`
            absolute -bottom-6 left-1/2 transform -translate-x-1/2
            text-xs text-copy-secondary
            transition-all duration-500
            ${isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
          `}>
                        <div className="flex items-center space-x-1">
                            <div className="h-63.5 rounded-full bg-cta animate-pulse" />
                            <span className="text-2xl">Айти проект</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
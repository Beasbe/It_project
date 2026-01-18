// components/Partners.jsx
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const Partners = () => {
    const companies = [
        "TechCorp", "InnovateCo", "FutureSystems", "DigitalSolutions",
        "WebMasters", "CloudNet", "DataFlow", "SecureSoft",
        "AppCraft", "CodeLab", "PixelPerfect", "NetVantage",
        "ByteWorks", "MetaLogic", "SwiftStack", "CyberCore"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);
    const itemsPerView = 4;
    const visibleItems = 8;

    const extendedCompanies = [...companies, ...companies, ...companies];

    useEffect(() => {
        if (!isAutoPlaying) return;

        autoPlayRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % companies.length);
        }, 3000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, companies.length]);

    const handleNext = () => {
        stopAutoPlay();
        setCurrentIndex(prev => (prev + 2) % companies.length);
    };

    const handlePrev = () => {
        stopAutoPlay();
        setCurrentIndex(prev => (prev - 2 + companies.length) % companies.length);
    };

    const stopAutoPlay = () => {
        setIsAutoPlaying(false);
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const itemWidth = 100 / itemsPerView;
    const offset = -currentIndex * itemWidth;

    return (
        <section className="py-16 bg-card border-t border-primary-default w-full">
            <div className="px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-12">Наши партнеры</h2>
                </div>

                <div className="relative w-full">

                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(${offset}%)` }}
                        >
                            {extendedCompanies.map((company, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-2 md:px-4"
                                    style={{ width: `${itemWidth}%` }}
                                >
                                    <div className="bg-background border border-primary-default rounded-xl p-4 md:p-8 h-28 md:h-32 flex items-center justify-center transition-all duration-300 hover:border-cta hover:shadow-lg group mx-1">
                                        <span className="text-lg md:text-xl font-semibold text-copy-primary group-hover:text-cta transition-colors text-center">
                                            {company}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Кнопки навигации */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full border border-primary-default hover:border-cta hover:bg-cta/10 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!isAutoPlaying && currentIndex === 0}
                        >
                            <ChevronLeft
                                size={24}
                                className="text-copy-primary group-hover:text-cta transition-colors"
                            />
                        </button>

                        <div className="flex items-center gap-2">
                            {companies.slice(0, 6).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === currentIndex % companies.length
                                            ? 'bg-cta w-6'
                                            : 'bg-border'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full border border-primary-default hover:border-cta hover:bg-cta/10 transition-all duration-300 group"
                        >
                            <ChevronRight
                                size={24}
                                className="text-copy-primary group-hover:text-cta transition-colors"
                            />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Partners;
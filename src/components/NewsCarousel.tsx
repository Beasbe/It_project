'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsData, type NewsItem } from '@/data/newsData';

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    
  const latestNews = [...newsData]
    .sort((a, b) => {
      // Сортируем по году (убывание)
      if (b.year !== a.year) {
        return b.year - a.year;
      }
      
      // Если год одинаковый, пытаемся сортировать по дате
      try {
        // Преобразуем "15 марта 2024" в Date
        const parseDate = (dateStr: string) => {
          const months: Record<string, number> = {
            'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5,
            'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
          };
          
          // Убираем год из строки и парсим
          const withoutYear = dateStr.replace(/\d{4}$/, '').trim();
          const parts = withoutYear.split(' ');
          
          if (parts.length >= 2) {
            const day = parseInt(parts[0]);
            const monthName = parts[1].toLowerCase();
            const month = months[monthName];
            
            if (!isNaN(day) && month !== undefined) {
              return new Date(a.year, month, day);
            }
          }
          
          // Если не получилось распарсить, возвращаем дату по умолчанию
          return new Date(a.year, 0, 1);
        };
        
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
      } catch {
        return 0;
      }
    })
    .slice(0, 7);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? latestNews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === latestNews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentNews = latestNews[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card">
      {/* Заголовок карусели */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-copy-primary">
            Последние новости
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-copy-secondary">
              {currentIndex + 1} / {latestNews.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={goToPrev}
                className="p-2 hover:bg-background rounded-full transition-colors"
                title="Предыдущая"
              >
                <svg className="w-5 h-5 text-copy-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="p-2 hover:bg-background rounded-full transition-colors"
                title="Следующая"
              >
                <svg className="w-5 h-5 text-copy-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент карусели */}
      <div className="relative">
        {/* Слайд */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Изображение */}
          <div className="relative h-64 lg:h-96 overflow-hidden">
            {currentNews.image ? (
              <Image
                src={currentNews.image}
                alt={currentNews.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={currentIndex === 0}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-border/30">
                <svg className="w-16 h-16 text-copy-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-cta text-cta-text text-sm font-medium rounded-full">
                {currentNews.category}
              </span>
            </div>
          </div>

          {/* Контент */}
          <div className="p-6 lg:p-8">
            <div className="mb-4">
              <span className="text-sm text-copy-secondary">
                {currentNews.date}
              </span>
              <span className="mx-2 text-copy-secondary">•</span>
              <span className="text-sm text-copy-secondary">
                {currentNews.year} год
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-copy-primary mb-4">
              {currentNews.title}
            </h3>

            <p className="text-copy-secondary mb-6 line-clamp-4">
              {currentNews.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <Link
                href={`/news/${currentNews.id}`}
                className="inline-flex items-center px-5 py-3 bg-cta text-cta-text font-medium rounded-lg hover:bg-cta-active transition-colors group"
              >
                Читать полностью
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Точки навигации внизу */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-center space-x-3">
          {latestNews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-2 bg-cta rounded-full'
                  : 'w-2 h-2 bg-border rounded-full hover:bg-copy-secondary'
              }`}
              aria-label={`Перейти к новости ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
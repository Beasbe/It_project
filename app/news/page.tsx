'use client';

import React, { useState, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import NewsCarousel from '../../src/components/NewsCarousel';
import NewsCard from '../../src/components/NewsCard';
import NewsArchiveRow from '../../src/components/NewsArchiveRow';
import { newsData } from '@/data/newsData';

function NewsPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Получаем категорию из URL только один раз при загрузке
    const initialCategory = searchParams.get('category') || 'Все';
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedYear, setSelectedYear] = useState('Все');
    const [viewMode, setViewMode] = useState('grid');
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    // Получаем уникальные категории
    const categories = useMemo(() => {
        const categorySet = new Set<string>();
        newsData.forEach(news => categorySet.add(news.category));
        return ['Все', ...Array.from(categorySet)];
    }, []);

    // Получаем уникальные годы
    const years = useMemo(() => {
        const yearSet = new Set<number>();
        newsData.forEach(news => yearSet.add(news.year));
        const sortedYears = Array.from(yearSet).sort((a, b) => b - a);
        return ['Все', ...sortedYears];
    }, []);

    // Фильтрация новостей
    const filteredNews = useMemo(() => {
        let filtered = newsData;

        if (selectedCategory !== 'Все') {
            filtered = filtered.filter(news => news.category === selectedCategory);
        }

        if (selectedYear !== 'Все') {
            filtered = filtered.filter(news => news.year === parseInt(selectedYear));
        }

        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(news =>
                news.title.toLowerCase().includes(query) ||
                news.excerpt.toLowerCase().includes(query) ||
                news.content.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [searchQuery, selectedCategory, selectedYear]);

    // Пагинация
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = filteredNews.slice(startIndex, endIndex);

    // Обработчик смены страницы
    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Обработчик сброса фильтров
    const handleResetFilters = useCallback(() => {
        setSearchQuery('');
        setSelectedCategory('Все');
        setSelectedYear('Все');
        setCurrentPage(1);
        router.push('/news');
    }, [router]);

    // Обработчик изменения категории с обновлением URL
    const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
        setCurrentPage(1);
        
        // Обновляем URL без использования useEffect
        if (newCategory !== 'Все') {
            router.push(`/news?category=${encodeURIComponent(newCategory)}`, { scroll: false });
        } else {
            router.push('/news', { scroll: false });
        }
    }, [router]);

    // Обработчик поиска с debounce (опционально)
    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    }, []);

    // Обработчик изменения года
    const handleYearChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
        setCurrentPage(1);
    }, []);

    // Обработчик изменения количества элементов
    const handleItemsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    }, []);

    // Генерация кнопок пагинации
    const paginationButtons = useMemo(() => {
        if (totalPages <= 1) return [];
        
        const buttons = [];
        const maxVisible = 5;
        
        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) buttons.push(i);
                buttons.push('...');
                buttons.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                buttons.push(1);
                buttons.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) buttons.push(i);
            } else {
                buttons.push(1);
                buttons.push('...');
                buttons.push(currentPage - 1);
                buttons.push(currentPage);
                buttons.push(currentPage + 1);
                buttons.push('...');
                buttons.push(totalPages);
            }
        }
        
        return buttons;
    }, [currentPage, totalPages]);

    return (
        <div className="min-h-screen py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Заголовок */}
                <div className="mb-8 md:mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-copy-primary mb-4">
                        Все новости
                    </h1>
                    <p className="text-lg text-copy-secondary max-w-3xl mx-auto">
                        Полный архив новостей компании. Будьте в курсе всех наших достижений и событий.
                    </p>
                </div>

                {/* Карусель с последними новостями */}
                <div className="mb-12">
                    <NewsCarousel />
                </div>

                {/* Панель поиска и фильтров */}
                <div className="mb-8 bg-card border border-border rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Поиск */}
                        <div>
                            <label className="block text-sm font-medium text-copy-primary mb-2">
                                Поиск по новостям
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder="Введите ключевые слова..."
                                    className="w-full px-4 py-3 pl-12 bg-background border border-border rounded-lg focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-colors"
                                />
                                <svg className="absolute left-4 top-3.5 w-5 h-5 text-copy-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Фильтр по категории */}
                        <div>
                            <label className="block text-sm font-medium text-copy-primary mb-2">
                                Категория
                            </label>
                            <select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-colors"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Фильтр по году */}
                        <div>
                            <label className="block text-sm font-medium text-copy-primary mb-2">
                                Год
                            </label>
                            <select
                                value={selectedYear}
                                onChange={handleYearChange}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-colors"
                            >
                                {years.map(year => (
                                    <option key={year} value={year}>
                                        {year === 'Все' ? 'Все годы' : year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Управление отображением */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-copy-secondary">
                                Режим просмотра:
                            </span>
                            <div className="flex border border-border rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-4 py-2 transition-colors ${viewMode === 'grid' ? 'bg-cta text-cta-text' : 'bg-background hover:bg-card'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`px-4 py-2 transition-colors ${viewMode === 'list' ? 'bg-cta text-cta-text' : 'bg-background hover:bg-card'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-copy-secondary">
                                Показывать по:
                            </span>
                            <select
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                                className="px-3 py-2 bg-background border border-border rounded-lg focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-colors"
                            >
                                <option value={6}>6</option>
                                <option value={12}>12</option>
                                <option value={24}>24</option>
                                <option value={48}>48</option>
                            </select>
                        </div>

                        <div className="flex items-center space-x-4">
                            {(searchQuery !== '' || selectedCategory !== 'Все' || selectedYear !== 'Все') && (
                                <button
                                    onClick={handleResetFilters}
                                    className="px-4 py-2 text-sm border border-border rounded-lg hover:border-cta hover:text-cta transition-colors"
                                >
                                    Сбросить фильтры
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Результаты поиска */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-copy-primary">
                                Найдено новостей: {filteredNews.length}
                            </h2>
                            {searchQuery && (
                                <p className="text-copy-secondary mt-1">
                                    По запросу: "<span className="font-medium">{searchQuery}</span>"
                                </p>
                            )}
                        </div>
                        {filteredNews.length > 0 && (
                            <div className="text-sm text-copy-secondary">
                                Страница {currentPage} из {totalPages}
                            </div>
                        )}
                    </div>

                    {/* Отображение новостей */}
                    {currentNews.length > 0 ? (
                        <>
                            {viewMode === 'grid' ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentNews.map((news) => (
                                        <NewsCard key={news.id} news={news} />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-card border border-border rounded-lg overflow-hidden">
                                    <div className="p-4 border-b border-border bg-background/50">
                                        <div className="grid grid-cols-12 text-sm font-medium text-copy-secondary">
                                            <div className="col-span-3">Дата</div>
                                            <div className="col-span-2">Категория</div>
                                            <div className="col-span-6">Заголовок</div>
                                            <div className="col-span-1"></div>
                                        </div>
                                    </div>

                                    <div className="divide-y divide-border">
                                        {currentNews.map((news) => (
                                            <NewsArchiveRow key={news.id} news={news} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Пагинация */}
                            {totalPages > 1 && (
                                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div className="text-sm text-copy-secondary">
                                        Показано {startIndex + 1}-{Math.min(endIndex, filteredNews.length)} из {filteredNews.length} новостей
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-cta hover:text-cta transition-colors"
                                        >
                                            ← Назад
                                        </button>

                                        <div className="flex items-center space-x-2">
                                            {paginationButtons.map((pageNum, index) => (
                                                pageNum === '...' ? (
                                                    <span key={`ellipsis-${index}`} className="text-copy-secondary px-2">
                                                        ...
                                                    </span>
                                                ) : (
                                                    <button
                                                        key={pageNum}
                                                        onClick={() => handlePageChange(pageNum as number)}
                                                        className={`w-10 h-10 rounded-lg transition-colors ${
                                                            currentPage === pageNum
                                                                ? 'bg-cta text-cta-text'
                                                                : 'border border-border hover:border-cta hover:text-cta'
                                                        }`}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                )
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-cta hover:text-cta transition-colors"
                                        >
                                            Вперед →
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-border/30 flex items-center justify-center">
                                <svg className="w-12 h-12 text-copy-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-copy-primary mb-2">
                                Новости не найдены
                            </h3>
                            <p className="text-copy-secondary mb-6 max-w-md mx-auto">
                                Попробуйте изменить параметры поиска или выбрать другую категорию
                            </p>
                            <button
                                onClick={handleResetFilters}
                                className="px-6 py-3 bg-cta text-cta-text font-medium rounded-lg hover:bg-cta-active transition-colors"
                            >
                                Показать все новости
                            </button>
                        </div>
                    )}
                </div>

                {/* Статистика */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-card border border-border rounded-lg">
                            <div className="text-3xl font-bold text-cta mb-2">
                                {newsData.length}
                            </div>
                            <div className="text-sm text-copy-secondary">
                                Всего новостей
                            </div>
                        </div>
                        <div className="text-center p-4 bg-card border border-border rounded-lg">
                            <div className="text-3xl font-bold text-grape mb-2">
                                {years.length - 1}
                            </div>
                            <div className="text-sm text-copy-secondary">
                                Года
                            </div>
                        </div>
                        <div className="text-center p-4 bg-card border border-border rounded-lg">
                            <div className="text-3xl font-bold text-cta mb-2">
                                {categories.length - 1}
                            </div>
                            <div className="text-sm text-copy-secondary">
                                Категорий
                            </div>
                        </div>
                        <div className="text-center p-4 bg-card border border-border rounded-lg">
                            <div className="text-3xl font-bold text-grape mb-2">
                                {Math.max(...years.slice(1) as number[])} - {Math.min(...years.slice(1) as number[])}
                            </div>
                            <div className="text-sm text-copy-secondary">
                                Период
                            </div>
                        </div>
                    </div>
                </div>

                {/* Быстрые ссылки на категории */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-copy-primary mb-4">
                        Популярные категории:
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {categories.slice(1).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setSelectedCategory(cat);
                                    setCurrentPage(1);
                                    router.push(`/news?category=${encodeURIComponent(cat)}`, { scroll: false });
                                }}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    selectedCategory === cat
                                        ? 'bg-cta text-cta-text'
                                        : 'bg-card border border-border hover:border-cta hover:text-cta'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function NewsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cta mx-auto"></div>
            <p className="mt-4 text-copy-secondary">Загрузка новостей...</p>
          </div>
        </div>
      </div>
    }>
      <NewsPageContent />
    </Suspense>
  );
}
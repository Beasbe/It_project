import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    return (
        <div className="group bg-card border border-border rounded-lg overflow-hidden transition-theme hover:shadow-lg hover:border-cta">
            {/* Фото сверху */}
            <div className="relative h-48 overflow-hidden">
                {news.image ? (
                    <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-border/30">
                        <svg className="w-12 h-12 text-copy-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Контент под фото */}
            <div className="p-5">
                {/* Категория и дата в одну строку */}
                <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-border/30 text-copy-secondary">
                        [{news.category}]
                    </span>
                    <span className="text-sm text-copy-secondary">
                        {news.date}
                    </span>
                </div>

                {/* Заголовок */}
                <h3 className="text-lg font-semibold text-copy-primary mb-3 line-clamp-2 group-hover:text-cta transition-colors">
                    {news.title}
                </h3>

                {/* Год и ссылка */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-copy-secondary">
                        {news.year} год
                    </span>
                    <Link
                        to={`/news/${news.id}`}
                        className="inline-flex items-center text-sm text-cta font-medium hover:text-cta-active transition-colors"
                    >
                        Подробнее
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
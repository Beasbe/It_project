import React from 'react';
import { Link } from 'react-router-dom';

const NewsArchiveRow = ({ news }) => {
    return (
        <div className="flex items-center py-4 px-4 border-b border-border hover:bg-card/50 transition-colors group">
            {/* Дата слева */}
            <div className="w-28 flex-shrink-0">
                <div className="text-sm text-copy-secondary">
                    {news.date}
                </div>
                <div className="text-xs text-copy-secondary mt-1">
                    {news.year} год
                </div>
            </div>

            {/* Категория */}
            <div className="w-32 flex-shrink-0 ml-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-border/30 text-copy-secondary">
                    [{news.category}]
                </span>
            </div>

            {/* Заголовок */}
            <div className="flex-1 ml-6 min-w-0">
                <h3 className="text-base font-medium text-copy-primary group-hover:text-cta transition-colors line-clamp-2">
                    {news.title}
                </h3>
            </div>

            {/* Кнопка справа */}
            <div className="w-24 flex-shrink-0 ml-4 text-right">
                <Link
                    to={`/news/${news.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm border border-border rounded-lg hover:border-cta hover:text-cta transition-colors whitespace-nowrap"
                >
                    Перейти
                </Link>
            </div>
        </div>
    );
};

export default NewsArchiveRow;
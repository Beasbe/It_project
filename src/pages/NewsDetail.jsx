import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsData } from '../data/newsData';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const news = newsData.find(item => item.id === parseInt(id));

    if (!news) {
        return (
            <div className="min-h-screen py-12 px-4 text-center">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-copy-primary mb-6">Новость не найдена</h1>
                    <p className="text-lg text-copy-secondary mb-8">
                        Запрашиваемая новость не существует или была удалена.
                    </p>
                    <Link
                        to="/news"
                        className="px-6 py-3 bg-cta text-cta-text font-medium rounded-lg hover:bg-cta-active transition-colors"
                    >
                        Вернуться к новостям
                    </Link>
                </div>
            </div>
        );
    }

    const relatedNews = newsData
        .filter(item => item.id !== news.id && item.category === news.category)
        .slice(0, 2);

    return (
        <div className="min-h-screen py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Кнопка назад */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center text-copy-secondary hover:text-copy-primary transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Назад к новостям
                </button>

                {/* Заголовок */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cta text-cta-text text-sm font-medium rounded-full">
                            {news.category}
                        </span>
                        <span className="text-sm text-copy-secondary">
                            {news.date}
                        </span>
                        {news.featured && (
                            <span className="text-xs font-medium px-2 py-1 bg-grape/10 text-grape rounded-full">
                                Важное
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-copy-primary mb-6">
                        {news.title}
                    </h1>
                    <p className="text-lg text-copy-secondary">
                        {news.excerpt}
                    </p>
                </div>

                {/* Изображение */}
                {news.image && (
                    <div className="mb-8 rounded-lg overflow-hidden">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>
                )}

                {/* Контент */}
                <div className="prose prose-lg max-w-none mb-12">
                    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                        <div className="text-lg text-copy-primary leading-relaxed whitespace-pre-line">
                            {news.content}
                        </div>
                    </div>
                </div>

                {/* Похожие новости */}
                {relatedNews.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-copy-primary mb-6">
                            Похожие новости
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedNews.map(related => (
                                <div key={related.id} className="bg-card border border-border rounded-lg p-6 hover:border-cta transition-colors">
                                    <h3 className="text-xl font-semibold text-copy-primary mb-2">
                                        {related.title}
                                    </h3>
                                    <p className="text-sm text-copy-secondary mb-3">
                                        {related.date} • {related.category}
                                    </p>
                                    <p className="text-copy-secondary mb-4 line-clamp-2">
                                        {related.excerpt}
                                    </p>
                                    <Link
                                        to={`/news/${related.id}`}
                                        className="inline-flex items-center text-cta font-medium hover:text-cta-active transition-colors"
                                    >
                                        Читать
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Навигация */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
                    <Link
                        to="/news"
                        className="mb-4 md:mb-0 px-6 py-3 bg-cta text-cta-text font-medium rounded-lg hover:bg-cta-active transition-colors"
                    >
                        Все новости
                    </Link>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-copy-secondary">
                            Поделиться:
                        </span>
                        <button className="p-2 hover:bg-background rounded-full transition-colors">
                            <svg className="w-5 h-5 text-copy-secondary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-background rounded-full transition-colors">
                            <svg className="w-5 h-5 text-copy-secondary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5.883 18.653c-3.152-.475-5.878-3.154-5.878-6.653 0-3.587 2.876-6.5 6.424-6.5 3.548 0 6.424 2.913 6.424 6.5 0 1.39-.425 2.683-1.155 3.755l-2.512-.419c.227-.73.35-1.504.35-2.336 0-2.485-1.991-4.5-4.448-4.5-2.456 0-4.447 2.015-4.447 4.5 0 2.485 1.991 4.5 4.447 4.5 1.104 0 2.12-.405 2.905-1.075l-1.074-1.773c-.546.44-1.206.687-1.831.687-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3c0 .275-.037.54-.107.795l2.507.418c.266-.93.413-1.915.413-2.913 0-4.142-3.32-7.5-7.424-7.5-4.105 0-7.424 3.358-7.424 7.5 0 4.142 3.32 7.5 7.424 7.5 1.78 0 3.435-.61 4.755-1.645l-1.249-2.062c-.956.706-2.125 1.107-3.376 1.107z" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-background rounded-full transition-colors">
                            <svg className="w-5 h-5 text-copy-secondary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
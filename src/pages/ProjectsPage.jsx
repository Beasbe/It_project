// pages/ProjectsPage.jsx
import { useState } from 'react';
import { ArrowRight, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';

const ProjectsPage = () => {
    const [filterYear, setFilterYear] = useState('Все');
    const [filterCategory, setFilterCategory] = useState('Все');
    const [searchQuery, setSearchQuery] = useState('');

    // Получаем уникальные года для фильтра
    const years = ['Все', ...new Set(projectsData.map(p => p.year).sort((a, b) => b - a))];

    // Получаем уникальные категории для фильтра
    const categories = ['Все', ...new Set(projectsData.map(p => p.category))];

    // Фильтрация проектов
    const filteredProjects = projectsData.filter(project => {
        const matchesYear = filterYear === 'Все' || project.year === parseInt(filterYear);
        const matchesCategory = filterCategory === 'Все' || project.category === filterCategory;
        const matchesSearch = searchQuery === '' ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesYear && matchesCategory && matchesSearch;
    });

    // Сброс фильтров
    const resetFilters = () => {
        setFilterYear('Все');
        setFilterCategory('Все');
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* Hero секция */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-grape/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

                <div className="px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl font-bold text-copy-primary mb-6">
                                Наши <span className="text-cta">проекты</span>
                            </h1>
                            <p className="text-xl text-copy-secondary max-w-3xl mx-auto leading-relaxed">
                                Более 10 лет мы реализуем сложные инфраструктурные проекты в области телекоммуникаций,
                                СКС, видеонаблюдения и автоматизации. Здесь вы найдете наш портфолио успешных кейсов.
                            </p>
                        </div>

                        {/* Статистика */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                            <div className="bg-card border border-primary-default rounded-2xl p-6 text-center">
                                <div className="text-4xl font-bold text-cta mb-2">{projectsData.length}+</div>
                                <div className="text-copy-secondary">Реализованных проектов</div>
                            </div>
                            <div className="bg-card border border-primary-default rounded-2xl p-6 text-center">
                                <div className="text-4xl font-bold text-cta mb-2">
                                    {new Set(projectsData.map(p => p.year)).size}+
                                </div>
                                <div className="text-copy-secondary">Лет успешной работы</div>
                            </div>
                            <div className="bg-card border border-primary-default rounded-2xl p-6 text-center">
                                <div className="text-4xl font-bold text-cta mb-2">
                                    {new Set(projectsData.map(p => p.client)).size}+
                                </div>
                                <div className="text-copy-secondary">Довольных клиентов</div>
                            </div>
                            <div className="bg-card border border-primary-default rounded-2xl p-6 text-center">
                                <div className="text-4xl font-bold text-cta mb-2">24/7</div>
                                <div className="text-copy-secondary">Техническая поддержка</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Фильтры и поиск */}
            <section className="px-4 md:px-6 lg:px-8 mb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-card border border-primary-default rounded-2xl p-6 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {/* Поиск */}
                            <div>
                                <label className="block text-sm font-medium text-copy-secondary mb-2">
                                    Поиск проектов
                                </label>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Название проекта, описание, локация..."
                                    className="w-full px-4 py-3 bg-background border border-primary-default rounded-xl focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all"
                                />
                            </div>

                            {/* Фильтр по году */}
                            <div>
                                <label className="block text-sm font-medium text-copy-secondary mb-2">
                                    Год реализации
                                </label>
                                <select
                                    value={filterYear}
                                    onChange={(e) => setFilterYear(e.target.value)}
                                    className="w-full px-4 py-3 bg-background border border-primary-default rounded-xl focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all appearance-none"
                                >
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Фильтр по категории */}
                            <div>
                                <label className="block text-sm font-medium text-copy-secondary mb-2">
                                    Категория
                                </label>
                                <select
                                    value={filterCategory}
                                    onChange={(e) => setFilterCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-background border border-primary-default rounded-xl focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all appearance-none"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="text-copy-secondary">
                                Найдено проектов: <span className="font-bold text-copy-primary">{filteredProjects.length}</span>
                            </div>
                            <button
                                onClick={resetFilters}
                                className="px-6 py-3 text-cta hover:text-cta-active font-medium hover:bg-cta/10 rounded-xl transition-all"
                            >
                                Сбросить фильтры
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Сетка проектов */}
            <section className="px-4 md:px-6 lg:px-8 mb-20">
                <div className="max-w-7xl mx-auto">
                    {filteredProjects.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="group bg-card border border-primary-default rounded-2xl overflow-hidden hover:shadow-2xl hover:border-cta/50 transition-all duration-500 h-full flex flex-col"
                                    >
                                        {/* Верхний блок с годом и категорией */}
                                        <div className="h-48 bg-gradient-to-r from-cta/20 to-grape/20 relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-4xl font-bold text-white/30">
                                                    {project.title.charAt(0)}
                                                </div>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-cta text-white text-sm font-medium rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                                                <Calendar size={14} className="text-cta" />
                                                <span className="text-sm font-medium">{project.year}</span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-grow">
                                            <h3 className="text-xl font-bold text-copy-primary mb-4 group-hover:text-cta transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-copy-secondary mb-6 leading-relaxed">
                                                {project.shortDescription}
                                            </p>

                                            {/* Локация */}
                                            <div className="flex items-center gap-2 text-copy-secondary mb-6">
                                                <MapPin size={16} />
                                                <span className="font-medium">{project.location}</span>
                                            </div>

                                            {/* Результаты (первые 2) */}
                                            <div className="space-y-2 mb-6">
                                                {project.results.slice(0, 2).map((result, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <CheckCircle size={14} className="text-cta" />
                                                        <span className="text-sm text-copy-secondary">{result}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Футер с кнопкой */}
                                        <div className="px-6 py-4 border-t border-border">
                                            <Link
                                                to={`/projects/${project.slug}`}
                                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-cta text-white rounded-xl hover:bg-cta-active transition-all duration-300 font-medium group/btn"
                                            >
                                                <span>Подробнее о проекте</span>
                                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Пагинация */}
                            <div className="flex justify-center">
                                <div className="flex items-center gap-2">
                                    <button className="px-4 py-2 bg-card border border-primary-default rounded-xl text-copy-secondary hover:text-cta hover:border-cta transition-colors">
                                        ← Назад
                                    </button>
                                    <button className="px-4 py-2 bg-cta text-white rounded-xl font-medium">
                                        1
                                    </button>
                                    <button className="px-4 py-2 bg-card border border-primary-default rounded-xl text-copy-secondary hover:text-cta hover:border-cta transition-colors">
                                        2
                                    </button>
                                    <button className="px-4 py-2 bg-card border border-primary-default rounded-xl text-copy-secondary hover:text-cta hover:border-cta transition-colors">
                                        Далее →
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-5xl mb-6">🔍</div>
                            <h3 className="text-2xl font-bold text-copy-primary mb-4">
                                Проекты не найдены
                            </h3>
                            <p className="text-copy-secondary mb-8 max-w-md mx-auto">
                                Попробуйте изменить параметры фильтрации или введите другой поисковый запрос
                            </p>
                            <button
                                onClick={resetFilters}
                                className="px-8 py-3 bg-cta text-white rounded-xl hover:bg-cta-active transition-colors font-medium"
                            >
                                Показать все проекты
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA секция */}
            <section className="px-4 md:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-cta to-grape rounded-3xl overflow-hidden shadow-2xl">
                        <div className="p-12 text-center">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Хотите обсудить свой проект?
                            </h2>
                            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
                                Наши специалисты готовы проконсультировать вас и предложить оптимальное решение
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-cta rounded-xl hover:bg-white/90 transition-all duration-300 font-semibold text-lg group"
                                >
                                    <span>Обсудить проект</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+78001234567"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
                                >
                                    +7 (800) 123-45-67
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
// pages/ProjectDetail.jsx
import { ArrowLeft, Calendar, MapPin, User, CheckCircle, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projects';

const ProjectDetail = () => {
    const { slug } = useParams();

    // Находим проект по slug
    const project = projectsData.find(p => p.slug === slug);

    // Если проект не найден
    if (!project) {
        return (
            <div className="min-h-screen bg-background pt-24 pb-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-6">😕</div>
                    <h1 className="text-4xl font-bold text-copy-primary mb-4">Проект не найден</h1>
                    <p className="text-copy-secondary mb-8">Такого проекта не существует или он был удален</p>
                    <Link
                        to="/It_project/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white rounded-xl hover:bg-cta-active transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Вернуться к проектам
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="px-4 md:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Навигация */}
                    <div className="mb-8">
                        <Link
                            to="/It_project/projects"
                            className="inline-flex items-center gap-2 text-cta hover:text-cta-active font-medium"
                        >
                            <ArrowLeft size={20} />
                            Назад к проектам
                        </Link>
                    </div>

                    {/* Hero секция */}
                    <div className="bg-gradient-to-r from-cta/10 to-grape/10 rounded-3xl p-8 md:p-12 mb-12">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            <div className="flex-grow">
                                <div className="inline-flex flex-wrap gap-3 mb-6">
                                    <span className="px-4 py-2 bg-cta text-white rounded-full font-medium">
                                        {project.category}
                                    </span>
                                    <span className="px-4 py-2 bg-white border border-primary-default rounded-full font-medium flex items-center gap-2">
                                        <Calendar size={16} />
                                        {project.year} год
                                    </span>
                                    <span className="px-4 py-2 bg-white border border-primary-default rounded-full font-medium flex items-center gap-2">
                                        <MapPin size={16} />
                                        {project.location}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold text-copy-primary mb-6">
                                    {project.title}
                                </h1>

                                <p className="text-xl text-copy-secondary mb-8">
                                    {project.shortDescription}
                                </p>

                                <div className="flex flex-wrap gap-6">
                                    {project.client && (
                                        <div className="flex items-center gap-3">
                                            <User className="text-cta" size={20} />
                                            <div>
                                                <div className="text-sm text-copy-secondary">Клиент</div>
                                                <div className="font-medium">{project.client}</div>
                                            </div>
                                        </div>
                                    )}
                                    {project.duration && (
                                        <div className="flex items-center gap-3">
                                            <Calendar className="text-cta" size={20} />
                                            <div>
                                                <div className="text-sm text-copy-secondary">Срок реализации</div>
                                                <div className="font-medium">{project.duration}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="lg:w-1/3 w-full">
                                <div className="bg-white border border-primary-default rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-copy-primary mb-4">Технологии</h3>
                                    <div className="space-y-3">
                                        {project.technologies.map((tech, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <CheckCircle size={16} className="text-cta" />
                                                <span className="text-copy-secondary">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Основной контент */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {/* Полное описание */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-copy-primary mb-6">О проекте</h2>
                                <div className="prose prose-lg max-w-none">
                                    {project.fullDescription.split('\n').map((paragraph, index) => (
                                        <p key={index} className="text-copy-secondary leading-relaxed mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Вызовы и решения */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-copy-primary mb-6">Вызовы и решения</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-card border border-primary-default rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-copy-primary mb-4 flex items-center gap-3">
                                            <span className="p-2 bg-red-100 text-red-600 rounded-lg">⚠️</span>
                                            Задачи и сложности
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                                    <span className="text-copy-secondary">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-card border border-primary-default rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-copy-primary mb-4 flex items-center gap-3">
                                            <span className="p-2 bg-green-100 text-green-600 rounded-lg">✅</span>
                                            Достигнутые результаты
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.results.map((result, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1 w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-copy-secondary">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Боковая панель */}
                        <div className="space-y-6">
                            {/* Результаты */}
                            <div className="bg-gradient-to-b from-cta to-grape rounded-2xl p-6 text-white">
                                <h3 className="text-2xl font-bold mb-6">Ключевые результаты</h3>
                                <div className="space-y-4">
                                    {project.results.map((result, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                                <CheckCircle size={16} />
                                            </div>
                                            <span className="font-medium">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA блок */}
                            <div className="bg-card border border-primary-default rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-copy-primary mb-4">
                                    Похожий проект?
                                </h3>
                                <p className="text-copy-secondary mb-6">
                                    У нас есть опыт решения подобных задач. Обсудим ваш проект?
                                </p>
                                <Link
                                    to="/It_project/contact"
                                    className="block w-full text-center py-3 bg-cta text-white rounded-xl hover:bg-cta-active transition-colors font-medium"
                                >
                                    Обсудить проект
                                </Link>
                            </div>

                            {/* Другие проекты */}
                            <div className="bg-card border border-primary-default rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-copy-primary mb-4">
                                    Похожие проекты
                                </h3>
                                <div className="space-y-4">
                                    {projectsData
                                        .filter(p => p.category === project.category && p.id !== project.id)
                                        .slice(0, 2)
                                        .map(relatedProject => (
                                            <Link
                                                key={relatedProject.id}
                                                to={`/It_project/projects/${relatedProject.slug}`}
                                                className="block p-4 bg-background rounded-xl hover:bg-cta/5 transition-colors group"
                                            >
                                                <div className="font-medium mb-2 group-hover:text-cta transition-colors">
                                                    {relatedProject.title}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm text-copy-secondary">
                                                        {relatedProject.year}
                                                    </div>
                                                    <ArrowRight size={16} className="text-cta opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
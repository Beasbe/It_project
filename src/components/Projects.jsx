// components/Projects.jsx
import { useState } from 'react';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Коттеджный поселок Экодолье',
            description: 'Полная телефонизация коттеджного поселка с организацией телефонной сети для всех домовладений',
            year: 2023,
            location: 'Калужская область',
            articleUrl: '/projects/ekodolje',
        },
        {
            id: 2,
            title: 'Завод Агрисовгаз',
            description: 'СКС в цехах и отдельностоящем административном корпусе, видеонаблюдение, ВОЛС на территории завода',
            year: 2023,
            location: 'Калужская область',
            articleUrl: '/projects/agrisovgaz',
        },
        {
            id: 3,
            title: 'Людиновский тепловозостроительный завод',
            description: 'Компьютерная сеть завода (26 цехов + 2 административных здания) на основе ВОЛС, СКС на 700 портов, АТС, видеонаблюдение',
            year: 2022,
            location: 'Людиново',
            articleUrl: '/projects/ludinov-factory',
        },
        {
            id: 4,
            title: 'Фольксваген Рус',
            description: 'Поставки компьютерной и оргтехники, монтаж стационарных и мобильных радиостанций',
            year: 2023,
            location: 'Калуга',
            articleUrl: '/projects/volkswagen',
        },
        {
            id: 5,
            title: 'Стадион в Анненках',
            description: 'Серверная комната, СКС, видеонаблюдение, телефонная сеть, коллективное телевидение',
            year: 2022,
            location: 'Калуга',
            articleUrl: '/projects/stadium',
        },
        {
            id: 6,
            title: 'Администрация городского головы',
            description: 'Проектирование, монтаж, обслуживание офисной АТС на 600 номеров, системы видеонаблюдения',
            year: 2023,
            location: 'Калуга',
            articleUrl: '/projects/administration',
        },
        {
            id: 7,
            title: 'Птицефабрика в Белоусово',
            description: 'Комплекс работ по проектированию, монтажу, обслуживанию СКС, АТС, видеонаблюдения',
            year: 2022,
            location: 'Белоусово',
            articleUrl: '/projects/poultry-farm',
        },
        {
            id: 8,
            title: 'Завод Магна',
            description: 'Оснащение временного офиса, построение компьютерной и телефонной сети, проектирование коммуникаций',
            year: 2023,
            location: 'Калуга',
            articleUrl: '/projects/magna',
        },
        {
            id: 9,
            title: 'Гостиница "Ока"',
            description: 'Проектирование и монтаж АТС Panasonic на 200 номеров',
            year: 2023,
            location: 'Калуга',
            articleUrl: '/projects/oka-hotel',
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden w-full border-t border-primary-default">
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-grape/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="px-4 md:px-6 lg:px-8 relative z-10">
                {/* Заголовок */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
                        <span>Наши проекты</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-copy-primary mb-6">
                        Реализованные <span className="text-cta">решения</span>
                    </h2>
                </div>

                {/* Сетка проектов - 3 колонки */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-card border border-primary-default rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-cta/50 h-full flex flex-col"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Шапка карточки */}
                            <div className="p-2 pb-6 flex-grow">
                                {/* Верхний блок - год */}
                                <div className="flex mb-8">
                                    <div className="inline-flex px-4 py-2 bg-cta/10 text-cta rounded-full text-base font-medium">
                                        {project.year}
                                    </div>
                                </div>

                                {/* Название проекта */}
                                <h3 className="text-2xl font-bold text-copy-primary mb-6 text-center group-hover:text-cta transition-colors leading-tight">
                                    {project.title}
                                </h3>

                                {/* Разделительная линия */}
                                <div className="mb-8 flex justify-center">
                                    <div className="w-16 h-1 bg-cta/30 rounded-full"></div>
                                </div>

                                {/* Описание */}
                                <p className="text-lg text-copy-secondary leading-relaxed text-center mb-10">
                                    {project.description}
                                </p>
                            </div>

                            {/* Футер карточки с кнопкой статьи */}
                            <div className="px-8 py-6 border-t border-border bg-background/50">
                                <div className="flex items-center justify-between">
                                    {/* Локация - слева */}
                                    <div className="text-base text-copy-secondary font-medium ml-3">
                                        {project.location}
                                    </div>

                                    {/* Анимированная стрелка на статью - справа */}
                                    <a
                                        href={project.articleUrl}
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-cta text-cta-text rounded-lg hover:bg-cta-active transition-all duration-300 font-medium group/btn"
                                        title="Подробнее о проекте"
                                    >
                                        <ArrowRight
                                            size={18}
                                            className="group-hover/btn:translate-x-1 transition-transform duration-300"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* Эффект наведения */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-cta/5 to-transparent pointer-events-none transition-opacity duration-300 ${
                                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                            }`}></div>
                        </div>
                    ))}
                </div>

                {/* Кнопка "Все проекты" */}
                <div className="text-center">
                    <a
                        href="/projects"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-cta text-cta-text rounded-xl hover:bg-cta-active transition-all duration-300 font-semibold text-xl group shadow-lg hover:shadow-xl"
                    >
                        <span>Смотреть все проекты</span>
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                </div>


            </div>
        </section>
    );
};

export default Projects;
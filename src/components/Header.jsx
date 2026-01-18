import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isDark = theme === 'dark';

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    const navItems = [
        { name: 'Каталог решений', href: '#' },
        { name: 'IT решения', href: '#' },
        { name: 'О компании', href: '#' },
        { name: 'Новости', href: '#' },
        { name: 'Контакты', href: '#' }
    ];

    return (
        <header className="top-0 z-10 bg-card text-copy-primary shadow-md transition-colors duration-300">
            <div className="container mx-auto px-4 py-4">
                {/* Для десктопа - отдельная структура */}
                <div className="hidden md:flex items-center justify-between m-3">
                    {/* Логотип */}
                    <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 bg-cta rounded flex items-center justify-center">
                            <span className="text-cta-text font-bold text-lg">IT</span>
                        </div>
                        <span className="text-xl font-bold text-copy-primary">
                            АйТи ПРОЕКТ
                        </span>
                    </div>

                    {/* Навигация с отступами */}
                    <nav className="flex items-center gap-8 space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-copy-secondary select-none hover:text-cta transition-colors font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Переключатель темы */}
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={toggleTheme}
                            aria-label={isDark ? "Светлая тема" : "Темная тема"}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Для мобилки - отдельная структура */}
                <div className="flex items-center justify-between md:hidden">
                    {/* Логотип */}
                    <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 bg-cta rounded flex items-center justify-center">
                            <span className="text-cta-text font-bold text-lg">IT</span>
                        </div>
                        <span className="text-xl font-bold text-copy-primary">
                            АйТи ПРОЕКТ
                        </span>
                    </div>

                    {/* Переключатель темы и кнопка меню */}
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={toggleTheme}
                            aria-label={isDark ? "Светлая тема" : "Темная тема"}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-gray-100"
                            aria-label="Открыть меню"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Мобильное меню */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="py-2 text-copy-secondary hover:text-cta transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
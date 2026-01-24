// components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        organization: '',
        name: '',
        phone: '',
        email: '',
        message: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        let processedValue = value;
        if (name === 'phone') {
            processedValue = formatPhoneNumber(value);
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : processedValue
        }));

        if (errors[name]) {
            validateField(name, type === 'checkbox' ? checked : processedValue);
        }
    };

    const formatPhoneNumber = (value) => {
        let cleaned = value.replace(/\D/g, '');
        cleaned = cleaned.substring(0, 11);

        if (cleaned.length === 0) return '';
        if (cleaned.length <= 1) return `+${cleaned}`;
        if (cleaned.length <= 4) return `+${cleaned.slice(0,1)} (${cleaned.slice(1)}`;
        if (cleaned.length <= 7) return `+${cleaned.slice(0,1)} (${cleaned.slice(1,4)}) ${cleaned.slice(4)}`;
        if (cleaned.length <= 9) return `+${cleaned.slice(0,1)} (${cleaned.slice(1,4)}) ${cleaned.slice(4,7)}-${cleaned.slice(7)}`;
        return `+${cleaned.slice(0,1)} (${cleaned.slice(1,4)}) ${cleaned.slice(4,7)}-${cleaned.slice(7,9)}-${cleaned.slice(9)}`;
    };

    const validateField = (name, value) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'Имя обязательно для заполнения';
                } else if (value.trim().length < 2) {
                    newErrors.name = 'Имя должно содержать минимум 2 символа';
                } else {
                    delete newErrors.name;
                }
                break;

            case 'phone':
                if (!value.trim()) {
                    newErrors.phone = 'Телефон обязателен для заполнения';
                } else {
                    const phoneDigits = value.replace(/\D/g, '');
                    if (phoneDigits.length < 11) {
                        newErrors.phone = 'Введите корректный номер телефона (минимум 11 цифр)';
                    } else if (!/^[78]\d{10}$/.test(phoneDigits)) {
                        newErrors.phone = 'Введите корректный российский номер телефона';
                    } else {
                        delete newErrors.phone;
                    }
                }
                break;

            case 'email':
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors.email = 'Введите корректный email';
                } else {
                    delete newErrors.email;
                }
                break;

            case 'agree':
                if (!value) {
                    newErrors.agree = 'Необходимо согласие на обработку данных';
                } else {
                    delete newErrors.agree;
                }
                break;

            default:
                break;
        }

        setErrors(newErrors);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Имя должно содержать минимум 2 символа';
        }

        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (!formData.phone.trim()) {
            newErrors.phone = 'Телефон обязателен для заполнения';
        } else if (phoneDigits.length < 11) {
            newErrors.phone = 'Введите корректный номер телефона (минимум 11 цифр)';
        } else if (!/^[78]\d{10}$/.test(phoneDigits)) {
            newErrors.phone = 'Введите корректный российский номер телефона';
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }

        if (!formData.agree) {
            newErrors.agree = 'Необходимо согласие на обработку данных';
        }

        return newErrors;
    };

    const isFormValid = () => {
        const phoneDigits = formData.phone.replace(/\D/g, '');
        return (
            formData.name.trim().length >= 2 &&
            phoneDigits.length >= 11 &&
            /^[78]\d{10}$/.test(phoneDigits) &&
            formData.agree &&
            (!formData.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Здесь обычно отправка данных на сервер
        console.log('Форма отправлена:', {
            ...formData,
            phone: formData.phone.replace(/\D/g, '')
        });

        // Симуляция успешной отправки
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                organization: '',
                name: '',
                phone: '',
                email: '',
                message: '',
                agree: false,
            });
            setErrors({});
        }, 3000);
    };

    const handleBlur = (e) => {
        const { name, value, type, checked } = e.target;
        validateField(name, type === 'checkbox' ? checked : value);
    };

    const inputClasses = "w-full px-4 py-3 rounded-lg border border-border bg-card text-copy-primary placeholder-copy-secondary focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all duration-200";
    const labelClasses = "block text-sm font-medium text-copy-secondary mb-2";

    if (isSubmitted) {
        return (
            <div className="max-w-4xl mx-auto p-8 text-center">
                <div className="animate-fadeIn">
                    <div className="w-16 h-16 bg-cta text-cta-text rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cta">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-copy-primary mb-3">
                        Спасибо за обращение!
                    </h3>
                    <p className="text-copy-secondary">
                        Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-8">
            <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-copy-primary mb-4">
                    Свяжитесь с нами
                </h2>
                <p className="text-lg text-copy-secondary">
                    Заполните форму ниже, и наши специалисты свяжутся с вами для обсуждения вашего проекта
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Первая строка: Организация и Имя */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="organization" className={labelClasses}>
                            Название организации
                        </label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={inputClasses}
                            placeholder="Введите название вашей компании"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className={labelClasses}>
                            Имя <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Ваше имя"
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                        )}
                    </div>
                </div>

                {/* Вторая строка: Телефон и Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className={labelClasses}>
                            Телефон <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputClasses} ${errors.phone ? 'border-red-500' : ''}`}
                            placeholder="+7 (999) 999-99-99"
                        />
                        {errors.phone && (
                            <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClasses}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="your@email.com"
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* Сообщение */}
                <div>
                    <label htmlFor="message" className={labelClasses}>
                        Сообщение
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClasses} min-h-[120px] resize-y`}
                        placeholder="Опишите ваш проект или задайте вопрос..."
                        rows="4"
                    />
                </div>

                {/* Согласие */}
                <div className="pt-4">
                    <div className={`flex items-start p-4 rounded-lg border ${errors.agree ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-border bg-card'}`}>
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="mt-1 mr-3 h-5 w-5 text-cta rounded focus:ring-cta focus:ring-2 border-2 border-border checked:border-cta"
                        />
                        <label htmlFor="agree" className="text-sm text-copy-primary">
                            Я даю согласие на обработку моих <u>персональных данных</u>
                        </label>
                    </div>
                    {errors.agree && (
                        <p className="mt-2 text-sm text-red-500">{errors.agree}</p>
                    )}
                </div>

                {/* Кнопка отправки */}
                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={!isFormValid()}
                        className={`
                            w-full py-4 px-6 rounded-lg font-semibold text-lg 
                            transition-all duration-300 relative
                            ${isFormValid()
                            ? 'bg-cta text-cta-text hover:bg-cta-active cursor-pointer border-2 border-cta hover:border-cta-active shadow-lg hover:shadow-xl active:scale-[0.98]'
                            : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed border-2 border-gray-400 dark:border-gray-600'
                        }
                        `}
                    >
                        <span className="relative z-10">Отправить сообщение</span>

                        {isFormValid() && (
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-cta via-orange-500 to-cta-active bg-[length:200%_100%] animate-gradient-border opacity-30"></div>
                        )}
                    </button>

                    <style jsx>{`
                        @keyframes gradient-border {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                        .animate-gradient-border {
                            animation: gradient-border 3s ease infinite;
                        }
                    `}</style>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
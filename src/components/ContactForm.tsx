import Link from "next/link";

export default function ContactForm() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Левая часть - 3/4 ширины */}
          <div className="w-full lg:w-3/4">
            {/* Верхний текст */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-copy-primary leading-tight">
                Получите подробную консультацию
                <br className="hidden sm:block" />
                и пробный расчёт по вашему
                <br className="hidden sm:block" />
                проекту
              </h2>
            </div>

            {/* Линия разделитель */}
            <div className="w-24 h-1 bg-grape mb-8 lg:mb-12"></div>

            {/* Нижний текст */}
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl text-copy-secondary leading-relaxed">
                Заполните контактную форму и специалист нашей компании свяжется
                с вами
              </p>
            </div>
          </div>

          {/* Правая часть - 1/4 ширины */}
          <div className="w-full lg:w-1/4">
            {/* Прямоугольник с формой */}
            <div className="bg-card border border-border shadow-md p-6 md:p-8">
              <form className="space-y-4">
                {/* Поле имени */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-copy-secondary mb-1"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors text-copy-primary"
                    required
                  />
                </div>

                {/* Поле телефона */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-copy-secondary mb-1"
                  >
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+7 (999) 999-99-99"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors text-copy-primary"
                    required
                  />
                </div>

                {/* Оранжевая кнопка */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 mt-2"
                >
                  Отправить заявку
                </button>
              </form>

              {/* Текст с политикой конфиденциальности */}
              <p className="text-xs text-copy-secondary text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <Link
                  href="/privacy"
                  className="text-cta hover:text-cta-active underline transition-colors"
                >
                  Политикой конфиденциальности
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

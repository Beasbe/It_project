import Link from "next/link";

export default function ContactForm() {
  return (
    <section className="py-12 md:py-16 bg-background transition-theme">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Левая часть - 3/4 ширины */}
          <div className="w-full lg:w-3/4">
            {/* Верхний текст */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-copy-primary leading-tight transition-colors duration-300">
                Получите подробную консультацию
                <br />
                и пробный расчёт по вашему
                <br />
                проекту
              </h2>

              {/* Линия разделитель */}
              <div className="w-24 h-1 bg-cta mt-6 mb-8 lg:mb-12 transition-colors duration-300" />

              {/* Нижний текст */}
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl text-copy-secondary leading-relaxed transition-colors duration-300">
                  Заполните контактную форму и специалист нашей компании
                  свяжется с вами
                </p>
              </div>
            </div>
          </div>

          {/* Правая часть - 1/4 ширины */}
          <div className="w-full lg:w-1/4">
            {/* Прямоугольник с формой */}
            <div className="bg-card border border-default border-border shadow-md p-6 md:p-8 rounded-xl transition-theme">
              <form className="space-y-4">
                {/* Поле имени */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-copy-secondary mb-1 transition-colors duration-300"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-background border border-default border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors text-copy-primary placeholder:text-copy-secondary/50"
                    required
                  />
                </div>

                {/* Поле телефона */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-copy-secondary mb-1 transition-colors duration-300"
                  >
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+7 (999) 999-99-99"
                    className="w-full px-4 py-3 bg-background border border-default border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors text-copy-primary placeholder:text-copy-secondary/50"
                    required
                  />
                </div>

                {/* Кнопка отправки - используем CTA переменные */}
                <button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta-active text-cta-text font-semibold py-3 px-4 rounded-lg transition-colors duration-300 mt-2"
                >
                  Отправить заявку
                </button>
              </form>

              {/* Текст с политикой конфиденциальности */}
              <p className="text-xs text-copy-secondary text-center mt-4 transition-colors duration-300">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <Link
                  href="/privacy"
                  className="text-cta hover:text-cta-active underline transition-colors duration-300"
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

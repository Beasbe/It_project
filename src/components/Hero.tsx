import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden group">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="i.jpg"
          alt="Строительная индустрия"
          fill
          className="object-cover"
          priority
        />
        {/* Осветление внизу */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
      </div>

      {/* Полупрозрачный прямоугольник при наведении */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-3xl mx-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ИТ решения в строительной индустрии
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Проектирование зданий и сооружений на передовой
            <br />
            информационных технологий
          </p>
        </div>
      </div>

      {/* Альтернативный вариант с текстом, который всегда виден (если нужно) */}
      {/* <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white bg-gradient-to-t from-black/50 to-transparent">
        <h2 className="text-2xl font-bold">ИТ решения в строительной индустрии</h2>
      </div> */}
    </section>
  );
}

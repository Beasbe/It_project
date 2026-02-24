import Image from "next/image";

const directions = [
  {
    id: 1,
    title: "Промышленное проектирование",
    description:
      "Проектирование заводов, фабрик, производственных цехов и складских комплексов любой сложности.",
    icon: "/icons/industrial.svg",
  },
  {
    id: 2,
    title: "Гражданское строительство",
    description:
      "Жилые комплексы, офисные здания, торговые центры и объекты социальной инфраструктуры.",
    icon: "/icons/civil.svg",
  },
  {
    id: 3,
    title: "Транспортная инфраструктура",
    description:
      "Дороги, мосты, тоннели, развязки и транспортные узлы с применением современных технологий.",
    icon: "/icons/transport.svg",
  },
  {
    id: 4,
    title: "Энергетические объекты",
    description:
      "Электростанции, подстанции, котельные и инженерные сети энергоснабжения.",
    icon: "/icons/energy.svg",
  },
  {
    id: 5,
    title: "Гидротехнические сооружения",
    description:
      "Плотины, дамбы, каналы, системы водоснабжения и водоотведения.",
    icon: "/icons/hydro.svg",
  },
  {
    id: 6,
    title: "Ландшафтное проектирование",
    description:
      "Благоустройство территорий, парки, скверы и рекреационные зоны.",
    icon: "/icons/landscape.svg",
  },
  {
    id: 7,
    title: "Реконструкция и реставрация",
    description:
      "Восстановление и модернизация существующих зданий и сооружений с сохранением исторического облика.",
    icon: "/icons/restoration.svg",
  },
];

export default function Directions() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-copy-primary text-center mb-12 md:mb-16">
          Направления работ
        </h2>

        {/* Сетка карточек с центрированием */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {directions.map((direction) => (
            <div
              key={direction.id}
              className="w-full sm:w-[calc(50%-1rem)] max-w-md"
            >
              <DirectionCard direction={direction} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectionCard({ direction }: { direction: (typeof directions)[0] }) {
  return (
    <div
      className="
      w-full
      bg-card
      shadow-md
      border border-border
      p-6 md:p-8
      flex flex-col items-center text-center
      transition-all duration-300 ease-out
      hover:shadow-xl hover:scale-[1.02] hover:border-cta/30
      group
      relative
      min-h-[280px] sm:min-h-[300px] md:min-h-[320px]  /* Фиксированная минимальная высота */
      h-auto
    "
    >
      {/* Иконка на верхней грани */}
      <div
        className="
        absolute
        -top-8
        left-1/2
        transform -translate-x-1/2
        w-16 h-16
        bg-card
        rounded-full
        shadow-md
        border border-border
        flex items-center justify-center
        transition-all duration-300
        group-hover:shadow-lg group-hover:border-cta/30 group-hover:scale-110
      "
      >
        <div className="relative w-8 h-8">
          <Image
            src={direction.icon}
            alt={direction.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Контент карточки с отступом для иконки */}
      <div className="mt-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-copy-primary mb-3 transition-colors duration-300 group-hover:text-cta">
          {direction.title}
        </h3>
        <p className="text-sm md:text-base text-copy-secondary leading-relaxed">
          {direction.description}
        </p>
      </div>
    </div>
  );
}

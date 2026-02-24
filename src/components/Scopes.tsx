import {
  BuildingOfficeIcon,
  HomeModernIcon,
  TruckIcon,
  BoltIcon,
  BeakerIcon,
  SunIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

// Массив с направлениями (убираем поле icon, добавляем component)
const directions = [
  {
    id: 1,
    title: "Промышленное проектирование",
    description:
      "Проектирование заводов, фабрик, производственных цехов и складских комплексов любой сложности.",
    icon: BuildingOfficeIcon, // Передаем компонент иконки
  },
  {
    id: 2,
    title: "Гражданское строительство",
    description:
      "Жилые комплексы, офисные здания, торговые центры и объекты социальной инфраструктуры.",
    icon: HomeModernIcon,
  },
  {
    id: 3,
    title: "Транспортная инфраструктура",
    description:
      "Дороги, мосты, тоннели, развязки и транспортные узлы с применением современных технологий.",
    icon: TruckIcon,
  },
  {
    id: 4,
    title: "Энергетические объекты",
    description:
      "Электростанции, подстанции, котельные и инженерные сети энергоснабжения.",
    icon: BoltIcon,
  },
  {
    id: 5,
    title: "Гидротехнические сооружения",
    description:
      "Плотины, дамбы, каналы, системы водоснабжения и водоотведения.",
    icon: BeakerIcon,
  },
  {
    id: 6,
    title: "Ландшафтное проектирование",
    description:
      "Благоустройство территорий, парки, скверы и рекреационные зоны.",
    icon: SunIcon,
  },
  {
    id: 7,
    title: "Реконструкция и реставрация",
    description:
      "Восстановление и модернизация существующих зданий и сооружений с сохранением исторического облика.",
    icon: WrenchScrewdriverIcon,
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

        {/* Сетка карточек */}
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
  const IconComponent = direction.icon;

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
      min-h-[280px] sm:min-h-[300px] md:min-h-[320px]
      h-auto
    "
    >
      {/* Иконка на верхней грани - теперь перекрывает границу */}
      <div
        className="
        absolute
        -top-8
        left-1/2
        transform -translate-x-1/2
        w-16 h-16
        bg-white
        rounded-full
        shadow-md
        border border-border
        flex items-center justify-center
        transition-all duration-300
        group-hover:shadow-lg group-hover:border-cta/30 group-hover:scale-110
        z-10  /* Поднимаем иконку выше */
      "
      >
        <IconComponent className="w-8 h-8 text-copy-primary group-hover:text-cta transition-colors duration-300" />
      </div>

      {/* Контент карточки */}
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

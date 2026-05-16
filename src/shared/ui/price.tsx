import { RussianRubleIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

const patch = "/img/services";

const PRICES_DATA: PriceItemProps[] = [
  {
    name: "Комплексный уход",
    price: 800,
    duration: "1.5-2 часа",
    items: ["Мытье", "Сушка", "Вычесывание", "Стрижка когтей", "Чистка ушей"],
    img: `${patch}/1.jpg`,
  },
  {
    name: "Модельная стрижка",
    price: 600,
    duration: "1-1.5 часа",
    items: [
      "Стрижка по породе",
      "Оформление морды",
      "Филировка",
      "Обработка лап",
    ],
    img: `${patch}/2.jpg`,
  },
  {
    name: "Гигиена",
    price: 300,
    duration: "30-40 мин",
    items: [
      "Стрижка когтей",
      "Чистка ушей",
      "Выстригание подушечек лап",
      "Гигиена глаз",
    ],
    img: `${patch}/3.jpg`,
  },
  {
    name: "Тримминг",
    price: 700,
    duration: "1.5-2 часа",
    items: ["Выщипывание отмершей шерсти", "Обработка", "Формирование силуэта"],
    img: `${patch}/4.jpg`,
  },
  {
    name: "Груминг кошек",
    price: 500,
    duration: "1-1.5 часа",
    items: ["Вычесывание колтунов", "Мытье", "Стрижка когтей", "Чистка ушей"],
    img: `${patch}/5.jpg`,
  },
  {
    name: "SPA-уход",
    price: 1000,
    duration: "2-2.5 часа",
    items: ["Аромамытье", "Пилинг", "Массаж", "Парфюм"],
    img: `${patch}/6.jpg`,
  },
];

const PriceComponent = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PRICES_DATA.map((item) => (
        <PriceItem key={item.name} {...item} />
      ))}
    </section>
  );
};

interface PriceItemProps {
  img: string;
  name: string;
  price: number;
  items: string[];
  duration: string;
}

const PriceItem: FC<PriceItemProps> = ({
  name,
  price,
  items,
  duration,
  img,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg border shadow-sm hover:shadow-md transition-shadow min-h-[350px]">
      {img && (
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover -z-10"
          priority={false}
        />
      )}

      <div className="relative p-6 text-white">
        <p className="text-xl font-semibold mb-3">{name}</p>

        <p className="text-sm text-white/80 mb-4">{duration}</p>

        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-white/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="absolute bottom-4 left-4 inline-icon  text-xl gap-1 rounded-full bg-white text-black w-fit px-2 py-1">
        <span className="text-lg">от</span>
        {price}
        <RussianRubleIcon size={20} />
      </p>
    </div>
  );
};

export { PriceComponent, PriceItem };

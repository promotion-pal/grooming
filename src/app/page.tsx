import { appConfig } from "@/shared/config/app";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-10" />

        <Image
          fill
          alt="intro"
          src="/img/intro.webp"
          className="object-cover rounded-lg"
        />

        <div className="container relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Профессиональный груминг
              <span className="block text-3xl md:text-4xl mt-2">
                для ваших питомцев
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Забота, любовь и профессиональный уход за вашими питомцами. Более
              5 лет опыта, тысячи довольных клиентов и их хвостатых друзей.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={appConfig.company.phone.link}
                className="inline-flex items-center px-8 py-3 bg-wrapper text-wrapper-foreground rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Записаться онлайн
              </Link>

              <button className="inline-flex items-center px-8 py-3 border-2 border-wrapper rounded-full font-semibold hover:bg-wrapper hover:text-wrapper-foreground transition-all">
                Наши работы
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            alt="Background"
            src="/img/1.jpg"
            className="object-cover"
            style={{ objectPosition: "50% 50%" }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Почему выбирают нас
            </span>

            <h2 className="h1 mt-2 mb-4">Наши преимущества</h2>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Мы создали идеальные условия для комфортного пребывания вашего
              питомца
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🐾",
                title: "Опытные мастера",
                desc: "Сертифицированные грумеры с многолетним стажем",
              },
              {
                icon: "✨",
                title: "Качественная косметика",
                desc: "Используем только профессиональные средства",
              },
              {
                icon: "🏠",
                title: "Комфортная атмосфера",
                desc: "Отдельный кабинет без стресса для животного",
              },
              {
                icon: "⭐",
                title: "Гарантия результата",
                desc: "Довольны 98% наших клиентов",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-wrapper/10 rounded-xl p-6 text-center hover:bg-wrapper/20 transition-all backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Что мы предлагаем
            </span>

            <h2 className="h1 mt-2 mb-4">Услуги и цены</h2>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Индивидуальный подход к каждому питомцу и породе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Комплексный уход",
                price: "от 800 ₴",
                duration: "1.5-2 часа",
                items: [
                  "Мытье",
                  "Сушка",
                  "Вычесывание",
                  "Стрижка когтей",
                  "Чистка ушей",
                ],
              },
              {
                name: "Модельная стрижка",
                price: "от 600 ₴",
                duration: "1-1.5 часа",
                items: [
                  "Стрижка по породе",
                  "Оформление морды",
                  "Филировка",
                  "Обработка лап",
                ],
              },
              {
                name: "Гигиена",
                price: "от 300 ₴",
                duration: "30-40 мин",
                items: [
                  "Стрижка когтей",
                  "Чистка ушей",
                  "Выстригание подушечек лап",
                  "Гигиена глаз",
                ],
              },
              {
                name: "Тримминг",
                price: "от 700 ₴",
                duration: "1.5-2 часа",
                items: [
                  "Выщипывание отмершей шерсти",
                  "Обработка",
                  "Формирование силуэта",
                ],
              },
              {
                name: "Груминг кошек",
                price: "от 500 ₴",
                duration: "1-1.5 часа",
                items: [
                  "Вычесывание колтунов",
                  "Мытье",
                  "Стрижка когтей",
                  "Чистка ушей",
                ],
              },
              {
                name: "SPA-уход",
                price: "от 1000 ₴",
                duration: "2-2.5 часа",
                items: [
                  "Аромамытье",
                  "Маска для шерсти",
                  "Пилинг",
                  "Массаж",
                  "Парфюм",
                ],
              },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-wrapper/5 rounded-xl p-6 border border-wrapper/20 hover:border-wrapper/40 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-wrapper">
                      {service.price}
                    </div>
                    <div className="text-xs text-gray-400">
                      {service.duration}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="text-wrapper">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-wrapper/5">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Как мы работаем
            </span>
            <h2 className="h1 mt-2 mb-4">Этапы груминга</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Консультация",
                desc: "Обсуждаем пожелания, особенности породы и состояние питомца",
              },
              {
                step: "02",
                title: "Осмотр",
                desc: "Проверяем кожу, шерсть, когти и состояние здоровья",
              },
              {
                step: "03",
                title: "Процедуры",
                desc: "Выполняем все необходимые манипуляции с максимальным комфортом",
              },
              {
                step: "04",
                title: "Результат",
                desc: "Показываем результат и даем рекомендации по домашнему уходу",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-wrapper/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Мнение клиентов
            </span>
            <h2 className="h1 mt-2 mb-4">Что о нас говорят</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Анна",
                pet: "Йоркширский терьер",
                rating: 5,
                text: "Отличный салон! Привели нашу малышку в порядок. Очень аккуратно, без стресса для собаки. Теперь только к вам!",
              },
              {
                name: "Михаил",
                pet: "Немецкая овчарка",
                rating: 5,
                text: "Профессиональный подход к крупным породам. Все объяснили, показали. Результатом очень довольны!",
              },
              {
                name: "Елена",
                pet: "Британская кошка",
                rating: 5,
                text: "Спасибо, что успокоили нашу капризную кошку. Сделали все быстро и качественно. Рекомендую!",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-wrapper/5 rounded-xl p-6 border border-wrapper/20"
              >
                <div className="flex items-center gap-1 mb-3">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.pet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-wrapper/5">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-gray-400">
              Ответы на вопросы
            </span>
            <h2 className="h1 mt-2 mb-4">Часто спрашивают</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Как часто нужно проводить груминг?",
                a: "Зависит от породы и типа шерсти. В среднем раз в 1-2 месяца для собак и раз в 2-3 месяца для кошек.",
              },
              {
                q: "Принимаете ли вы агрессивных животных?",
                a: "Да, но требуется предварительная консультация. Возможно использование намордника или седативных средств.",
              },
              {
                q: "Нужны ли прививки?",
                a: "Да, для безопасности всех животных требуем наличие действующих прививок и обработки от паразитов.",
              },
              {
                q: "Как долго длится процедура?",
                a: "От 1 до 3 часов в зависимости от размера животного и сложности стрижки.",
              },
              {
                q: "Что делать, если питомец боится?",
                a: "Наши грумеры обучены работе с тревожными животными. Создаем максимально спокойную атмосферу.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-wrapper/10 rounded-lg p-4 group"
              >
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-gray-300 mt-3 pl-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-wrapper/10 to-wrapper/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="h1 mb-4">Запишитесь на груминг</h2>
              <p className="text-gray-300 mb-8">
                Оставьте заявку, и мы свяжемся с вами для выбора удобного
                времени
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-wrapper/10 rounded-lg border border-wrapper/20 focus:border-wrapper focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 bg-wrapper/10 rounded-lg border border-wrapper/20 focus:border-wrapper focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Порода питомца"
                  className="w-full px-4 py-3 bg-wrapper/10 rounded-lg border border-wrapper/20 focus:border-wrapper focus:outline-none"
                />
                <select className="w-full px-4 py-3 bg-wrapper/10 rounded-lg border border-wrapper/20 focus:border-wrapper focus:outline-none">
                  <option>Выберите услугу</option>
                  <option>Комплексный уход</option>
                  <option>Модельная стрижка</option>
                  <option>Гигиена</option>
                  <option>Тримминг</option>
                  <option>Груминг кошек</option>
                  <option>SPA-уход</option>
                </select>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-wrapper text-wrapper-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                Или позвоните нам по телефону:{" "}
                <a
                  href={appConfig.company.phone.link}
                  className="hover:underline"
                >
                  {appConfig.company.phone.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-wrapper/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="h1 mb-6">Контакты</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 mb-1">Телефон</div>
                  <a
                    href={appConfig.company.phone.link}
                    className="text-2xl font-semibold hover:underline"
                  >
                    {appConfig.company.phone.label}
                  </a>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Email</div>
                  <a
                    href={appConfig.company.email.link}
                    className="text-xl hover:underline"
                  >
                    {appConfig.company.email.label}
                  </a>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Адрес</div>
                  <div className="text-lg">г. Киев, ул. Примерная, 123</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">График работы</div>
                  <div>Пн-Пт: 9:00 - 20:00</div>
                  <div>Сб-Вс: 10:00 - 18:00</div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="text-2xl hover:text-wrapper transition-colors"
                >
                  📱
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-wrapper transition-colors"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-wrapper transition-colors"
                >
                  📸
                </a>
              </div>
            </div>
            <div>
              <div className="bg-wrapper/10 rounded-xl h-80 flex items-center justify-center border border-wrapper/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-400">Здесь будет карта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("services");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-gradient">PhotoMemory</h1>
          <div className="hidden md:flex gap-6">
            {["Услуги", "Портфолио", "Цены", "Отзывы", "Контакты"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection("контакты")} className="bg-primary hover:bg-primary/90">
            Заказать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Вернём жизнь <span className="text-gradient">вашим фотографиям</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная ретушь фото для памятников, восстановление старых снимков и создание видео-воспоминаний
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("услуги")} className="bg-primary hover:bg-primary/90">
                  <Icon name="ImagePlus" size={20} className="mr-2" />
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("портфолио")}>
                  <Icon name="Eye" size={20} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/ffafbc56-1373-4e07-9a68-2355530cbbae.jpg"
                alt="Пример работы"
                className="rounded-lg shadow-2xl w-full hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold">500+ работ</p>
                    <p className="text-sm text-muted-foreground">Выполнено с 2018 года</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная обработка фотографий с гарантией качества
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Frame",
                title: "Ретушь для памятников",
                description: "Подготовка фото для гравировки на памятниках. Коррекция тона, удаление дефектов, идеальная чёткость",
                features: ["Чёрно-белая обработка", "Улучшение резкости", "Удаление царапин"],
              },
              {
                icon: "Sparkles",
                title: "Восстановление фото",
                description: "Реставрация старых и повреждённых снимков. Устранение заломов, пятен, восстановление утраченных деталей",
                features: ["Цветокоррекция", "Устранение повреждений", "Восстановление деталей"],
              },
              {
                icon: "Video",
                title: "Видео из фотографий",
                description: "Создание трогательных видео-воспоминаний с музыкой и эффектами из ваших семейных фотографий",
                features: ["Музыкальное оформление", "Плавные переходы", "Титры и подписи"],
              },
            ].map((service, index) => (
              <Card key={index} className="hover-scale bg-card border-border group">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Примеры наших работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/016c71e6-eb27-4f0e-88f3-2dcace40b6bd.jpg",
              "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/2f6f4c0c-dea0-4c29-b1ad-ab391510672d.jpg",
              "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/ffafbc56-1373-4e07-9a68-2355530cbbae.jpg",
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg hover-scale">
                <img src={img} alt={`Работа ${index + 1}`} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="font-heading font-semibold text-lg">Проект #{index + 1}</p>
                    <p className="text-sm text-muted-foreground">Профессиональная обработка</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Цены</h2>
            <p className="text-xl text-muted-foreground">Прозрачные и честные тарифы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Базовая",
                price: "1 500",
                description: "Для простых задач",
                features: ["Базовая ретушь", "Коррекция яркости", "Удаление мелких дефектов", "1 правка бесплатно"],
              },
              {
                name: "Стандарт",
                price: "3 000",
                description: "Самый популярный",
                features: [
                  "Полная ретушь",
                  "Восстановление деталей",
                  "Цветокоррекция",
                  "2 правки бесплатно",
                  "Срочное выполнение",
                ],
                popular: true,
              },
              {
                name: "Премиум",
                price: "5 000",
                description: "Максимальное качество",
                features: [
                  "Сложная реставрация",
                  "Восстановление лица",
                  "Создание видео",
                  "Неограниченные правки",
                  "Приоритетная поддержка",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`hover-scale ${plan.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"}`}
              >
                <CardContent className="p-8">
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Популярный
                    </div>
                  )}
                  <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-heading font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}`}
                    onClick={() => scrollToSection("контакты")}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Елена М.",
                text: "Спасибо огромное за восстановление фото моей бабушки! Не думала, что можно так качественно отреставрировать старый снимок. Теперь это наша семейная реликвия.",
                rating: 5,
              },
              {
                name: "Александр П.",
                text: "Заказывал ретушь фото для памятника отца. Работа выполнена безупречно, очень профессионально. Рекомендую всем, кто ищет качество.",
                rating: 5,
              },
              {
                name: "Мария К.",
                text: "Создали прекрасное видео из фотографий для юбилея родителей. Все гости были в восторге! Спасибо за внимание к деталям и быструю работу.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="hover-scale border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                  <p className="font-heading font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Связаться с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все ваши вопросы</p>
          </div>
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-6">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                        placeholder="Опишите вашу задачу"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold mb-6">Контакты</h3>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@photomemory.ru</p>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение 2 часов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Telegram / WhatsApp</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Быстрая связь 24/7</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Мы работаем по всей России. Высылайте фотографии онлайн, а готовую работу получайте в электронном виде или печатном варианте с доставкой.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 text-gradient">PhotoMemory</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Профессиональная ретушь и восстановление фотографий с 2018 года. Сохраняем ваши воспоминания.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Ретушь для памятников</li>
                <li>Восстановление фото</li>
                <li>Видео из фотографий</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@photomemory.ru</li>
                <li>Работаем по всей России</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 PhotoMemory. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

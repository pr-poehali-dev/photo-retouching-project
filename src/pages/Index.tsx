import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 30 минут",
    });
    setFormData({ name: "", phone: "", message: "" });
    setUploadedFiles([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-gradient">PhotoMemory</h1>
          <div className="hidden md:flex gap-6">
            {["Услуги", "Портфолио", "Отзывы", "Цены", "Контакты"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => scrollToSection("контакты")} className="hidden sm:flex bg-primary hover:bg-primary/90">
              Заказать
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <h2 className="text-2xl font-heading font-bold text-gradient mb-4">Меню</h2>
                  {["Услуги", "Портфолио", "Отзывы", "Цены", "Контакты"].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(item.toLowerCase());
                        setMobileMenuOpen(false);
                      }}
                      className="text-left text-lg text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {item}
                    </button>
                  ))}
                  <Button 
                    onClick={() => {
                      scrollToSection("контакты");
                      setMobileMenuOpen(false);
                    }} 
                    className="bg-primary hover:bg-primary/90 mt-4"
                  >
                    Заказать
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-primary font-semibold text-sm">⭐ Опыт работы с 2018 года</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Сохраним светлую <span className="text-gradient">память навсегда</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная ретушь фото для памятников, восстановление старых снимков и создание видео-воспоминаний. Бережно работаем с каждой фотографией.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Работа за 1-2 дня</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>500+ выполненных работ</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span>Гарантия качества</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("контакты")} className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Заказать работу
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("портфолио")}>
                  <Icon name="Eye" size={20} className="mr-2" />
                  Примеры работ
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/11b75ac2-3d9e-4320-b333-850367f77513.jpg"
                alt="Профессиональная ретушь фотографий"
                className="rounded-lg shadow-2xl w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная обработка фотографий с индивидуальным подходом к каждой работе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Frame",
                title: "Ретушь для памятников",
                description: "Подготовка фото для гравировки на памятниках из гранита и мрамора. Чёрно-белая обработка, удаление дефектов, идеальная чёткость изображения.",
                price: "от 1500 ₽",
                image: "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/9c55fef0-9f4d-4fa7-a46b-eee251b77141.jpg"
              },
              {
                icon: "Sparkles",
                title: "Восстановление фото",
                description: "Реставрация старых, повреждённых и выцветших снимков. Устранение царапин, заломов, восстановление утраченных деталей с сохранением оригинального стиля.",
                price: "от 3000 ₽",
                image: "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/713deeaa-d3eb-4a73-b432-ed8185101ce7.jpg"
              },
              {
                icon: "Video",
                title: "Видео из фотографий",
                description: "Создание трогательных видео-воспоминаний из фотографий с музыкой и красивыми переходами. Идеально для поминальных мероприятий.",
                price: "от 5000 ₽",
                image: "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/315b0ce0-053f-46d4-ab34-86dbe259b372.jpg"
              },
              {
                icon: "Gem",
                title: "Ретушь для металлокерамики",
                description: "Специальная обработка для нанесения на металлокерамические таблички. Учитываем особенности печати и материала.",
                price: "от 2000 ₽",
                image: "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/016c71e6-eb27-4f0e-88f3-2dcace40b6bd.jpg"
              },
              {
                icon: "Boxes",
                title: "Ретушь для стекла",
                description: "Адаптация фото для печати на стеклянных табличках. Цветная обработка с учётом прозрачности материала.",
                price: "от 2500 ₽",
                image: "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/ffafbc56-1373-4e07-9a68-2355530cbbae.jpg"
              },
              {
                icon: "Palette",
                title: "Цветокоррекция портрета",
                description: "Профессиональная цветокоррекция и улучшение качества портретных фотографий для любых целей.",
                price: "от 1000 ₽",
                image: "https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/adfbf611-bcfb-4ec7-b9d0-9ffd373a96d3.jpg"
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                    <Button onClick={() => scrollToSection("контакты")} variant="ghost" size="sm">
                      Заказать
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">До и После</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Перемещайте ползунок, чтобы увидеть результат нашей работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <BeforeAfterSlider
                beforeImage="https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/022a5a2b-4f0c-4503-bb69-a92a066abadc.jpg"
                afterImage="https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/cabee109-1d7f-4b57-96eb-dfcc402547c2.jpg"
                beforeLabel="До реставрации"
                afterLabel="После обработки"
              />
              <div className="mt-4 text-center">
                <p className="font-heading font-semibold text-lg">Восстановление старого фото</p>
                <p className="text-sm text-muted-foreground">Устранение повреждений и улучшение качества</p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <BeforeAfterSlider
                beforeImage="https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/53bf807a-3ef4-4371-9353-a08cd50beb5e.jpg"
                afterImage="https://cdn.poehali.dev/projects/8184ca81-320c-4414-b383-65881bb46c35/files/61a61318-98f4-4f1d-8725-04ccf880ddf8.jpg"
                beforeLabel="Исходное фото"
                afterLabel="Готово для памятника"
              />
              <div className="mt-4 text-center">
                <p className="font-heading font-semibold text-lg">Ретушь для гравировки</p>
                <p className="text-sm text-muted-foreground">Профессиональная подготовка портрета</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">
              Никаких скрытых платежей. Оплата после согласования результата.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { service: "Ретушь для памятника (гранит)", price: "1500 ₽", time: "1 день" },
              { service: "Металлокерамика (овальная)", price: "2000 ₽", time: "1 день" },
              { service: "Ретушь для стекла (цветная)", price: "2500 ₽", time: "1-2 дня" },
              { service: "Восстановление фото (простое)", price: "3000 ₽", time: "2 дня" },
              { service: "Восстановление фото (сложное)", price: "от 5000 ₽", time: "3-5 дней" },
              { service: "Видео из 10-20 фото", price: "5000 ₽", time: "3 дня" },
              { service: "Видео из 20-50 фото", price: "8000 ₽", time: "5 дней" },
              { service: "Цветокоррекция портрета", price: "1000 ₽", time: "1 день" },
            ].map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading font-semibold text-lg flex-1">{item.service}</h3>
                    <Icon name="CheckCircle2" size={20} className="text-primary ml-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Icon name="Clock" size={16} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex gap-4 items-start">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold mb-2">Важная информация</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Срочное выполнение +50% к стоимости (за 1 день)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Бесплатная корректировка в течение 7 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Оплата по факту выполнения работы</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Благодарности от людей, которые доверили нам сохранение светлой памяти о близких
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Елена Михайловна",
                date: "15 октября 2024",
                rating: 5,
                text: "Огромное спасибо за проделанную работу! Восстановили очень старое фото моей бабушки для памятника. Результат превзошёл все ожидания. Очень бережно и профессионально.",
              },
              {
                name: "Андрей Васильев",
                date: "3 ноября 2024",
                rating: 5,
                text: "Заказывал ретушь фото для гранитного памятника. Сделали быстро, всего за день. Качество отличное, на граните получилось очень чётко. Рекомендую!",
              },
              {
                name: "Ольга Сергеевна",
                date: "28 октября 2024",
                rating: 5,
                text: "Делала видео из фотографий для поминок отца. Получилось очень трогательно и красиво. Все гости плакали. Спасибо вам за вашу работу и понимание.",
              },
              {
                name: "Дмитрий К.",
                date: "12 ноября 2024",
                rating: 5,
                text: "Профессиональный подход! Восстановили повреждённое фото деда 1950-х годов. Убрали все царапины и разрывы. Теперь снимок как новый. Очень доволен!",
              },
              {
                name: "Мария Ивановна",
                date: "20 октября 2024",
                rating: 5,
                text: "Заказывала обработку для металлокерамики. Мастер учёл все нюансы печати, цвета получились естественные. Работа выполнена в срок, цена адекватная.",
              },
              {
                name: "Виктор П.",
                date: "8 ноября 2024",
                rating: 5,
                text: "Отличная работа! У нас было только старое, размытое фото. Сделали его чётким для памятника. Корректировки внесли бесплатно. Большое спасибо за терпение!",
              },
            ].map((review, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Оставьте заявку</h2>
            <p className="text-xl text-muted-foreground">
              Ответим в течение 30 минут. Работаем ежедневно с 9:00 до 21:00.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание работы</label>
                    <Textarea
                      placeholder="Расскажите, что нужно сделать с фотографией..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Загрузите фотографии</label>
                    <div className="space-y-3">
                      <div className="relative">
                        <Input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileChange}
                          className="w-full cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                        />
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <div className="flex items-center gap-3">
                                <Icon name="Image" size={20} className="text-primary" />
                                <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                                <span className="text-xs text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} МБ)</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-destructive hover:text-destructive/80 transition-colors"
                              >
                                <Icon name="X" size={18} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Вы можете загрузить несколько фотографий в форматах JPG, PNG. Максимальный размер файла 10 МБ.
                      </p>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Телефон</h3>
                      <a href="tel:+79174224484" className="text-lg text-primary hover:underline">
                        +7 (917) 422-44-84
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Email</h3>
                      <a href="mailto:info@photomemory.ru" className="text-lg text-primary hover:underline">
                        info@photomemory.ru
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold mb-3">Мессенджеры</h3>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href="https://wa.me/79174224484" target="_blank" rel="noopener noreferrer">
                            <Icon name="MessageCircle" size={16} className="mr-2" />
                            WhatsApp
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href="https://t.me/+79174224484" target="_blank" rel="noopener noreferrer">
                            <Icon name="Send" size={16} className="mr-2" />
                            Telegram
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card/30 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gradient mb-4">PhotoMemory</h3>
              <p className="text-muted-foreground">
                Профессиональная ретушь и восстановление фотографий с 2018 года.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Ретушь для памятников</li>
                <li>Восстановление фото</li>
                <li>Создание видео</li>
                <li>Металлокерамика и стекло</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79174224484" className="hover:text-primary transition-colors">+7 (917) 422-44-84</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@photomemory.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <a href="https://wa.me/79174224484" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  <a href="https://t.me/+79174224484" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 PhotoMemory. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
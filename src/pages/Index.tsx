import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PriceCalculator from "@/components/PriceCalculator";

const Index = () => {
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
      description: "Мы свяжемся с вами в ближайшее время",
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
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Camera" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold">ФотоПамять</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {["Услуги", "Примеры", "Цены", "Контакты"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection("контакты")}>
            Заказать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
                <Icon name="Award" size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">Профессиональная ретушь с 2015 года</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Сохраним светлую память{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  на века
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Бережно восстанавливаем старые фотографии, готовим снимки для памятников и создаём видео-воспоминания. Каждая работа выполняется вручную с душой и вниманием к деталям.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Быстро</p>
                    <p className="text-sm text-muted-foreground">Готово за 1-3 дня</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Качественно</p>
                    <p className="text-sm text-muted-foreground">800+ работ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Надёжно</p>
                    <p className="text-sm text-muted-foreground">Гарантия результата</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Бережно</p>
                    <p className="text-sm text-muted-foreground">С уважением к памяти</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("контакты")} className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Заказать работу
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("примеры")} className="gap-2">
                  <Icon name="Image" size={20} />
                  Посмотреть примеры
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80"
                alt="Восстановление фотографий"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по обработке фотографий для увековечения памяти
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Headstone" fallback="Square" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Фото для памятников</h3>
                <p className="text-muted-foreground mb-4">
                  Профессиональная подготовка фотографий для гравировки на гранитных и мраморных памятниках. Чёрно-белая обработка высокого качества.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Удаление дефектов и улучшение чёткости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Правильный контраст для гравировки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Формат и размер под любой памятник</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">от 1500 ₽</span>
                  <Button onClick={() => scrollToSection("контакты")} variant="ghost">
                    Заказать
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Восстановление фото</h3>
                <p className="text-muted-foreground mb-4">
                  Реставрация старых, повреждённых и выцветших снимков. Возвращаем фотографиям первозданный вид с сохранением духа времени.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Устранение царапин, трещин, заломов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Восстановление утраченных фрагментов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Цветокоррекция выцветших снимков</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">от 2000 ₽</span>
                  <Button onClick={() => scrollToSection("контакты")} variant="ghost">
                    Заказать
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Video" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Видео из фотографий</h3>
                <p className="text-muted-foreground mb-4">
                  Создание трогательных видео-воспоминаний из фотографий с музыкальным сопровождением. Для поминальных мероприятий и семейных архивов.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Плавные переходы и эффекты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Подбор подходящей музыки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Любая длительность и формат</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">от 4000 ₽</span>
                  <Button onClick={() => scrollToSection("контакты")} variant="ghost">
                    Заказать
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="примеры" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Примеры наших работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, как мы бережно восстанавливаем фотографии
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">До реставрации</p>
                  <img
                    src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=400&q=80"
                    alt="До восстановления"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">После обработки</p>
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80"
                    alt="После восстановления"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Восстановление старого фото</h4>
                  <p className="text-sm text-muted-foreground">Устранены трещины, царапины и пятна. Восстановлена чёткость изображения.</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">Исходное фото</p>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
                    alt="До обработки для памятника"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">Для памятника</p>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="После обработки для памятника"
                    className="rounded-lg shadow-md w-full grayscale"
                  />
                </div>
              </div>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Подготовка для гравировки</h4>
                  <p className="text-sm text-muted-foreground">Чёрно-белая обработка, оптимальный контраст для гравировки на граните.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">
              Стоимость зависит от сложности и объёма работы
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-1">Ретушь для памятника (базовая)</h4>
                  <p className="text-sm text-muted-foreground">Чёрно-белая обработка, удаление мелких дефектов</p>
                </div>
                <span className="text-2xl font-bold text-primary">1500 ₽</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-1">Ретушь для металлокерамики</h4>
                  <p className="text-sm text-muted-foreground">Специальная обработка для керамических портретов</p>
                </div>
                <span className="text-2xl font-bold text-primary">2000 ₽</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-1">Восстановление фото (средняя сложность)</h4>
                  <p className="text-sm text-muted-foreground">Устранение царапин, заломов, цветокоррекция</p>
                </div>
                <span className="text-2xl font-bold text-primary">2000 ₽</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-1">Сложная реставрация</h4>
                  <p className="text-sm text-muted-foreground">Восстановление утраченных фрагментов, серьёзные повреждения</p>
                </div>
                <span className="text-2xl font-bold text-primary">от 4000 ₽</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-1">Видео из фотографий (5-10 фото)</h4>
                  <p className="text-sm text-muted-foreground">С музыкой и плавными переходами</p>
                </div>
                <span className="text-2xl font-bold text-primary">4000 ₽</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-1">Видео (более 10 фото)</h4>
                  <p className="text-sm text-muted-foreground">Расширенный формат с дополнительными эффектами</p>
                </div>
                <span className="text-2xl font-bold text-primary">от 6000 ₽</span>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-2">Точную стоимость определим после оценки</p>
                <p className="text-sm text-muted-foreground">
                  Отправьте фотографию для бесплатной оценки сложности работы. Мы свяжемся с вами и сообщим точную цену в течение часа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Заказать работу</h2>
            <p className="text-xl text-muted-foreground">
              Отправьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Calculator" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Калькулятор стоимости</h3>
                </div>
                <PriceCalculator />
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Онлайн-чат</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">Свяжитесь с нами прямо сейчас для быстрой консультации</p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/79991234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-colors"
                    >
                      <Icon name="MessageCircle" size={24} className="text-[#25D366]" />
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Ответим в течение 5 минут</p>
                      </div>
                    </a>
                    <a
                      href="https://t.me/username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 rounded-lg transition-colors"
                    >
                      <Icon name="Send" size={24} className="text-[#0088cc]" />
                      <div>
                        <p className="font-semibold">Telegram</p>
                        <p className="text-sm text-muted-foreground">Быстрая связь в любое время</p>
                      </div>
                    </a>
                    <a
                      href="tel:+79991234567"
                      className="flex items-center gap-3 p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    >
                      <Icon name="Phone" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">+7 (999) 123-45-67</p>
                        <p className="text-sm text-muted-foreground">Звоните с 9:00 до 21:00</p>
                      </div>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Или заполните форму заказа</h3>
                <p className="text-muted-foreground">Прикрепите фото для бесплатной оценки</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
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
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Описание работы</label>
                  <Textarea
                    placeholder="Расскажите, что нужно сделать. Какая услуга вас интересует?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Прикрепите фотографии (необязательно)</label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Нажмите или перетащите файлы</p>
                    </label>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-2">
                            <Icon name="FileImage" size={20} className="text-primary" />
                            <span className="text-sm">{file.name}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <Card>
              <CardContent className="p-6">
                <Icon name="Clock" size={32} className="mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Время работы</h4>
                <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">WhatsApp / Telegram</h4>
                <p className="text-sm text-muted-foreground">Быстрая связь в мессенджерах</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p className="mb-2">© 2024 ФотоПамять. Профессиональная ретушь фотографий</p>
          <p className="text-sm">Сохраняем память с уважением и заботой</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
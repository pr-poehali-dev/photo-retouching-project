import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const PriceCalculator = () => {
  const [service, setService] = useState("monument");
  const [complexity, setComplexity] = useState(1);
  const [photoCount, setPhotoCount] = useState(1);

  const calculatePrice = () => {
    let basePrice = 0;
    
    if (service === "monument") {
      basePrice = 1500;
      if (complexity === 2) basePrice = 2000;
      if (complexity === 3) basePrice = 3000;
    } else if (service === "restoration") {
      basePrice = 2000;
      if (complexity === 2) basePrice = 3000;
      if (complexity === 3) basePrice = 5000;
    } else if (service === "video") {
      if (photoCount <= 10) {
        basePrice = 4000;
      } else if (photoCount <= 20) {
        basePrice = 6000;
      } else {
        basePrice = 8000;
      }
    }
    
    return basePrice;
  };

  const price = calculatePrice();

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold mb-3 block">Выберите услугу</Label>
        <RadioGroup value={service} onValueChange={setService} className="space-y-3">
          <div className="flex items-center space-x-3 p-3 rounded-lg border-2 hover:border-primary transition-colors cursor-pointer">
            <RadioGroupItem value="monument" id="monument" />
            <Label htmlFor="monument" className="cursor-pointer flex-1 font-normal">
              Фото для памятника
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg border-2 hover:border-primary transition-colors cursor-pointer">
            <RadioGroupItem value="restoration" id="restoration" />
            <Label htmlFor="restoration" className="cursor-pointer flex-1 font-normal">
              Восстановление фото
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg border-2 hover:border-primary transition-colors cursor-pointer">
            <RadioGroupItem value="video" id="video" />
            <Label htmlFor="video" className="cursor-pointer flex-1 font-normal">
              Видео из фотографий
            </Label>
          </div>
        </RadioGroup>
      </div>

      {service !== "video" ? (
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Сложность работы: {complexity === 1 ? "Простая" : complexity === 2 ? "Средняя" : "Сложная"}
          </Label>
          <Slider
            value={[complexity]}
            onValueChange={(value) => setComplexity(value[0])}
            min={1}
            max={3}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Простая</span>
            <span>Средняя</span>
            <span>Сложная</span>
          </div>
        </div>
      ) : (
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Количество фотографий: {photoCount}
          </Label>
          <Slider
            value={[photoCount]}
            onValueChange={(value) => setPhotoCount(value[0])}
            min={1}
            max={30}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>15</span>
            <span>30</span>
          </div>
        </div>
      )}

      <div className="pt-6 border-t">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold">Примерная стоимость:</span>
          <span className="text-3xl font-bold text-primary">{price.toLocaleString()} ₽</span>
        </div>
        <div className="flex items-start gap-2 p-4 bg-primary/5 rounded-lg">
          <Icon name="Info" size={18} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Точная стоимость определяется после оценки фотографии. Расчёт является ориентировочным.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;

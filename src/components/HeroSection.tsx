import { Button } from "@/components/ui/button";
import { Rocket, Star, Plane } from "lucide-react";

// Hero section bileşeni - Ana sayfa başlık alanı
export const HeroSection = () => {
  
  // Etkinlik sayfasına yönlendirme işlevi
  const etkinliklereSakla = () => {
    const etkinliklerBolumu = document.querySelector("#etkinlikler");
    if (etkinliklerBolumu) {
      etkinliklerBolumu.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hakkımızda sayfasına yönlendirme işlevi
  const hakkimizdaGit = () => {
    const hakkimizdaBolumu = document.querySelector("#hakkimizda");
    if (hakkimizdaBolumu) {
      hakkimizdaBolumu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-primary/5 overflow-hidden">
      {/* Arka Plan Animasyonları */}
      <div className="absolute inset-0">
        {/* Yıldızlar */}
        <div className="absolute top-20 left-20">
          <Star className="text-primary/30 yıldız-parıltı" size={16} />
        </div>
        <div className="absolute top-40 right-32">
          <Star className="text-primary/40 yıldız-parıltı" size={12} />
        </div>
        <div className="absolute bottom-40 left-40">
          <Star className="text-primary/20 yıldız-parıltı" size={20} />
        </div>
        <div className="absolute top-60 right-20">
          <Star className="text-primary/35 yıldız-parıltı" size={14} />
        </div>

        {/* Uçak İkonları */}
        <div className="absolute top-32 right-1/4">
          <Plane className="text-primary/20 havacılık-uçuş" size={24} />
        </div>
        <div className="absolute bottom-60 left-1/3">
          <Plane className="text-primary/15 havacılık-uçuş" size={18} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Ana Logo */}
          <div className="mb-8 roket-fırlatma">
            <img 
              src="/src/assets/havacilik-uzay-logo.png" 
              alt="İSTÜN Havacılık ve Uzay Kulübü Logo" 
              className="h-32 w-auto mx-auto mb-6 hover-yüksel"
            />
          </div>

          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Geleceği Keşfet
            </span>
            <br />
            <span className="text-foreground">
              Gökyüzünde Uç
            </span>
          </h1>

          {/* Alt Başlık */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            İSTÜN Havacılık ve Uzay Kulübü ile havacılık ve uzay teknolojilerinin 
            büyülü dünyasına adım at. Projeler geliştir, etkinliklere katıl, 
            geleceğin mühendisi ol.
          </p>

          {/* Özellikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover-parlak animate-fade-in">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4 roket-fırlatma" />
              <h3 className="text-lg font-semibold mb-2">Uzay Projeleri</h3>
              <p className="text-muted-foreground text-sm">
                Uydu tasarımından roket mühendisliğine kadar uzay teknolojileri
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover-parlak animate-fade-in">
              <Plane className="h-12 w-12 text-primary mx-auto mb-4 havacılık-uçuş" />
              <h3 className="text-lg font-semibold mb-2">Havacılık Eğitimleri</h3>
              <p className="text-muted-foreground text-sm">
                Uçak tasarımı, aerodinamik ve pilot eğitimleri
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover-parlak animate-fade-in">
              <Star className="h-12 w-12 text-primary mx-auto mb-4 yıldız-parıltı" />
              <h3 className="text-lg font-semibold mb-2">Yarışmalar</h3>
              <p className="text-muted-foreground text-sm">
                Ulusal ve uluslararası havacılık yarışmaları
              </p>
            </div>
          </div>

          {/* Ana Butonlar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={etkinliklereSakla}
              className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary-glow hover-parlak shadow-2xl"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Etkinlikleri Keşfet
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={hakkimizdaGit}
              className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5 hover-yüksel"
            >
              <Star className="mr-2 h-5 w-5" />
              Hakkımızda
            </Button>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Aktif Üye</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Etkinlik</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Ödül</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
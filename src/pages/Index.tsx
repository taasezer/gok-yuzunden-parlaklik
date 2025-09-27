import { Navigasyon } from "@/components/Navigasyon";
import { HeroSection } from "@/components/HeroSection";
import { HakkimizdaBolumu } from "@/components/HakkimizdaBolumu";
import { EtkinlikTakvimi } from "@/components/EtkinlikTakvimi";
import { Footer } from "@/components/Footer";

// Ana sayfa bileşeni - Kulüp web sitesinin ana sayfası
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Üst Navigasyon Menüsü */}
      <Navigasyon className="fixed top-0 left-0 right-0 z-50" />
      
      {/* Ana İçerik Alanları */}
      <main className="pt-16">
        {/* Hero Bölümü - Ana Tanıtım */}
        <HeroSection />
        
        {/* Hakkımızda Bölümü */}
        <HakkimizdaBolumu />
        
        {/* Etkinlik Takvimi Bölümü */}
        <EtkinlikTakvimi />
      </main>
      
      {/* Alt Bilgi Alanı */}
      <Footer />
    </div>
  );
};

export default Index;

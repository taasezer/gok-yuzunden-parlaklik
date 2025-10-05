import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin,
  Youtube,
  ExternalLink
} from "lucide-react";

// Footer bileşeni - Site alt bilgi alanı
export const Footer = () => {

  // İletişim bilgileri
  const iletisimBilgileri = [
    {
      ikon: Mail,
      baslik: "E-posta",
      bilgi: "huk.klb@istun.edu.tr",
      link: "mailto:huk.klb@istun.edu.tr"
    },
    {
      ikon: MapPin,
      baslik: "Adres",
      bilgi: "İSTÜN Kampüsü, İstanbul",
      link: "https://www.google.com/maps/place/%C4%B0stanbul+Sa%C4%9Fl%C4%B1k+ve+Teknoloji+%C3%9Cniversitesi/@41.0562536,28.9484985,743m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cabba389541ebd:0x77aa0f2806492df6!8m2!3d41.0562536!4d28.9510734!16s%2Fg%2F11fvt362ms!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  // Sosyal medya linkleri
  const sosyalMedyaLinkleri = [
    { ikon: Instagram, ad: "Instagram", link: "https://www.instagram.com/istunhavacilikveuzaykulubu?igsh=MWJ2MWJoYzQzbm1yNw==" },
    { ikon: Twitter, ad: "Twitter", link: "#" },
    { ikon: Youtube, ad: "YouTube", link: "#" }
  ];

  // Hızlı linkler
  const hizliLinkler = [
    { ad: "Ana Sayfa", link: "#anasayfa" },
    { ad: "Hakkımızda", link: "#hakkimizda" },
    { ad: "Etkinlikler", link: "#etkinlikler" },
    { ad: "Projeler", link: "#projeler" },
    { ad: "İletişim", link: "#iletisim" }
  ];

  // Sayfaya git işlevi
  const sayfayaGit = (link: string) => {
    if (link.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        
        {/* Ana Footer İçeriği */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 bg-black/90 px-4 py-3 rounded-lg transition-all duration-500 hover:bg-black w-fit">
              <img 
                src="/src/assets/havacilik-uzay-logo.png" 
                alt="İSTÜN Havacılık ve Uzay Kulübü Logo" 
                className="h-12 w-auto hover-yüksel"
              />
              <div>
                <h3 className="text-lg font-bold text-white">
                  Havacılık & Uzay
                </h3>
                <p className="text-sm text-gray-300">
                  İSTÜN Kulübü
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Geleceğin havacılık ve uzay teknolojilerini bugünden 
              şekillendiriyoruz. Bilim, teknoloji ve tutku ile.
            </p>
            
            {/* Sosyal Medya Linkleri */}
            <div className="flex space-x-3">
              {sosyalMedyaLinkleri.map((sosyal, index) => {
                const IkonBileseni = sosyal.ikon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    onClick={() => sayfayaGit(sosyal.link)}
                    className="hover-yüksel hover:bg-primary/10 hover:border-primary/30"
                  >
                    <IkonBileseni size={18} />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-6">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {hizliLinkler.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => sayfayaGit(link.link)}
                    className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors duration-300 text-left justify-start"
                  >
                    {link.ad}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-6">
              İletişim
            </h4>
            <div className="space-y-4">
              {iletisimBilgileri.map((iletisim, index) => {
                const IkonBileseni = iletisim.ikon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IkonBileseni className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {iletisim.baslik}
                      </p>
                      <Button
                        variant="ghost"
                        onClick={() => sayfayaGit(iletisim.link)}
                        className="p-0 h-auto text-muted-foreground hover:text-primary text-left text-sm"
                      >
                        {iletisim.bilgi}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter veya Ek Bilgiler */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-6">
              Bize Katılın
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Havacılık ve uzay teknolojileri dünyasının heyecan verici 
              gelişmelerinden haberdar olmak için bize katılın.
            </p>
            <Button 
              className="w-full hover-parlak bg-gradient-to-r from-primary to-primary-glow"
              onClick={() => sayfayaGit("#iletisim")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              İletişim
            </Button>
            
            {/* Kulüp İstatistikleri */}
            <Card className="mt-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-xs text-muted-foreground">Üye</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-xs text-muted-foreground">Proje</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Üniversite Logosu ve Alt Bilgiler */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Üniversite Logosu */}
            <div className="flex items-center space-x-4 bg-black/90 px-4 py-3 rounded-lg transition-all duration-500 hover:bg-black">
              <img 
                src="/src/assets/istun-logo.png" 
                alt="İSTÜN - İstanbul Sağlık ve Teknoloji Üniversitesi Logo" 
                className="h-16 w-auto hover-yüksel"
              />
              <div className="text-sm text-gray-300">
                <p className="font-medium text-white">İstanbul Sağlık ve Teknoloji Üniversitesi</p>
                <p>Havacılık ve Uzay Kulübü</p>
              </div>
            </div>

            {/* Telif Hakkı */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 İSTÜN Havacılık ve Uzay Kulübü
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Tüm hakları saklıdır. Geleceği birlikte inşa ediyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Ek Bilgi Bandı */}
        <div className="mt-8 text-center">
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20">
            <CardContent className="py-4 px-6">
              <p className="text-sm text-muted-foreground">
                🚀 <strong>Hayallerinizi gerçeğe dönüştürün!</strong> 
                Havacılık ve uzay teknolojilerinde kariyer yapmak istiyorsanız doğru yerdesiniz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  );
};

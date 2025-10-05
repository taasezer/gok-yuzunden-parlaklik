import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Navigasyon bileşeni - Site genelinde gezinme menüsü
interface NavigasyonProps {
  className?: string;
}

export const Navigasyon = ({ className }: NavigasyonProps) => {
  const [menuAcik, setMenuAcik] = useState(false); // Mobil menü durumu

  // Ana menü öğeleri
  const menuOgeleri = [
    { ad: "Ana Sayfa", href: "#anasayfa" },
    { ad: "Hakkımızda", href: "#hakkimizda" },
    { ad: "Etkinlikler", href: "#etkinlikler" },
    { ad: "Projeler", href: "#projeler" },
    { ad: "İletişim", href: "#iletisim" },
  ];

  // Menü açma/kapama işlevi
  const menuToggle = () => {
    setMenuAcik(!menuAcik);
  };

  // Menü öğesine tıklama işlevi
  const menuOgesineGit = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuAcik(false); // Mobilde menüyü kapat
  };

  return (
    <nav className={cn("w-full bg-background/95 backdrop-blur-sm border-b border-border", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Alanı */}
          <div className="flex items-center space-x-4 bg-black/90 px-4 py-2 rounded-lg transition-all duration-500 hover:bg-black">
            <img 
              src="/src/assets/havacilik-uzay-logo.png" 
              alt="İSTÜN Havacılık ve Uzay Kulübü Logo" 
              className="h-10 w-auto havacılık-uçuş"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-white">
                Havacılık & Uzay Kulübü
              </h1>
              <p className="text-xs text-gray-300">İSTÜN</p>
            </div>
          </div>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-1">
            {menuOgeleri.map((oge) => (
              <Button
                key={oge.ad}
                variant="ghost"
                onClick={() => menuOgesineGit(oge.href)}
                className="hover-yüksel text-foreground hover:text-primary transition-all duration-300"
              >
                {oge.ad}
              </Button>
            ))}
          </div>

          {/* Mobil Menü Butonu */}
          <Button
            variant="ghost"
            size="icon"
            onClick={menuToggle}
            className="md:hidden"
          >
            {menuAcik ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobil Menü */}
        {menuAcik && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/98 backdrop-blur-md border-b border-border shadow-lg animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {menuOgeleri.map((oge) => (
                <Button
                  key={oge.ad}
                  variant="ghost"
                  onClick={() => menuOgesineGit(oge.href)}
                  className="w-full justify-start hover:bg-accent hover:text-primary"
                >
                  {oge.ad}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
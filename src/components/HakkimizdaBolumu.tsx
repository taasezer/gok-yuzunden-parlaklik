import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Target, Award, BookOpen, Globe } from "lucide-react";

// Hakkımızda bölümü - Kulüp hakkında bilgiler
export const HakkimizdaBolumu = () => {

  // Kulüp değerleri
  const kulupDegerleri = [
    {
      ikon: Target,
      baslik: "Misyonumuz",
      aciklama: "Havacılık ve uzay teknolojileri alanında öncü projeler geliştirmek ve geleceğin mühendislerini yetiştirmek."
    },
    {
      ikon: Globe,
      baslik: "Vizyonumuz", 
      aciklama: "Türkiye'nin uzay ve havacılık sektöründe lider üniversite kulübü olmak ve uluslararası projeler geliştirmek."
    },
    {
      ikon: BookOpen,
      baslik: "Eğitimimiz",
      aciklama: "Teorik bilgiyi pratiğe dönüştüren workshop'lar, seminerler ve uygulamalı projeler sunuyoruz."
    },
    {
      ikon: Award,
      baslik: "Başarılarımız", 
      aciklama: "Ulusal ve uluslararası yarışmalarda elde ettiğimiz ödüllerle ismimizi duyuruyoruz."
    }
  ];

  // Çalışma alanları
  const calısmaAlanlari = [
    "Model Roket Tasarımı",
    "Drone Teknolojileri",
    "Uydu Sistemleri",
    "Aerodinamik Analizi",
    "Havacılık Yazılımları",
    "Uzay Mühendisliği",
    "Pilot Eğitimi",
    "3D Tasarım ve Üretim"
  ];


  return (
    <section id="hakkimizda" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        
        {/* Ana Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Hakkımızda
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            İSTÜN Havacılık ve Uzay Kulübü olarak, 2019 yılından beri havacılık ve uzay 
            teknolojileri alanında öğrencilerimizin gelişimine katkıda bulunuyoruz. 
            Bilimsel çalışmalar, projeler ve etkinlikler ile geleceğin havacılık uzmanlarını yetiştiriyoruz.
          </p>
        </div>

        {/* Ana Tanıtım Kartı */}
        <Card className="mb-16 hover-yüksel bg-gradient-to-br from-card to-card/80 border-2 border-primary/10">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
                  <Rocket className="mr-3 h-8 w-8" />
                  Kim Biz?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  İstanbul Sağlık ve Teknoloji Üniversitesi bünyesinde faaliyet gösteren 
                  Havacılık ve Uzay Kulübü, farklı bölümlerden öğrencileri bir araya getirerek 
                  disiplinler arası projeler geliştiren dinamik bir topluluktır.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Kulübümüz, teorik bilgiyi pratiğe dönüştüren projeler, sektör profesyonelleri 
                  ile etkileşim fırsatları ve yarışmalarla öğrencilerimizin hem akademik hem de 
                  kişisel gelişimlerine katkıda bulunmaktadır.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Users className="h-48 w-48 text-primary/20 havacılık-uçuş" />
                  <Rocket className="absolute top-4 right-4 h-12 w-12 text-primary roket-fırlatma" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Kulüp Değerleri */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Değerlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kulupDegerleri.map((deger, index) => {
              const IkonBileseni = deger.ikon;
              return (
                <Card 
                  key={index} 
                  className="hover-yüksel hover-parlak text-center border-2 border-primary/10 bg-gradient-to-br from-card to-accent/5 animate-fade-in"
                >
                  <CardContent className="p-6">
                    <IkonBileseni className="h-12 w-12 text-primary mx-auto mb-4 roket-fırlatma" />
                    <h4 className="text-lg font-semibold mb-3 text-primary">{deger.baslik}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {deger.aciklama}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Çalışma Alanları */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Çalışma Alanlarımız</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {calısmaAlanlari.map((alan, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="text-sm py-2 px-4 border-primary/30 hover:bg-primary/5 hover-yüksel transition-all duration-300"
              >
                {alan}
              </Badge>
            ))}
          </div>
        </div>


        {/* Başarı Hikayeleri */}
        <Card className="hover-yüksel bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-6 text-primary flex items-center justify-center">
              <Award className="mr-3 h-8 w-8" />
              Başarı Hikayelerimiz
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              2019'dan bu yana düzenlediğimiz onlarca etkinlik, geliştirdiğimiz projeler ve 
              kazandığımız ödüllerle havacılık alanında kendimizi kanıtladık. Üyelerimiz sektörün 
              önde gelen şirketlerinde çalışmaya başladı ve bazıları kendi start-up'larını kurdu. 
              TÜBİTAK, TEKNOFEST ve uluslararası yarışmalarda elde ettiğimiz başarılarla 
              üniversitemizin ve ülkemizin adını gururla duyuruyoruz.
            </p>
            <div className="mt-8 flex justify-center">
              <Badge className="bg-gradient-to-r from-primary to-primary-glow text-white px-6 py-2">
                Türkiye'nin En Başarılı Havacılık Kulüplerinden
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { etkinlikListesi } from "@/data/etkinlikler";


// Etkinlik takvimi bileşeni - Kulüp etkinliklerini yönetme
export const EtkinlikTakvimi = () => {
  const [seciliKategori, setSeciliKategori] = useState<string>("tümü");

  // Kategori renk eşleştirmesi
  const kategoriRenkleri = {
    workshop: "bg-blue-100 text-blue-800 border-blue-200",
    yarışma: "bg-red-100 text-red-800 border-red-200",
    seminer: "bg-green-100 text-green-800 border-green-200",
    gezi: "bg-purple-100 text-purple-800 border-purple-200",
    toplanti: "bg-orange-100 text-orange-800 border-orange-200"
  };

  // Kategori türkçe isimleri
  const kategoriIsimleri = {
    workshop: "Workshop",
    yarışma: "Yarışma",
    seminer: "Seminer",
    gezi: "Gezi",
    toplanti: "Toplantı"
  };

  // Etkinlik filtreleme işlevi
  const filtrelenmisEtkinlikler = seciliKategori === "tümü" 
    ? etkinlikListesi 
    : etkinlikListesi.filter(etkinlik => etkinlik.kategori === seciliKategori);


  // Tarih formatı düzenleme
  const tarihFormatlı = (tarih: string) => {
    const tarihObj = new Date(tarih);
    return tarihObj.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="etkinlikler" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Başlık Alanı */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Etkinlik Takvimi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Heyecan verici havacılık ve uzay etkinliklerimize katılın. 
            Öğrenin, deneyimleyin ve geleceği şekillendirin.
          </p>
          
        </div>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={seciliKategori === "tümü" ? "default" : "outline"}
            onClick={() => setSeciliKategori("tümü")}
            className="hover-yüksel"
          >
            Tümü
          </Button>
          {Object.entries(kategoriIsimleri).map(([key, value]) => (
            <Button
              key={key}
              variant={seciliKategori === key ? "default" : "outline"}
              onClick={() => setSeciliKategori(key)}
              className="hover-yüksel"
            >
              {value}
            </Button>
          ))}
        </div>

        {/* Etkinlik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrelenmisEtkinlikler.map((etkinlik) => (
            <Card 
              key={etkinlik.id} 
              className={cn(
                "hover-yüksel border-2 transition-all duration-300 hover:border-primary/30 hover:shadow-lg animate-fade-in",
                "bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
              )}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={kategoriRenkleri[etkinlik.kategori]}>
                    {kategoriIsimleri[etkinlik.kategori]}
                  </Badge>
                  <Badge variant={etkinlik.durum === "yaklaşan" ? "default" : "secondary"}>
                    {etkinlik.durum === "yaklaşan" ? "Yaklaşan" : "Tamamlandı"}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 text-primary">
                  {etkinlik.baslik}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {etkinlik.aciklama}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    {tarihFormatlı(etkinlik.tarih)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    {etkinlik.saat}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    {etkinlik.konum}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4 text-primary" />
                    {etkinlik.katilimciSayisi} / {etkinlik.maxKatilimci} kişi
                  </div>
                </div>

                {/* Katılımci Doluluk Çubuğu */}
                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${(etkinlik.katilimciSayisi / etkinlik.maxKatilimci) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eğer hiç etkinlik yoksa */}
        {filtrelenmisEtkinlikler.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Bu kategoride henüz etkinlik bulunmuyor
            </h3>
            <p className="text-muted-foreground">
              Farklı bir kategori seçerek diğer etkinlikleri görebilirsiniz.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
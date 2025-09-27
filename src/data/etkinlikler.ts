// Etkinlik veri dosyası - Buraya etkinlik verilerinizi ekleyebilirsiniz
// Bu dosyayı düzenleyerek yeni etkinlikler ekleyebilir, mevcut etkinlikleri güncelleyebilirsiniz

// Etkinlik veri tipi
export interface Etkinlik {
  id: number;
  baslik: string;
  aciklama: string;
  tarih: string;
  saat: string;
  konum: string;
  kategori: "workshop" | "yarışma" | "seminer" | "gezi" | "toplanti";
  katilimciSayisi: number;
  maxKatilimci: number;
  durum: "yaklaşan" | "devam-ediyor" | "tamamlandi";
}

// Etkinlik listesi - Bu array'i düzenleyerek etkinlik ekleyip çıkarabilirsiniz
export const etkinlikListesi: Etkinlik[] = [
  // Örnek etkinlik formatı:
  // {
  //   id: 1,
  //   baslik: "Etkinlik Adı",
  //   aciklama: "Etkinlik açıklaması...",
  //   tarih: "2024-03-15", // YYYY-MM-DD formatında
  //   saat: "14:00",
  //   konum: "Etkinlik yeri",
  //   kategori: "workshop", // workshop, yarışma, seminer, gezi, toplanti
  //   katilimciSayisi: 0,
  //   maxKatilimci: 30,
  //   durum: "yaklaşan" // yaklaşan, devam-ediyor, tamamlandi
  // },
  
  // BURAYA YENİ ETKİNLİKLERİNİZİ EKLEYİN
  // Her etkinlik için yukarıdaki formatı kullanın
  // id: benzersiz numara
  // tarih: YYYY-MM-DD formatında
  // kategori: sadece belirtilen değerlerden birini kullanın
  // durum: sadece belirtilen değerlerden birini kullanın
];



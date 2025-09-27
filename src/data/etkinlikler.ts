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
  // ÇALIŞAN ÖRNEK ETKİNLİKLER - Bu örnekleri düzenleyerek kendi etkinliklerinizi oluşturun
  {
    id: 1,
    baslik: "Drone Yapım Workshop'u",
    aciklama: "Kendi drone'unuzu sıfırdan tasarlayın ve yapın. Havacılık mühendisliği prensiplerini öğrenin.",
    tarih: "2024-12-15", 
    saat: "14:00",
    konum: "Teknoloji Laboratuvarı",
    kategori: "workshop",
    katilimciSayisi: 8,
    maxKatilimci: 20,
    durum: "yaklaşan"
  },
  {
    id: 2,
    baslik: "Model Roket Yarışması",
    aciklama: "Kendi tasarladığınız model roketlerle yükseklik yarışması. Ödüller kazanın!",
    tarih: "2024-12-22",
    saat: "10:00", 
    konum: "Okul Bahçesi",
    kategori: "yarışma",
    katilimciSayisi: 15,
    maxKatilimci: 30,
    durum: "yaklaşan"
  },
  {
    id: 3,
    baslik: "Uzay Teknolojileri Semineri",
    aciklama: "NASA mühendisi ile uzay teknolojilerinin geleceği hakkında özel seminer.",
    tarih: "2025-01-10",
    saat: "13:30",
    konum: "Konferans Salonu",
    kategori: "seminer", 
    katilimciSayisi: 25,
    maxKatilimci: 50,
    durum: "yaklaşan"
  }

  // YENİ ETKİNLİK EKLEMEK İÇİN:
  // 1. Yukarıdaki örneklerden birini kopyalayın
  // 2. id numarasını benzersiz yapın (4, 5, 6...)
  // 3. Bilgileri kendi etkinliğinize göre değiştirin
  // 4. tarih formatı: "YYYY-MM-DD" (örn: "2024-12-25")
  // 5. kategori seçenekleri: "workshop", "yarışma", "seminer", "gezi", "toplanti"
  // 6. durum seçenekleri: "yaklaşan", "devam-ediyor", "tamamlandi"
  // 7. Son etkinlikten sonra virgül koymayı unutmayın (son etkinlik hariç)
  
  // ÖRNEK YENİ ETKİNLİK:
  // {
  //   id: 4,
  //   baslik: "Yeni Etkinlik Adı",
  //   aciklama: "Etkinlik açıklaması...",
  //   tarih: "2024-12-30",
  //   saat: "15:00",
  //   konum: "Etkinlik Yeri",
  //   kategori: "workshop",
  //   katilimciSayisi: 0,
  //   maxKatilimci: 25,
  //   durum: "yaklaşan"
  // }
];



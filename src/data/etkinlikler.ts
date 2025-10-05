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
  // ============================================
  // ETKİNLİK EKLEME ŞABLONU
  // ============================================
  // Aşağıdaki şablonu kopyalayıp düzenleyerek yeni etkinlik ekleyin
  //
  // {
  //   id: 1,                                    // Benzersiz numara (1, 2, 3...)
  //   baslik: "Etkinlik Başlığı",              // Etkinlik adı
  //   aciklama: "Etkinlik açıklaması...",      // Kısa açıklama
  //   tarih: "2025-01-15",                     // Tarih formatı: YYYY-MM-DD
  //   saat: "14:00",                           // Saat formatı: SS:DD
  //   konum: "Etkinlik Yeri",                  // Konum bilgisi
  //   kategori: "workshop",                    // workshop | yarışma | seminer | gezi | toplanti
  //   katilimciSayisi: 0,                      // Şu anki katılımcı sayısı
  //   maxKatilimci: 30,                        // Maksimum katılımcı sayısı
  //   durum: "yaklaşan"                        // yaklaşan | devam-ediyor | tamamlandi
  // },
  //
  // DİKKAT: 
  // - Her etkinlikten sonra virgül (,) koymayı unutmayın (son etkinlik hariç)
  // - id numaralarını benzersiz yapın
  // - kategori ve durum değerlerini yukarıda belirtilen seçeneklerden seçin
  //
  // ============================================
  // ETKİNLİKLERİNİZİ AŞAĞIYA EKLEYİN:
  // ============================================


];



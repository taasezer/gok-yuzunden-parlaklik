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

  {
    id: 1,                                    // Benzersiz numara (1, 2, 3...)
    baslik: "Rasathane Gezisi",              // Etkinlik adı
    aciklama: "İstanbul Üniversitesi Gözlem Evi",      // Kısa açıklama
    tarih: "2025-12-05",                     // Tarih formatı: YYYY-MM-DD
    saat: "11:00",                           // Saat formatı: SS:DD
    konum: "İstanbul Üniversitesi",                  // Konum bilgisi
    kategori: "gezi",                    // workshop | yarışma | seminer | gezi | toplanti
    katilimciSayisi: 27,                      // Şu anki katılımcı sayısı
    maxKatilimci: 30,                        // Maksimum katılımcı sayısı
    durum: "devam-ediyor"                        // yaklaşan | devam-ediyor | tamamlandi
  },

  {
    id: 1,                                    // Benzersiz numara (1, 2, 3...)
    baslik: "Uludağ Gezisi",              // Etkinlik adı
    aciklama: "Program 1. Gün belirlenen lokasyonlarda misafirler alındıktan sonra Uludağ hareket ediyoruz tahmini varış saati 08.30-09.00 16.00 kadar Uludağ da serbest zaman geçirdikten sonra otele doğru hareket ediyoruz. Otelde alınan akşam yemeğinden sonra özel servis araçlarıyla gece clup etkinliğine çıkıyoruz.2. Gün otelde alınan kahvaltının artından, Bursa kültürel şehir turu yapıyoruz akabin de macera parkına gidiyoruz orada atv zipline dev salıncak vb etkinlikler yapılabilir. Dönüş yolunda iskender molası ve hediyelik eşya kestane molası verip İstanbul’a hareket ediyoruz tahmini varış saati 22.000",
    tarih: "2026-01-24",                     // Tarih formatı: YYYY-MM-DD
    saat: "07:00",                           // Saat formatı: SS:DD
    konum: "Bursa Uludağ",                  // Konum bilgisi
    kategori: "gezi",                    // workshop | yarışma | seminer | gezi | toplanti
    katilimciSayisi: 35,                      // Şu anki katılımcı sayısı
    maxKatilimci: 45,                        // Maksimum katılımcı sayısı
    durum: "devam-ediyor"                        // yaklaşan | devam-ediyor | tamamlandi
  },
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



// Türkçe ay ve gün dizileri
const AY = [
  "Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
  "Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"
];
const GUN = [
  "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"
];

// Sayıyı iki haneli string yap (05, 09, 12...)
function ikiHane(n) {
  return ("0" + n).slice(-2);
}

// Metni üret: 18 Ağustos 2025, Pazartesi, 19:40:07
function formatTR(d) {
  const gun   = d.getDate();           // 1–31 (başına 0 istemiyoruz)
  const ayAd  = AY[d.getMonth()];      // Ay adı
  const yil   = d.getFullYear();
  const hafta = GUN[d.getDay()];       // Gün adı
  const saat  = ikiHane(d.getHours());
  const dk    = ikiHane(d.getMinutes());
  const sn    = ikiHane(d.getSeconds());

  return `${gun} ${ayAd} ${yil}, ${hafta}, ${saat}:${dk}:${sn}`;
}

function saatGuncelle() {
  const el = document.getElementById("saat");
  if (!el) return;
  el.textContent = formatTR(new Date());
}

// İlk yüklemede çalıştır ve her saniye güncelle
document.addEventListener("DOMContentLoaded", () => {
  saatGuncelle();
  setInterval(saatGuncelle, 1000);
});



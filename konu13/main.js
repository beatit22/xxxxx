/* 
Date Method

.getFullYear(): yıl bilgisini verir. 
.getMonth(): Ayı verir (0=Ocak, 11=Aralık) integer olarak verir.
.getDate(): Gün (1-31) bugün ayın kaçı bilgisini verir.

.getHours: sadece saat bilgisini verir. saat (0-23)
.getMinutes(): dakika 0-59
.getSeconds(): saniye bilgisini verir. 
.getDay(): bugün günlerden değer nedir, 0-6 arası değer üretir. Pazar=0 dır.
o bilgisyarın zaman dilimine göre çalışır.

getTime

Date() → tarih/saat objesi oluşturur.
get...() → tarih/saat bilgilerini alır.
set...() → tarih/saat değerlerini değiştirir.
to...String() → farklı formatlarda çıktı verir.

*/

let d=new Date()
console.log(d.getFullYear()) //2025
console.log(d.getMonth()) // Ağustos 7 yazar
console.log(d.getDay())    // Pazartesi 1 yazar. 
console.log(d.getDate()) // 18 yazar
console.log(d.getHours()) // sadece saating tam kısmı. 19 bilgisi geldi. 

console.log(new Date(d.getTime())); // 1 Ocak 1970 den bu yana ne kadar milisaniye geçti. Mon Aug 18 2025 19:32:42 GMT+0300 (GMT+03:00) 
console.log(d.getDay()) // 1 inci gün.


// 18 Ağustos 2025, Pazartesi, 19:40


let a = new Date();

// Türkçe aylar dizisi
let aylar = [
  "Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
  "Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"
];

// Türkçe günler dizisi
let gunler = [
  "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"
];

let gun =a.getDate(); // ayın günü 
let ay=aylar[a.getMonth()]; // ay ismi
let yil=a.getFullYear();
let hafta=gunler[a.getDay()];
let saat=String(a.getHours())
let dk=String(a.getMinutes())

let topBar=document.querySelector('#topBar')


let format=`${gun}${ay} ${yil}, ${hafta}, ${saat} ${dk}`;
console.log(format)

topBar.innerText= format 


// 👉 "18 Ağustos 2025, Pazartesi, 19:40"




let yil2=document.querySelector('#yil2')
yil2.innerText=a.getFullYear()

let dogum=new Date('1983-01-26')
console.log(gunler[dogum.getDay()])

let dogumgunu=new Date('2026-01-26')
console.log(gunler[dogumgunu.getDay()])


let buton = document.querySelector('#ode');
buton.addEventListener('click', function(){
  let now = new Date();
  let dk = String(now.getMinutes()).padStart(2,"0");
  alert(`Siparişiniz ${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} ${now.getHours()}:${dk} tarihinde alınmıştır.`);
});

function guncelle() {
  const simdi = new Date();
  
  // Hedef: yarının 00:00 saati
  const hedef = new Date();
  hedef.setHours(24,0,0,0);

  // Kalan ms
  const kalan = hedef - simdi;

  if (kalan <= 0) {
    document.getElementById("geriSayim").innerText = "Kampanya bitti!";
    return;
  }

  const saat  = Math.floor((kalan / (1000*60*60)) % 24);
  const dakika= Math.floor((kalan / (1000*60)) % 60);
  const saniye= Math.floor((kalan / 1000) % 60);

  document.getElementById("geriSayim").innerText =
    `Kampanya bitimine: ${saat}:${String(dakika).padStart(2,"0")}:${String(saniye).padStart(2,"0")}`;
}

// ilk çalıştır
guncelle();
// her saniye güncelle
setInterval(guncelle, 1000);

/* 
Değişkenler
Değeri değişebilir javascript nesneleridir.

1-Değişken isimleri istenilen isim belirlenebilir fakat 
genellikle içinde bulunana veriye göre belirlenir.
2-Değişken isimlerinde türkçe karakter kullanılabilir
fakat tercih edilmemelidir.
3-Değişken isimleri sayı ile başlayamaz fakat sayı ile
 bitebilir
4-Değişken isimlerine $ ve _ işareti harisinde diğer 
özel karakterler eklenemez
5-değiken tanımlanırken anahter kelimeler kullanılır
var ->artık kullanılmaz, ama yazarsanız çalışır.
      oluşturulan değişken başka bir yerde tekara 
      oluşturabilir,değişkenin değeri güncellenebilir
let -> oluşturulan değişken başka bir yerde tekara 
       oluşturalamaz ve değişkenin değeri her zaman
       güncellenebilir

*/
var yas = 18
var yas = 25
var isim = 'Gizem'
document.write(isim) // Ekranda gizem yazar
var isim = 'Merve'
document.writeln(isim) //ekranda merve yazar

let ad = 'Fatma' //Değişken oluşturuldu ve değeri atandı
ad = 'Ayşe' //Değişken değeri güncellendi

document.writeln(ad)


//let isim = 'Gizem'
//let isim = 'Gamze' //hatalı satır
//isim ='Ali' //Değişkenin değeri güncellenilir

const sayi = 3 //Sabit değişken oluşturduk
//const sayi = 25 //Sabit değişken yeniden aaynı isimde oluşturulamaz
//sayi = 45 //Sabit değişkenin değeri güncellenemez, typeerror hatası oluşturur


let isim1 = 'Ahmet' //String
let sayi1 =20 //number
let aktif = true
let notlar = [90,80,100,75] //array
let kisi = {ad:'Ali',soyad:'Yılmaz'} // object

console.log(typeof(isim1))//isim1 adındaki değişkenin veri türünü consolda gösterir
console.log(typeof sayi1) //number
console.log(typeof aktif)
console.log(typeof notlar) //array'ler de abject'tir.

//Birleştirme Operatörleri
//1.Yöntem + ile birleştirme

let isim2 = "Mustafa"
const yas2 = 30
console.log('İsminiz: '+isim2+', Yaşınız:'+yas2)

let ders ='Javascript'
let gun ='pazartesi'
console.log(ders+' dersleri '+gun+' günü başladı')

//2.yöntem backtik ile birleştirme(altgr+,, basılır)
console.log(`${ders} dersleri ${gun} günü başladı`)

let fn = prompt('Adınızı giriniz:')
let ln = prompt('Syadınızı giriniz:')
let ms = prompt('Mesleğinizi giriniz:')
let ys = prompt('Yaşınız:')

console.log(`${ys} yaşındaki ${fn} ${ln}'nın mesleği ${ms}'dir.`)

alert(`${ys} yaşındaki ${fn} ${ln}'nın mesleği ${ms}'dir.`)

let sayi2 = '10'
let toplam= Number(sayi2) +5

console.log(toplam)

let eleman_sayisi = 30
let yazi = String(eleman_sayisi)

console.log(typeof(yazi)) //String yazar

//undefined ve null kavramları
let x //tamanımlandı ana değer verilmedi
let y = null //bilinçli olarak boş bırakıldı

console.log(x) //undefined
console.log(y) // null

//Temel aritmetik operatörler
let a = 10
let b = 3

console.log(a+b) //13
console.log(a-b) //7
console.log(a*b) //30
console.log(a/b) //3.33
console.log(a%b)//1 (mod-kalan)

//eşitlik ve atama operatörleri

let c =10
let d ='10'

console.log(c==d)//true(tür kontrolü yapılmaz)
console.log(c===d) //false(hem değer hem tür kontrolü yapılır)

c +=5 //c = c+5 aynı şeyi ifade eder




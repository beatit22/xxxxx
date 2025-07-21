/*
Koşullu ifadeler
Birden fazla değerin birbirine göre durumunu kontrol etmek için kullanılır
syntax

if(koşul){
    koşul gerçekleştiyse çalışacak olan kodlar yazımalı
}else{
    koşul gerçekleşmediyse çalışacak olan kodlar yazılmalı
}
    not:Eğer birden fazla koşul varsa
    && -> ve anlamına gelir
    || -> veya anlamına gelir.



let sayi = prompt('Yaşınızı giriniz:')

if(sayi>=18){
    alert(`${sayi}yaşındasınız. Ehliyet alabilirsiniz.`)   
}else{
    alert(`${sayi} yaşındasınız. Ehliyet alamazsınız.`)
}

if(sayi>=18 && sayi<=65){
    alert(`${sayi}yaşındasınız. Ehliyet alabilirsiniz.`)   
}else{
    alert(`${sayi} yaşındasınız. Ehliyet alamazsınız.`)
}

let hd= prompt('hava durumunu giriniz:')

if(hd=='Güneşli'){
    alert('Bu gün hava sıcak olacak')
}else if(hd=='Bulutlu'){
    alert('Bu gün hava soğuk olacak')
}else if(hd=='Yağmurlu'){
    alert('Bu gün semsiyeni almalısın')
}else{
    alert('hava durumu bilgisi alınamadı')
}

let kadi = prompt('Kullanıcı adınızı giriniz:')
let sifre = prompt('Parolanızı giriniz')

if (kadi =='gizem' && sifre===123){
    console.log('Sevgili Gizem admin paneline hoşgeldiniz')
}else if(kadi=='gamze'&& sifre===456){
    console.log('Sevgili gamze admin paneline hoşgeldiniz')
}else{
    console.log('Kullanıcı adınız veya şifreniz hatalı')
}

yukarıdaki if bloğu çalıştrıldığında kadi ve sifre
 doğru girilse dahi hatalı şeklinde mesaj gösterir.
ister prompt olsun ister input olsun farketmez 
kullanıcıdan veri aldığınızda string olarak tanımlanır

let kadi1 = prompt('Kullanıcı adınızı giriniz:')
let sifre1 = Number(prompt('Parolanızı giriniz'))

if (kadi1 =='gizem' && sifre1===123){
    console.log('Sevgili Gizem admin paneline hoşgeldiniz')
}else if(kadi1=='gamze'&& sifre1===456){
    console.log('Sevgili gamze admin paneline hoşgeldiniz')
}else{
    console.log('Kullanıcı adınız veya şifreniz hatalı')
}
*/

/*
Döngüler
Belirli bir işlemin tekrarlama durumu varsa kullanılan
yapılardır.
Klasik kullanımda işlemin kaç kez tekaralanacağı bizim 
tarafımızdan belirlenmelidir.
syntax
for(başlangıç değeri;bitiş değeri;işlem yönü){
    tekaralanması istene işlemler yazılır
}

i++ -> i değişkenin değerini sonradan 1 artıtır. 
Değişkenin ilk değerini ekrana yazar ve işlem devam eder
++i ->i değişkeninin değeri önceden 1 arttırılır.
Değişkenin ilk değerini ekranda yazmadan yeni değeri ile işlem devam eder
i-- ->i değişkenin değerini sonradan 1 azaltır. 
Değişkenin ilk değeri ekrana yazılır ve işlem devam eder
--i ->değişkenin değeri önceden 1 azaltılır. 
dEĞİŞKENİN İLK DEĞERİNİ YAZMADAN yeni değeri ile işleme devam edilir.

*/
for(let i=0;i<=10;i++){
    document.writeln(i)
}
for(let i=0;i<=4;i++){
    document.writeln('Gizem')
}
//1-Gizem 2-Gizem...

//1.yol
for(let i=1;i<=5;i++){
    document.writeln(`${i}-Gizem<br>`)
}
//2.yol
for(let i=0;i<=4;i++){
    document.writeln(`${i+1}-Gizem<br>`)
}
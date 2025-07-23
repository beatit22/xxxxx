/* Array: bir değişkene birden fazla değer ataması yapabilmek için kullanılan gelişmiş veri/data türüdür.
**Her elemanın bir sırası (index) vardır.
**Javascriptte 0 dan başlar.
**Veriler üzerinde döngülerle işlem yapmak.

a) let degiskenAdi= Array('parametre1', 'parametre2', 'parametre3')

b) let degiskenAdi = ['parametre1', 'parametre2', 'parametre3']
Fonksiyonlar hariç tüm data türlerini parametre olarak alabilirler.

**birbirinden farklı veri türlerini diziler sayesinde bir arada tanımlayabiliriz.
**Sınırsız sayıda parametre alabilirler. Büyüyüp küçülebilen verilerdir.
Her elemanın kendine ait bir index no'su vardır.
Bir dizi verisi içindeki herhangi bir parametreye ulaşmak için o parametrenin index numarasına ihtiyacımız vardır.


dizilere ilişlin bir döngü oluşturlacaksa "for of döngüsü" kullanılmalı. 

iterable (iterate: yinelenebilir, tekrarlanabilir, üzerinde dolaşılabilir) array(dizi), string (karakter dizisi), set, map

dizi/array, string gibi koleksiyonların her bir elemannı kolay almak için kullanılır. İndeksle uğraşmadan elemanlara doğrudan ulaşım sağlar. 
*/



let meyveler = ['muz','elma','portakal','limon']
let sonmeyve = meyveler[3]
console.log(sonmeyve)
console.log(meyveler)
let isim='Erkan' // isim değişkeni tanımlandı.
isim='Ali' // isim değişkeni güncellendi.

/* Aynı şekilde dizilerin parametreleri de güncellenebilir. */




meyveler[3] = 'Ayva'
console.log(meyveler[3])
document.writeln(meyveler)

function update()
{
let indexno = prompt("ürün id'i giriniz")
let yeniurun=prompt('Yeni ürün adını giriniz')
let onay = confirm('onaylıyor musunuz')
if(onay==true)
{
    meyveler[indexno] = yeniurun
    console.log(meyveler)
}
else {console.log('güncelleme işlemi iptal edildi.')}

}





let yazdi1 = ['Javascript','C#','PHP','Phyton']
for(let i=0;i<yazdi1.length;i++)
    {
        document.writeln(` <br> ${i+1} - ${yazdi1[i]}`)
    }
  for(a of yazdi1)
    {
        document.writeln(`<a href="">${a}</a><br>`)
    }

// a etiketine class yazalım. 

const fruits = ['elma', 'armut', 'muz'] /// “fruits adında bir sabit değişken tanımla ve içine bir dizi ata: elma, armut, muz.”

for (const fruit of fruits) // “fruits dizisinin her bir elemanını sırayla fruit adında bir değişkene ata ve her adımda bu fruit değişkenini ekrana yazdır.”

{ 
    console.log(fruit);
}
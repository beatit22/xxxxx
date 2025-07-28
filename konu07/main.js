let yazdi1 = ['Javascript', 'C#', 'PHP', 'Python'];
for (let a of yazdi1) { // her bir elemanı a sırayla döner.
    document.writeln(`<a href="https://eksisozluk.com/" target="_blank" class="erkan">${a}</a>`); // document writeln html ye yazdırır.  
    // //${a}: Dizi elemanını HTML içinde gösterir.
    // document: JavaScript’te HTML sayfasının tamamını temsil eden nesnedir (DOM = Document Object Model).
    // writeln: write + ln (line) = yeni satır anlamına gelir.
}

// arrays metots

// concat() => birbirinden farklı birden fazla diziyi birleştirir. concatenate: 

let kgiyim = ['etek', 'bluz', 'kazak']
let egiyim = ['pantolon', 'gömlek', 'çorap']

let giyim = kgiyim.concat(egiyim)
console.log(giyim)

console.log(egiyim.concat(kgiyim))

let cgiyim = ['zıbın', 'şapka', 'thsirt']
let genel_giyim = giyim.concat(cgiyim) //javascript 2 defa istek atar, 2 defa sonuç almış olur. 

console.log(genel_giyim)

let genel_giyim2 = kgiyim.concat(egiyim, cgiyim)
console.log(genel_giyim)


//indexOf() bir dizi data içinde bir verinin olup olmadığnı kontrol etmek için kullanılır. aradığımıdeğer dizi içinde varsa geri dönen sonuç/response o elemanın index numarasıdır. ilk geçtiği index i bulur. 
//eğer eleman yoksa -1 sonucu döner. 

// aynı işlemi gören include true ya da false verir. 

let uyeler = ['ahmet', 'mahmut', 'gamze', 'ayşe']
console.log(uyeler.indexOf('ahmet'))

uyeler = ['ahmet', 'mahmut', 'gamze', 'ayşe', 'mahmut']
console.log(uyeler.lastIndexOf('mahmut'))

let ders = ['java', 'php', 'c#', 'phyton'];

let dersBul = function () {

    let ara = prompt("Aradığınız ders adını yazınız");
    let indisNo = ders.indexOf(ara);

    if (indisNo == 0) {
        alert("aradığınız java dersi bulundu");
        window.location.href = 'https://www.w3schools.com/js/default.asp';
        //windwo.open yan sekmede açar. window.open('https://www.w3schools.com/js/default.asp', '_blank');
    }
    else if (indisNo == 1) {
        alert("aradığınız php dersi bulundu");
        window.location.href = 'https://www.w3schools.com/js/default.asp';
    }
    else if (indisNo == 2) {
        alert("aradığınız c# dersi bulundu");
        window.location.href = 'https://www.w3schools.com/js/default.asp';
    }
    else if (indisNo == 3) {
        alert("aradığınız phyton dersi bulundu");
        window.location.href = 'https://www.w3schools.com/js/default.asp';
    }
    else if (indisNo == -1) {
        alert("aradığınız ders bulunamadı");
    }

}

console.log(ders.includes('phyton')) //true değeri döner 
console.log(ders.includes('erkan')) // false değeri döner

/* push{} SONA EKLER. İTER. bir dizi data içine yeni eleman eklemek için kullanılır. yeni elemanlar her seerinde sondan eklenir. SONA EKLER
pop{} SONDAN ÇIKARIR. bir dizi data içindeki bir elemanı silmek için kullanılır.  parametre almaz. son eleman silinir. 
shift{} BAŞTAN ÇIKARIR. dizi data içindeki ilk elemanı çıkarır.
unshift{} başa ekler, kaydırır. 
*/


let liste = []; // boş bir dizi oluşturur. bu diziye misaifr isimleri eklenecektir.

let rez = () => { // arrow function ile tanımlanmış fonksiyon, çağırıldığında çalışır.

    while (true) { // while ile sonsuz döngü kullanarak kullancıdan sürekli işlem alır. 
        // bu döngü break ifadesi ile durdurulana kadar sonsuz şekilde çalışır.

        // while (x<10) { x++; } // x birer artarak çalışır. ta ki x küçüktür 10 şartını sağlamayana kadar.

        let islem = prompt('Yeni kayıt için: 1\nSilme için: 2\nListeleme: 3\nÇıkış: 4');


        if (islem == 1) {
            let isim = prompt("misafir")
            liste.push(isim) // push ile diziye eklenir. burdaki liste yukarıdaki boş dizidir.
            alert('yeni misafir eklendi')
        }

        else if (islem == 2) {
            liste.shift() // shift ile listedeki ilk kişi silinir.
            alert('ilk misafir listeden çıkarıldı')
        }

        else if (islem == 3) {
            console.log(liste) // mevcut liste console a yazıdırılır.
        }

        else if (islem == 4) {
            alert('dükkan kapandı')
            break // break ile döngü biter, fonksiyon kapanır.
        }

        else {
            alert('yanlış giriş yaptınız') // 1-4 dışındaki girişlerde uyarı verir.
        }
    } // if conditional statements bitti
}; // while -control structrures -- döngü yapıları -- döngü kontrol yapıları (looping / iteration structures) kod bloğunu birden fazla kez çalıştırmak için kullanılır.


// iki tane metot. günlük hayatta sahibinden.com'da  konut seçtik, satılık seçti listeliyor, daire rezidans, müstakil ev, fiayatın üzerine tıkladığımızda, büyükten küçüğe tekrar tıkladığında en düşükten yükseğe doğru sıralıyor.
//1-REVERSE METOTU:
//bir dizi data içindeki elemanları bazı kaynaklarda parametre olarak geçer. parametreleri sondan başa doğru sıralar. 

let isimler = ['ahmet', 'mahmut', 'gamze', 'berk']

console.log(isimler.reverse()) // baştan sona doğru sırala.

// sort() bir dizi data içindeki ögeleri ,artan yönde veya a dan z ye 
console.log(isimler.sort())
console.log(isimler.sort().reverse())

let sayilar = [25, 560, 41, 12, 85]
console.log(sayilar.sort())
console.log(sayilar.sort().reverse())

/// z den a ya sıralama yapan bir metot yok. ya da azalan yönde bir sıralama javascriptte yoktur. 

let yenisıra = isimler.sort() // a dan z ye sıralar
console.log(yenisıra)
console.log(yenisıra.reverse()) // tersten sıralayarak souncu z den a ya sıralanmış bir şekilde yazar.

/*
obje datalar 
-obje datalar {} içinde yazılır. dizilerden farklı olarak key value ikişisi halinde birden fazla değeri 

birden fazla değeri taşıyabilir.
-dizilerden farklı olarak fonksiyon, eğer bir fonksiyon obje data içinde tanımlanıyorsa buna metot denir. 
// -fonksiyon ile metot arasındaki fark: metotlar bir nesneye ihtiyaç duyarlar. 

json datalar, 

tırnak kullanımı aharicinde obje data kuralları aynıdır.
json uzantılı dosyaya yazılırken OBJE DATALAR .js dosyası içine yazılır. içinde bulunduğumuz main.js obje datalar yazılırken, json datalarını bir dosya uzantısı isterler.

yazıcımlar için faydalı apiler. yasin sunmaz
https://www.yasinsunmaz.com/en-faydali-apiler-yazilimcilar-icin.html?ysclid=mdncdn67jn140286350

http://universities.hipolabs.com/search?country=Turkey
*/

let uye = {
    isim: 'Erkan', //1. eleman
    soyad: 'Küpçü', // 2. eleman
    yas: 42, // 3. eleman
    meslek: 'Formateur en marketing digital',
    egitim: ['Javascript', 'HTML', 'webtasarım', 'Python'], // dizi data olarak verebiliriz.
    aile: [
        { kardes: 'Uğur', yas: 46 },
        { anne: 'Ayşe', yas: 65 },
        { baba: 'Kemal', yas: 73 }
    ],
    //log: function(){alert('merhaba')}
    login:()=>{
        let userName = prompt('Kullanıcı adını gir')
        let sifre = prompt('şifrenizi giriniz')
        if(userName == uye.user && sifre==uye.pass){ // if (userName==this.user) içinde bulunduğun user anahtarını al. && sifre==this.pass
            console.log(`${uye.yas} yaşındaki ${uye.meslek} mesleği sahibi ${uye.isim} ${uye.soyad} ; ${uye.egitim.join(', ')} dersleri vermektedir. Annesi ${uye.aile[1].anne} hanım ${uye.aile[0].yas}.`);
        } else{
            console.log('yanlış kullanıcı')
        }

    },
    user: 'gizem',
    pass:123,
    selam:()=> {
        alert('merhaba')
    }
   
    
}


uye.selam()

console.log(uye.isim)
console.log() // konsol obje içindeki log metodu
// console.log(uye.log()) 
uye.login()

console.log(uye.egitim[2]) // üye object datasının eğitim metodu yazılır.
console.log(uye.aile[1]) // üye obje datasının aile dizi datasında 1.indisteki yaş objesi.

// console.log(uye.aile[1].yas)

/* 

42 yaşındaki eğitmen Erkan Küpçü, javascirpt, html, web tasarım ve python dersleri vermektedir. Annesi Ayşe Hanım, babası Kemal Bey ve kardeşi Uğur Bey'dir. bektik kullanılacak.
*/

/*  aşağıdaki daha efektif: 
aile: {
  kardes: { isim: 'Uğur', yas: 46 },
  anne: { isim: 'Ayşe', yas: 65 },
  baba: { isim: 'Kemal', yas: 73 }
}
*/
/* console.log(`${uye.yas} yaşındaki ${uye.meslek} mesleği sahibi ${uye.isim} ${uye.soyad} ; ${uye.egitim.join(', ')} dersleri vermektedir. Annesi ${uye.aile[1].anne} hanım ${uye.aile[0].yas}.`);
 */


/* 
let uye = {
    isim: 'Erkan',
    soyad: 'Küpçü',
    yas: 42,
    meslek: 'Formateur en marketing digital',
    egitim: ['Javascript', 'HTML', 'web tasarım', 'Python'],
    aile: {
        kardes: { isim: 'Uğur', yas: 46 },
        anne: { isim: 'Ayşe', yas: 65 },
        baba: { isim: 'Kemal', yas: 73 }
    },
    log: function () {
        alert('Merhaba');
    }
};

// Tanıtım metni
console.log(`${uye.yas} yaşındaki eğitmen ${uye.isim} ${uye.soyad}, ${uye.egitim.join(', ')} dersleri vermektedir.`);

// Aile bilgilerini döngüyle yazdır
for (let rolu in uye.aile) {
    let kisi = uye.aile[rolu];
    console.log(`${rolu}: ${kisi.isim}, Yaş: ${kisi.yas}`);
}

*/

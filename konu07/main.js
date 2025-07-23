let yazdi1 = ['Javascript', 'C#', 'PHP', 'Phyton'];
for (let a of yazdi1) {
    document.writeln(`<a href="https://eksisozluk.com/" target="_blank" class="dil-link">${a}</a>`);
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

let rez = () => {

    let liste[]

    while (true)
        
        {
        let islem = prompt('yeni kayıt için 1 e basınız', 'silme işlemi için 2ye basınız', 'listeleme 3', 'Çıkış için 4e basınız')
      
      
        if (islem == 1)
            
            {
            let isim = prompt("misafir")
            liste.push(isim)
            alert('yeni misafir eklendi')
        }

        
        else if (isim == 2)
            {
            liste.shift()
        alert('ilk misafir listeden çıkarıldı')
    }

else if (islem == 3) 
    {
    console.log(liste)
} 

else if (islem == 4)
    {
    alert('dükkan kapandı')
    break
} 

else
     {
    alert('yanlış giriş yaptınız')
} 


}

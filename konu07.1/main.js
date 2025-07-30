/* 
Objects (Obje datalar)

-obje datalar {} içinde yazılır 
-Dizilerden farklı olarak key:value ikilisi halinde birden fazla değeri taşıyabilir
-dizilerden farklı olarak içinde fonksiyon (metot olur) yazılabilir.
 (fonksiyonlar obe dataiçinde kullanılırsa metot olarak isimlendirilir)
-boş obje oluşturulabilir(reactkısmında anlatılacak çünkü node.js bilmemiz gerekiyor. Eğer core javascript kullanıcam ve oje dataya veri kaydedicem derseniz node.js kurmamız gerekiyor)
kaydetme düzeltme silme için server'a ihtiyaç var
Not: obje datta kuaralları ile json data kuralları keylere tırnak kullanımı haricinde aynıdır ve json data data.json uzantılı dosyaya yazılır. Obje datalar js dosyası içinde yazılır.

JavaScript	Programlama dili. Web sayfalarını dinamik hale getirmek için yazdığımız kod.
JavaScriptCore	JavaScript dilini yorumlayan ve çalıştıran motor (özellikle Safari ve Apple sistemlerinde).

*/

let uye={
    isim:'Gizem',
    soyad:'Arslan',
    yas:45,
    meslek:'Eğitmen',
    egitim:['Eğitim1','Eğitim2','Eğitim3'],
    aile:[
        {kardes:'Kübra',yas:25},
        {anne:'Ayşe',yas:55},
        {baba:'Mustafa',yas:58}
    ],
    //log: function(){alert('merhaba')} aşağıdaki kısmı sonradan yazdık
    login:()=>{
        let kadi=prompt('kullanıcı adını giriniz')
        let sifre=prompt('şifrenizi girin')
        
        if (kadi==uye.user && sifre==uye.pass){//yada if(kadi==this.user) da olur
            console.log(`${uye.yas} yaşındaki ${uye.meslek} ${uye.isim} ${uye.soyad} ${uye.egitim[0]},${uye.egitim[1]} ve ${uye.egitim[2]} derslerini vermektedir. Annesi ${uye.aile[1].anne} hanım, babası ${uye.aile[2].baba} bey ve kardeşi ${uye.aile[0].kardes} hanımdır.`)

        }else{
            console.log('yanlış kullanıcı')
        }
    },
    user:'gizem',
    pass:123
}

console.log()//console obje içinde log metodu var yukarıdaki gibi
//console.log(uye.log()) //uye oblesi içindeki log metodu oldu
//console == uye
//log==isim denktir
//sonrasında sildik

console.log(uye.isim) //uye objesindeki isim key, value(degeri) gösterir
console.log(uye.egitim[1]) //uye onjesinde eğitim metodu dizi data, dizi data index no kullanır

console.log(uye.aile[2].baba) 

//uye.selam() //custom fonction yazdık// class sistemi budur. 
/*     selam:()=>{
        alert('merhaba')
    },
 */

/* 
45 yaşındaki eğitmen Gizem Arslan eğitim1,eğitim2 ve eğitim3 derslerini vermektedir.
Annesi Ayşe hanım, babası Mustafa bey ve kardeşi kübra hanımdır.

*/
//alt +z yaparak alt satıra geçtik, enter a basmadık
console.log(`${uye.yas} yaşındaki ${uye.meslek} ${uye.isim} ${uye.soyad} ${uye.egitim[0]},${uye.egitim[1]} ve ${uye.egitim[2]} derslerini vermektedir. Annesi ${uye.aile[1].anne} hanım, babası ${uye.aile[2].baba} bey ve kardeşi ${uye.aile[0].kardes} hanımdır.`)

//ödev 

/* login class çağrıldığında kullanıcı adı şifre soracak doğru girilirse yukarıdaki metin gösterilecek neden this kullanırız. eğer birden fazla data varsa içinde bulunduğumuz datayı işaret etmek için this kullanırız. this i araştıralım.
şuan bir tane üye var, ama bir kaç tane uye olsaydı her uyenin adını bilemeyiz uyeler=[{},{},{}] her süslü bir uye
*/

//uye.login()

console.log(uye) // keylere göre alfabetik sırayla yazdırır, dizi datalarda indis no olduğu için nasıltanımlanırsa o şekilde çıktı alınır

let hizmetler =[
    {
        hizmetadi:'Web tasarım hizmeti',
        aciklama:'Web tasarım hizmeti vermekteyiz',
        gorsel:'web.jpg',
        link:'web-tasarimi-hizmeti.html'
    },
    {
        hizmetadi:'Graif tasarımı hizmeti',
        aciklama:'Grafik tasarım hizmeti vermekteyiz',
        gorsel:'grafik.png',
        link:'grafik-tasarimi-hizmeti.html'
    },
    {
        hizmetadi:'Dijital Pazarlama hizmeti',
        aciklama:'Dijital pazarlama hizmeti vermekteyiz',
        gorsel:'dijital.png',
        link:'dijital-pazarlama-hizmeti.html'
    }
]

console.log(hizmetler[0].hizmetadi)

for(let i=0;i<hizmetler.length;i++){
    document.writeln(`
        <div class="box">
            <h2>${hizmetler[i].hizmetadi}</h2>
            <p>${hizmetler[i].aciklama}</p>
            <a href="${hizmetler[i].link}">
                <button>Daha fazla bilgi</button>
            </a>
        </div>
        `)
}
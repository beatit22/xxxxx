/* 


1. Local Storage
Web sitelerinin tarayıcıda kalıcı veri saklamasını sağlar.
Veriler tarayıcıyı kapatıp açsan bile silinmez.
Genellikle kullanıcı ayarlarını, tema tercihlerini, oturum bilgilerini saklamak için kullanılır.
Boyut limiti: Genelde ~5MB civarında.

2. Session Storage
Local Storage’a benzer ama geçicidir.
Tarayıcı sekmesini kapattığında veriler silinir.
Örneğin: Bir form doldururken sayfa yenilendiğinde verilerin kaybolmaması için kullanılabilir.


3. Extension Storage
Chrome eklentilerinin kendi verilerini sakladığı alan.
Normal web siteleri tarafından kullanılmaz.

3 metot vardır: ekleme, silme, verime çekme yaparız. update metotu yoktur.
.setItem => veri kaydetmek için kullanılır. 
Web tarayıcısında Local Storage veya Session Storage kullanırken veriler anahtar–değer (key–value) çiftleri şeklinde tutulur.


**** removeItem(key) → Silme
Belirli bir anahtara karşılık gelen veriyi siler.
Örnek: localStorage.removeItem("isim");


*** getItem(key) → Veriyi Çekme
Verilen anahtara karşılık gelen değeri getirir.

Anahtar yoksa null döner.

Örnek:
let ad = localStorage.getItem("isim");
console.log(ad); // "Erkan"


*/

// sessionStorage.setItem('isim',"Erkan") // Burada "isim" anahtarı altında "Erkan" değeri saklanır.

/* localStorage.setItem('isim','Erkan')

// localStorage.clear() // tümünü sil

localStorage.setItem('Soyad','Küpçü')
localStorage.setItem('Soyad','Erkan')
// localStorage.removeItem('isim')

let isim= document.querySelector('#isim')

isim.innerText=localStorage.getItem('Soyad','isim') */


let sign=document.querySelector('#sign')
let login=document.querySelector('#login')

let kadi=document.querySelector('#kadi')
let sifre=document.querySelector('#sifre')
let user=document.querySelector('#user')
let pass=document.querySelector('#pass')

sign.addEventListener('submit',(sign)=> {
    sign.preventDefault() // formun varsayılan davranışı (sayfayı yenileme ve veriyi gönderme) iptal edilir.

    localStorage.setItem('1', kadi.value)
    localStorage.setItem('2', sifre.value)
    window.location.href='index.html'

})

login.addEventListener('submit',(login)=>{
    login.preventDefault()

    let kayitliUser = localStorage.getItem('1')
    let kayitliPass = localStorage.getItem('2')

    if(user.value==kayitliUser && pass.value==kayitliPass){
        alert('Giriş başarılı.')
        window.location.href='profile.html'
        
    }else{
        alert('hatalı giriş yaptınız')
        
    }window.location.href='index.html'
})

let ogrenci={ad:"Ayşe", yas:20}
localStorage.setItem("ogrenci",JSON.stringify(ogrenci))

let veri=JSON.parse(localStorage.getItem("ogrenci")) // tekrar nesneye çevirir
console.log(veri.ad) // ayşe çıktısını alır.

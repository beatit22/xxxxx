/* 
Storage Kullanımı

1-sessionStorage -> Tarayıcı geçici hafızası, tarayıcı kapandığında kayıtlı veriler silinir
2-localStorage ->Tarayıcı kalıcı hafızası, tarayıcı kapansada kayıtlı veriler silinmez

3 metot vardır
ekleme, silme, veri çekme
.setItem ->veri kaydetmek için kullanılır, key, value lullanılır
.removeItem -> veri silmek için kullanılır, sadece key parametresini alır
.getItem -> veriyi çekemk için kullanılır,sadece key parametresini alır

*/

//sessionStorage.setItem('1','Gizem')

/* localStorage.setItem('1l','Gizem')

//localStorage.clear() //tümünü sil

localStorage.setItem('2','Arslan')
localStorage.setItem('2','Gizem') // key 2 olan verinin değerini günceller

localStorage.removeItem('1l')

let isim =document.querySelector('#isim')
isim.innerText = localStorage.getItem('2') */

let sign = document.querySelector('#sign')
let login = document.querySelector('#login')

let kadi = document.querySelector('#kadi')
let sifre = document.querySelector('#sifre')

let user = document.querySelector('#user')
let pass = document.querySelector('#pass')

sign.addEventListener('submit',(sign)=>{
    sign.preventDefault() //formun varsayılan çalışmasını durdurur, yani boş veri göndermez
    localStorage.setItem('1',kadi.value)
    localStorage.setItem('2',sifre.value)
    window.location.href = 'index.html' //form dolu kaldı,formu temizlemek için kullandık
})

login.addEventListener('submit',(login)=>{
    login.preventDefault()

    let kayitliUser = localStorage.getItem('1')
    let kayitliPass = localStorage.getItem('2')

    if(user.value==kayitliUser && pass.value==kayitliPass){
        alert('Giriş başarılı')
        window.location.href ='profile.html'
    }else{
        alert('hatalı giriş yaptınız, tekara deneyin')
        window.location.href ='index.html'
    }

})

let ogrenci = {ad:"Ayşe",yas:20}
localStorage.setItem("ogrenci",JSON.stringify(ogrenci))

let veri=JSON.parse(localStorage.setItem("ogrenci"))
console.log(veri.ad) //ayşe çıktısını verir


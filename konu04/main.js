/*
Functions (Fonksiyonlar)
-İsimlendirme kuralları değişkenler ile aynı
-Belirli bir işlemi yerine getiren ifadelerdir.
-fonksiyonlar çağrıldığı takdirde çalışır.
-fonsiyonlar geriye değer döndürür(değişkenlere atanan ifadelere değer denir)

*/

//Klasik fonksiyon syntax

function info(){
    alert('Bu fonsiyon deneme fonsiyonur')
}

//info() fonsiyonu çağırdık, şimdi çalışır

function login(){
    while(true){
        let kadi = prompt('Kullanıcı adınız:')
        let sifre = prompt('şifreniz:')
        if (kadi=='Gizem' && sifre==123){
            alert(`${kadi}, admin paneline hoşgeldiniz`)
            break
        }else{
            alert('kullanıcı adı veya şifreniz hatalı')
        }
    }
}

//Anonim fonsiyon, bu fonsiyonun ismi yoktur,
// değişken tanımlar gibi yazılır

let uyeol = function(){
    let user = prompt('Kullanıcı adınız belirleyiniz')
    let pass = prompt('Şifre belileyin')

    alert(`Sevgili ${user} üyelik işleminiz tamamlandı`)
}

//Arrow fonsiyonlar--değişkene atama yaparak tanımlanır

let sepet = () =>{
    window.location.href ='sepet.html'
}

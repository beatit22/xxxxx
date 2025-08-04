
/* 

Document Object Management (DOM)

WEB sitesi içindekjli elemetlere erişmek ve yönetmek için kullanrlar. 

6 adet yöntem var. 3 3 ayrılır.
A) GET Element By yöntemi
    1) document.getElementById('idAdı')
    2) document.getElementsClassName('ClassdAdı yani box yazılacak')
    2) document.getElementsTagName('HTML etiketin adı')

B) QuerySelector yöntemi
  1) document.querySelector('#idAdı')
  2) document.querySelector('.classAdı') 
  3) document.querySelector('etiketAdı')

 not:  A2,A3,B2,B3 indiks ile kullanılacaktır. 
*/

let baslik = document.getElementById('baslik') // id ismi başlık olanı seç.

let change=() =>{ 
    
    //change adında bir değişken/fonksiyon ismi oluşturuyorsun.
// () => { ... } Bu, bir anonim (isimsiz) fonksiyonun ok (arrow) biçimidir. 
// () içine parametre yazabilirsin (bu örnekte yok). 
// => ok işareti, fonksiyon tanımı yapıldığını gösterir. 
// {} içine ise yapılacak işlemler yazılır.

// 1  - baslik.innerText = 'bu başlık JS ile yazıldı.'   // neden nokta koyuyorum çünkü başlık bir javascript nesnesi oldu. .innerText: Bu özellik, HTML etiketinin iç metnini değiştirmeye yarar.

// 2-  baslik.textContent='bu başlık JS ile yazıldı.' 
baslik.innerHTML ='<h2>Bu başlık JS ile h2 etiketinde yazıldıu.</h2>'
} 

let btn = document.querySelector('.btn') //karşılaştığı ilk btn class alır. 
console.log(btn)

let color=function() {
    btn.style.backgroundColor = 'yellow'

}

// eğer javascriptte CSS değişikliği yapacaksanız id kullanılmalı.

let dugme=document.querySelector('#btn') // id si btn olan butonu yakaladık ve dugme adındaki değişkene atadık. 

console.log(dugme)

let renk=function(){
    dugme.style.backgroundColor ="red"
}

let adres = document.URL
let whatsapp = document.querySelector('#wp')

whatsapp.innerHTML = ` <a href = "https://api.whatsapp.com/send?phone=905303134522&text=${adres}" target="_blank"> bize yazın </a>`

let sayfaAdi = document.title

let sayfa= document.querySelector('#sayfa')

sayfa.innerHTML = ` <a href = "https://api.whatsapp.com/send?phone=905303134522&text=${sayfaAdi}" target="_blank"> sayfa </a>`
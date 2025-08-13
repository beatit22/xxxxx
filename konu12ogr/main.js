/* 

Math Metots
Syntax yapısı
Math.metodunİsmi()
.round ->Parametre olarak verieln bir ondalıklı sayısal veririnin yuvarlanmasını sağlar
.ceil() ->Parametre olarak verilen sayının ondalıklı kısmı ne olursa olsun
        sayısal değeri tam sayı olarak yukarı yuvarlar
.floor()->ONdalıklı kısım ne olursa olsunsayısal değeri aşağı yuvarlar
.min() ve .max() ->parametreler arasında en küçük ve en büyük değeri bulur
.random()->Rastgele sayı üretir. varsayılan olarak 0.0 ile 0.99999 arasında değer üretir
*/

console.log(Math.round(9.62)) //console 10 yazar
console.log(Math.round(9.42)) // console 9 yazar

console.log(Math.ceil(9.62)) //console 10 yazar
console.log(Math.ceil(9.42)) //console 10 yazar

console.log(Math.ceil(0.45)) // console 1 yazar
console.log(Math.floor(0.45)) //console 0 yazar

console.log(Math.floor(9.62)) //console 9 yazar
console.log(Math.floor(9.42)) //console 9 yazar

console.log(Math.min(9,62,-7,12,42,-456)) //console -456 yazar
console.log(Math.max(9,62,-7,12,42,-456)) //console 62 yazar

let dizi = [9,5,5,4,-7,3,74,12,75]

console.log(Math.max(...dizi))
console.log(Math.max.apply(null,dizi))

console.log(Math.random())
console.log(Math.random()*11) //11'den küçük ondalıklı sayı üretir. bu sayı 0 olabilir ama 11 olamaz

console.log(Math.ceil(Math.random()*11)) //11 elde edilebilir ama 0 elde edilemez
console.log(Math.floor(Math.random()*11)) //0 elde edilebilir fakat 11 sayısı olmaz 

//ornek1
let buton = document.querySelector('#sayisal')

let kutu1 = document.querySelector('#box1')
let kutu2 = document.querySelector('#box2')
let kutu3 = document.querySelector('#box3')
let kutu4 = document.querySelector('#box4')
let kutu5 = document.querySelector('#box5')
let kutu6 = document.querySelector('#box6')

buton.addEventListener('click', function(){
    let s1 = Math.ceil(Math.random()*49)
    let s2 = Math.ceil(Math.random()*49)
    let s3 = Math.ceil(Math.random()*49)
    let s4 = Math.ceil(Math.random()*49)
    let s5 = Math.ceil(Math.random()*49)
    let s6 = Math.ceil(Math.random()*49)

    kutu1.innerText = s1
    kutu2.innerText = s2
    kutu3.innerText = s3
    kutu4.innerText = s4
    kutu5.innerText = s5
    kutu6.innerText = s6

})

//ornek2
let char = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'
]



console.log(char.length)//62 çıktısını verir

let k1 = Math.floor(Math.random()*62)
let k2 = Math.floor(Math.random()*62)
let k3 = Math.floor(Math.random()*62)
let k4 = Math.floor(Math.random()*62)
let k5 = Math.floor(Math.random()*62)

let robot = document.getElementById('robot')

robot.innerText = `${char[k1]}${char[k2]}${char[k3]}${char[k4]}${char[k5]}`
/*
let yenile = document.getElementById('yenile')
 yenile.addEventListener('click', ()=>{
    window.location.href = 'index.html' // sayfa yenilenir
}) */

//sadece botuna tıklandığında id'si robot olan div içi güncellenir
function yenile(){
    let k1 = Math.floor(Math.random()*62)
    let k2 = Math.floor(Math.random()*62)
    let k3 = Math.floor(Math.random()*62)
    let k4 = Math.floor(Math.random()*62)
    let k5 = Math.floor(Math.random()*62)

robot.innerText = `${char[k1]}${char[k2]}${char[k3]}${char[k4]}${char[k5]}`
}

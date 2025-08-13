/* 
Math Metots

Sytanx yapısı
Math.metodunİsmi()



round: parametre olarak verilen bir ondalıklı sayısal verinin yuvarlanmasını sağlar. 

bir örnek: 

.ceil()
parametre olarak verilen sayıın ondalıklı kısmı ne olursa olsun farketmez 

.floor ondalıklı kısım ne olursa olsun, sayısal değeri aşağı yuvarlar. 

.min . max parametreler arasında en küçük veya en büyük değeri bulur.
Math.min(): Verilen sayılar arasındaki en küçük değeri döndürür.
Math.max(): Verilen sayılar arasındaki en büyük değeri döndürür.

İkisi de parametreler listesinden çalışır; eğer dizi ile kullanmak istersek ... (spread) operatörü gerekir.
let rastgele = Math.floor(Math.random() * 10) + 1; 
console.log(rastgele); // 1 ile 10 arasında rastgele sayı

for (let i=0; i<4; i++){
document.writeln(Math.ceil(Math.random()*11)+ "");
}
*/

console.log(Math.round(9.62)) // console 10 yazar.
console.log(Math.round(9.42)) // console 9 yazar.


console.log(Math.ceil(9.62)) // 10 yazar. 
console.log(Math.ceil(9.42)) // 10 yazar. 
console.log(Math.ceil(5.0)); // 5 (Zaten tam sayı olduğu için değişmez)


console.log(Math.ceil(0.45)) // 1 yazar.
console.log(Math.floor(0.45)) // 1 yazar.

console.log(Math.ceil(9.62)) // 9 yazar.
console.log(Math.floor(9.42)) // 9 yazar.


console.log(Math.min(9,62-7,12,43,-456))

let sayilar=[1,2,3,25]
console.log(Math.max(...sayilar))

let sayilar1 = [5, 11, 3, 25]
let maxDeger=sayilar1[0]

for (let i of sayilar1) {
  if(i> maxDeger){
    maxDeger=i;
  }
}

console.log(maxDeger);


let dizi =[9,5,7,9,10,25]
console.log(Math.max(...dizi))


console.log(Math.max.apply(dizi))
document.writeln(Math.max.apply(null,dizi))

document.writeln("<br><br> ");


document.writeln(Math.max.apply(null,dizi))

console.log(Math.random()*11)





document.writeln("<br><br> ");


let button=document.querySelector('#sayisal')

let kutu1=document.querySelector('#box1')
let kutu2=document.querySelector('#box2')
let kutu3=document.querySelector('#box3')
let kutu4=document.querySelector('#box4')
let kutu5=document.querySelector('#box5')
let kutu6=document.querySelector('#box6')


button.addEventListener('click', function(){
    let s1=Math.ceil(Math.random()*49)
    let s2=Math.ceil(Math.random()*49)
    let s3=Math.ceil(Math.random()*49)
    let s4=Math.ceil(Math.random()*49)
    let s5=Math.ceil(Math.random()*49)
    let s6=Math.ceil(Math.random()*49)

kutu1.innerText=s1
kutu2.innerText=s2
kutu3.innerText=s3
kutu4.innerText=s4
kutu5.innerText=s5
kutu6.innerText=s6
}
)




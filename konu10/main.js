/* 

Add Event Listener
Çok sayıda evet var.
Kullanıcıların hareketlerine göre çalışacak algoratima yapısıd.r


syntax yapısı

elemeting değişken adı 

elementtingdegiskenadi.addEventListener('eventadi', ()=> {
    event gerçekleşitğinde çalışacak kod blogu})


    https://www.w3schools.com/js/js_htmldom_eventlistener.asp

    element.addEventListener(event, function, useCapture);

    "Belirli bir HTML öğesine bir olay dinleyicisi (event listener) ekle."

    event: 	Dinlemek istediğin olay (örneğin "click", "mouseover", "keydown" gibi)

   function: Olay gerçekleştiğinde çalışacak JavaScript kod bloğu


*/

let koyuButonu= document.querySelector('#koyu')
let koyuMu=false
//console.log(koyuButonu)
//let zemin = documentgetlement

koyuButonu.addEventListener ('click',function(){
  if(koyuMu){ // koyuMu===false
    document.body.style.backgroundColor='lightgreen'

  } else{
document.body.style.backgroundColor='black'

  } 
koyuMu=!koyuMu

})

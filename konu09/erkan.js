

let baslik=document.getElementById('baslik')
let btn = document.getElementById('btn')
let sayac = 0

btn.addEventListener('click', function() {

    sayac++
    baslik.innerText=`Tıklanma sayısı: ${sayac}` 
}


)

btn.addEventListener('click',function(){
document.body.style.backgroundColor='lightgreen'

})

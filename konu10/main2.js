let koyuButonu = document.querySelector('#koyu') // diyez çünkü id.

let zemin = document.getElementById('badi')
let acikbutonu = document.querySelector('#acik')
let metin = document.querySelector('#paragraf')


koyuButonu.addEventListener('click', function () {
    zemin.style.backgroundColor = '#000' // siyah renk
    koyuButonu.innerText = 'Açık mod'
    metin.style.color = '#fff'
    // koyuButonu.id='acik' // butonun id değeri değiştirildi. 
    koyuButonu.style.display = 'none'
    acikbutonu.style.display = 'inline-block'
})

acikbutonu.addEventListener('click', function () {
    zemin.style.backgroundColor = '#fff' // siyah renk
    acikbutonu.innerText = 'Kapalı mod'
    metin.style.color = '#000'
    acikbutonu.style.display = 'none'
    koyuButonu.style.display = 'inline-block'
})

let kutu = document.querySelector('#box') // diyez çünkü id

kutu.addEventListener('mouseover', function () {
    kutu.style.backgroundColor = 'darkblue'
    kutu.style.color = '#fff'
    kutu.innerText = 'Mavi kutu'
})

kutu.addEventListener('mouseout', function () {
    kutu.style.backgroundColor = 'yellow'
    kutu.style.color = '#000'
    kutu.innerText = 'Sarı kutu'

})


let urun = {
    urunAdi: 'Pantolon',
    marka: 'Mavi',
    beden: 'S-M-L-XL',
    fiyat: "1750",
    gorsel: 'https://00846a.cdn.akinoncloud.com/products/2024/11/21/347740/7bd8727e-c922-4a74-9186-841974cab4c6_size256_cropCenter.jpg'
}

let category = document.querySelector('#kategori')
let productCard = document.querySelector('#urunKart')



category.addEventListener('click', function () {
    productCard.innerHTML =
`
<div style="border:1px solid #ccc; padding:10px; width:250px;text-align:center; background-color:#f9f9f9;">

<img src="${urun.gorsel}"  
    alt="${urun.urunAdi}"  

    title="${urun.urunAdi}" 

    style="width:100%; border-radius:6px"> 


<!-- 

src (source): Görselin dosya yolunu ya da URL’sini belirtir.

alt (alternative text): Görsel yüklenemezse veya ekran okuyucu kullanılıyorsa bu metin gösterilir/okunur. SEO (arama motoru optimizasyonu) açısından da faydalıdır.

title: Fareyle resmin üzerine gelindiğinde görünen küçük açıklama (tooltip) metnidir. Kullanıcı deneyimini artırır; görsel hakkında ek bilgi vermek için kullanılır.

style: HTML içinde doğrudan CSS stilini yazar width:100% → Resmin genişliğini bulunduğu kapsayıcıya göre %100 yapar (responsive). border-radius:6px → Resmin köşelerini 6px yuvarlar, yumuşak kenarlar oluşturur.

-->



<h3>${urun.urunAdi}</h3>

  <p>Marka: ${urun.marka}</p>
  <p>Beden: ${urun.beden}</p>
  <span>Fiyat: ${urun.fiyat}</span>  <!--  span: satır içi (inline) bir element  -->
 
</div>
`


})

/*         

https://www.w3schools.com/js/js_classes.asp


<button id="kategori">Pantalon  - Trousers </button>
        <div id="urunKart"> </div> 
        
        
        ödev class: w3 school js/js_classes asp
        class Car {
        constructor
        this.name
        }

        const mycar1 =new Car("ford",2024)
        const myCar2= new Car("audi", 2019)

        */
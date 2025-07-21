//replace örneği

///

// let adres = 'Şirinevler'

// function update() { 
    // Prompt the user to enter a new address
    // let yeni_adres = prompt('Yeni adresinizi yazınız:')
    // Replace the old address with the new one (here, adres is fully replaced by yeni_adres)
 /*    let sonuc = adres.replace(adres, yeni_adres) */
    // Print the new address using template literals
   // console.log(`Yeni adresiniz: ${adres.replace(adres, yeni_adres)}`)
// }

///

    let adres = 'Şirinevler'

function update1() { 
 let yeniAdres = prompt ('Yeni adresi giriniz')
 let onay = confirm('Adresiniz güncellenecektir, onaylıyor musunuz') // tamam butonuna basınca onay değişkeni TRUE değerini alır, iptal'e basılırsa ise FALSE olur.
 if(onay==true) 
 {
    let sonuc = adres.replace(adres, yeniAdres)
    console.log(`Yeni adresiniz: ${sonuc}`)
 }
 else
  { console.log('adres güncelleme iptal edildi.')
 }

}
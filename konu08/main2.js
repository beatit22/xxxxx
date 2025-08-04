let data=fetch('veri2.json') // verilen api adresi burada tırnaklar içine yazılır,
// bu örnekte aynı klasör içinde olduğu için dosya adını yazdık. veri.
// json adlı dosyaya GET isteği gönderir
    .then(response => response.json()) //bu datayı al ve obje datat türüne çevir yani veriyi dönüştürür.
    .then(list =>{
        for(let i=0;i<3;i++){
            document.writeln(`
                <div style="width:200px; float:left; border:1px solid #000; margin:0px 15px; padding:10px; text-align:center;">
                    <img src="${list[i].image}" alt="" style="width:100%; border:1px solid lightgrey">
                    <h2>${list[i].product}</h2>
                    <p>Beden: ${list[i].size}</p>
                    <small>Fiyat: ${list[i].price}₺</small><br><br>
                    <button>Sepete ekle</button>
                </div>
                `)
        }
    }) 
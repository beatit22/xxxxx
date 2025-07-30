//fetch fonk json datatyı javascript içine import eder
/* let data=fetch('veri.json') // verilen api adresi burada tırnaklar içine yazılır,bu örnekte aynı klasör içinde olduğu için dosya adını yazdık.
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
    })  */
// Bütün veri list değişkenine atandı ve data ile ilgili yapılacak işlemler bu kod kümesi içine yazılır

fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(response =>response.json())
    .then(blog=>{
        for(let i=0;i<5;i++){
            document.writeln(`
                <div style="width:200px; float:left; margin:10px;">
                    <img src="https://zebramo-production.eu-central-1.linodeobjects.com/product_images/2020-51/01ETCMPHN7EA3VXEE1WS94KKKQ_256x256.jpg" alt="" style="width:100%;">
                    <h2>${blog[i].title}</h2>
                    <p>${blog[i].body}</p>
                    <button>Devamını oku</button>
                </div>
                `)
            
        }
    })

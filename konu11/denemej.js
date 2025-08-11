
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

        A JavaScript class is not an object. It is a template for JavaScript objects.
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.



        */



class Araba {
    constructor(name,year) {
        this.name=name;
        this.year=year;
    }
    age() {
        const date=new Date();
        return date.getFullYear()-this.year;
    }
}

const araba1 = new Araba("Ford",2014);
const araba2 = new Araba("Tesla",2025);

document.getElementById("demo").innerHTML=
araba1.name + " " + araba1.age() + " yaşında<br>"+
araba2.name + " " + araba2.age() + " yaşında";






class Login {
  constructor(isim, soyad, yas, meslek, egitim, user, pass) {
    this.isim = isim;
    this.soyad = soyad;
    this.yas = yas;
    this.meslek = meslek;
    this.egitim = egitim;
    this.user = user;
    this.pass = pass;
  }
}

// Üyeleri dizi içinde saklıyoruz
const uyeler = [
  new Login(
    "Erkan",
    "Küpçü",
    42,
    "Formateur en marketing digital",
    ["JavaScript", "HTML", "Web tasarım", "Python"],
    "beatit",
    "22"
  ),
  new Login(
    "Ayşe",
    "Yılmaz",
    35,
    "Yazılım Mühendisi",
    ["Java", "Spring Boot", "Veritabanı Tasarımı"],
    "ayse35",
    "1234"
  ),
  new Login(
    "Mehmet",
    "Demir",
    29,
    "Grafik Tasarımcı",
    ["Adobe Photoshop", "Illustrator", "UI/UX Tasarımı"],
    "mehmetd",
    "abcd"
  )
];

function login() {
  const userName = prompt("Kullanıcı adını giriniz:");
  const sifre = prompt("Şifrenizi giriniz:");

  if (userName === null || sifre === null) return;

  const u = userName.trim().toLowerCase();

  // Dizide arama yapıyoruz
  
  const uye = uyeler.find(
    member => member.user.toLowerCase() === u && member.pass === sifre
  );

  const out = document.getElementById("demo");

  if (uye) {
    out.textContent =
      `${uye.yas} yaşındaki ${uye.meslek} ${uye.isim} ${uye.soyad}; ` +
      `${uye.egitim.join(", ")} dersleri vermektedir.`;
  } else {
    out.textContent = "Yanlış kullanıcı.";
  }
}

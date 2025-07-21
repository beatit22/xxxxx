confirm('Üyelik kaydınızı onaylıyor musunuz?')

/* 
data türleri
A)Primitive Data (İlkel)
  1-String-->Metinsel ifadeleri oluşturan data türüdür. 
  Tırnak içinde yazılmalıdır.
  2-Integer-->tam sayılar-tırnak kullanılmaz-number
  3-Float(Douple)--< Ondalıklı sayıları oluşturan veri türü
  tırnak kullanılmaz
  4-Boolean-->Mantıksal veri türü
  5-Undefined-->Tanımlanmamış(Değer ataması yapılmamış)
  6-Null-->Başlanğıcta bir değişkene değer atamak durumunda kalırsak kullanılır.
B)Non-Primitive Data(İlkel omayan -Gelişmiş)
  1-Arrays(Diziler)-->Eğer bir değişkene birden fazla 
  değer ataması yapılacaksa kullanılır.() yada []
  2-Object(Nesne)-->Birden falza birbiriyle bağlantılı
  değer ataması yapılacaksa kullanılır.{} kullanılır
  3-Functions(Fonksiyonlar)-->Bir işlem grubu oluşturmak
  için kullanılır.İşlem süreci sonunda çıkan değeri(sonucu) döndürür

*/
console.log('Gizem Arslan')
console.log(typeof('Gizem arslan'))

console.log(typeof('5'))
console.log(typeof(5))

console.log(2.5)
console.log(typeof(0.5))

document.write('Gizem Arslan') //WEB sayfasına yazar
//hatalı satır, console da görünür
document.write('Merhaba') 
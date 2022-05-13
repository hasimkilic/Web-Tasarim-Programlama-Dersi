// dikdörtgenler prizması için en, boy, yükseklik değişkenlerini sabit olarak değişkene ata
// alan, hacim hesapla, ekrana yaz

// düzgün altıgen için kenar değişkenini sabit olarak değişkene ata
// çevre ve alan bul ekrana yaz,

// dikdörtgen için en, boy değişkenlerini sabit olarak değişkene ata

// çevre ve alan bul ekrana yaz


// üçgen için taban ve yükseklik en, boy, yükseklik değişkenlerini sabit olarak değişkene ata
// çevre ve alan bul ekrana yaz,
// üçgen, eşkenar mı? ikizkenar mı?, çeşitkenar mı? bul ekrana yaz
// üçgenin kenarları üçgen olmaya elverişli mi bul, ekrana yaz


// ödevler sadece online/yüzyüze derse gelenler için geçerli ve  kontroller derste yapılıp notlar verilecek.
// derse daha önce gelmeyenler ödevi yapıp online derse gelerek ödev sunulabilir.

// Dikdörtgen prizması alanı : yanal alan + 2 * (taban alanı) 
// yanal alan = taban çevresi * yükseklik = 2(a+b) * c  ,c = yükseklik
// Bütün alan = 2((a*b) + (a*c)+(b*c))
// Hacim = Taban alanı * yükselik  = a* b * c


//!Dikdörtgenler Prizması
let a = 8 //en
let b = 10 //boy
let c = 12 // yükseklik


let tabanCevre = 2 * (a + b) //taban çevre
let yanalAlan = tabanCevre * c //yanal alan
let dikAlan = (yanalAlan) + (2 * ((a * b) + (a * c) + (b * c))) //alan
let dikHacim = a * b * c //hacim 
let dikCevre = 4 * (a + b + c) // çevre


console.log('Dikdörtgenler Prizması Çevresi: ' + dikCevre) //120
console.log('Dikdörtgenler Prizması Alanı: ' + dikAlan) //1024
console.log('Dikdörtgenler Prizması Hacmi: ' + dikHacim) //960

//!Düzgün Altıgen

let d = 6 // kenar
let h = 15 // yükseklik

let düzCevre = 6 * d //çevre
let düzAlan = 6 * (((d ** 2) * Math.sqrt(3)) / 4) // Bu komut ile sayının kökünü alırız. //alan 

console.log('Düzgün Altıgen Çevresi: ' + düzCevre) //36
console.log('Düzgün Altıgen Alanı: ' + düzAlan) // 93.5307....

//!Dikdörgen 

let ditEn = 12 //en
let ditBoy = 14 // boy

let ditCevre = 2 * (ditEn + ditBoy) //çevre
let ditAlan = ditEn * ditBoy //alan


console.log('Dikdörtgenin çevresi: ' + ditCevre) // 52
console.log('Dikdörtgenin Alan: ' + ditAlan) //168

//!Üçgen
//Üçgen olma şartı : Daima bir üçgenin iki kenar uzunluğunun toplamının daima üçüncü kenardan daha büyük olmalı

let ucKenar1 = 6 //yan kenar
let ucKenar2 = 8 // yan kenar
let ucKenarTbn = 10 // taban
let ucYükseklik = 7 // yükseklik

//Üçgen olmaya elverişli mi onu kontrol edelim elverişli ise hesaplayalım değilse hesaplama yapmasın ve uyarı versin

function ucgenOlma() {
    if ((ucKenar1 + ucKenar2) > ucKenarTbn && (ucKenar1 + ucKenarTbn) > ucKenar2 && (ucKenar2 + ucKenarTbn) > ucKenar1) {
        console.log('Üçgen olmaya elverişlidir.')

        let ucCevre = ucKenar1 + ucKenar2 + ucKenarTbn //çevre
        let ucAlan = ((ucKenarTbn * ucYükseklik) / 2) //alan

        console.log('Üçgenin çevresi: ' + ucCevre) //24
        console.log('Üçgenin Alanı: ' + ucAlan) //35

    } else {
        console.log('Üçgen olmaya elverişli değildir.')

    }
}
ucgenOlma()

//Hangi tür üçgen olduğunu bulalım (ikizkenar nasıl çalışacağı koşulunu yazamadım)
if (ucKenar1 == ucKenar2 && ucKenar2 == ucKenarTbn && ucKenar1 == ucKenarTbn) {
    console.log('Bu üçgen eşkenar üçgendir!')
} else if (ucKenar1 !== ucKenar2 !== ucKenarTbn) {
    console.log('Bu üçgen çeşitkenar üçgendir!')
} else if (ucKenar1 == ucKenar2 || ucKenar1 == ucKenarTbn || ucKenar2 == ucKenarTbn) {
    console.log('Bu üçgen ikizkenar üçgendir!')
}
// ////   String Methods in JS

// 1. charAt()- string ichidagi belgini 0 dan boshlab indexlab bitta belgi qaytaradi. agar manfiy son kiritsak oxiridan boshlab hisoblaydi
let text1 = "HELLO WORLD";
let letter = text1.charAt(0);
console.log(letter);

// 2. charCodeAt() -Berilgan indexdagi belgining unicode kodini qaytaradi
let text2 = "HELLO WORLD";
let code = text2.charCodeAt(0);

// 3. concat - Bir nechta stringlarni qo'shadi
let text31 = "Hello";
let text32 = "world!";
let result3 = text31.concat(" ", text32);
console.log(result3);

// 4. constructor- konstruktiv tuzilishi chiqaradi
let message = "Hello World!";
let text4 = message.constructor;
console.log(text4);

// 5.endWith()-agar kiritilgan soz stringning oxirgi sozi bn bir xil bolsa true qaytaradi
let text5 = "Hello world";
let result5 = text5.endsWith("world");
console.log(result5);

// 6.fromCharCode-charCodeAt()-ning teskarisi
let text6 = String.fromCharCode(72, 69, 76, 76, 79);  // javobi : hello world
console.log(text6);

// 7.includes()- agar soz string ichida bolsa true qaytaradi,bolmasa false
let text7 = "Hello world, welcome to the universe.";
let result7 = text7.includes("world");
console.log(result7);

// 8. index.Of- kiritgan so'zni string ichidagi gapda bor bolsa , sozning birinchi harfini indexini chiqaradi
let text8 = "Hello world, welcome to the universe.";
let result8 = text8.indexOf("welcome");// javobi:13
console.log(result8);

// 9.lastIndexOf()- index of ga oxshaydi faqat oxirgi sozni tekshiradi
let text9 = "Hello planet earth, you are a great planet.";
let result9 = text9.lastIndexOf("planet");
console.log(result9);

// 10.length -string uzunligini aniqlaydi
let text10 = "Hello World!";
let length10 = text10.length;

// 11.match- kiritilgan bolak ni string ichidan qidirib chiqarib beradi
let text11 = "The rain in SPAIN stays mainly in the plain";
let result11 = text11.match("ain");

// 12. repeat -textni bir necha marta kochirib beradi
let text12 = "Hello world!";
let result12 = text12.repeat(2);
console.log(result12);

// 13. replace- stringdagi sozni boshqa sozga almashtirib beradi
let text13 = "Visit Microsoft!";
let result13 = text13.replace("Microsoft", "W3Schools");
console.log(result13);

// 14.replaceAll-teks ichidagi hamma soznio almashtirib beradi
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);

// 15. search-sozni tekst ichida birinchi qatnshagan joyidan boshlab. sozning birinchi harfining indexni beradi
let text15 = "Mr. Blue has a blue house";
let position = text15.search("Blue");
console.log(position);

// 16. slice -interval oralig'ini keasib oladi
let text16 = "Hello world!";
let result16 = text16.slice(0, 5);
console.log(result16);

// 17. split- bosh joyu orniga , bn toldiradi
let text17 = "How are you doing today?";
const myArray = text17.split(" ");
console.log(text17);

// 18. startsWith- agar birinchi soz kiritilgan soz bn boshlansa true qaytaradi
let text18 = "Hello world, welcome to the universe.";
let result18 = text18.startsWith("Hello");
console.log(result18);

// 19.substr- bu n dan m gacha kesib beradi
let text19 = "Hello world!";
let result19 = text19.substr(1, 4);
console.log(result19);

// 20. substring - huddi substrdek faqat m ozi kirmaydi 
let text20 = "Hello world!";
let result20 = text20.substring(1, 4);
console.log(result20);
{/* <Variable declaration> */ }

var price = 10;
var age = 22;
var tempareture = 38;
var name = "rohul;";
var person = "man";
var special = "She";




var totalPrice = (ricePrice + foodPrice);
console.log(totalPrice);
var name = "ananta jolil";
var herName = "borsha";
console.log(herName);
console.log(name);
var deffirent = (foodPrice * ricePrice);
console.log(deffirent);
var money = 1200;
var players = 11;
var eachPlayer = (money / players);
console.log(eachPlayer);


var price1 = 30;
var price2 = 60;
var price3 = (price1 + 20);
console.log(price3);

// parseFloat & parseInt :

var price1 = "31";
var price = parseInt(price1);
console.log(price);

// Use typeof :

var price = 100;
console.log(typeof price);
var name = "rohul";
console.log(typeof name);
var iamHappy = true;
console.log(typeof iamHappy);

// /* <Calculation by using let>  */:

let num1 = 45;
let num2 = 50;

let sum = (num1 + num2);
let sub = (num2 - num1);
let multiply = (num1 * num2);
let division = (num2 / num1);
let remainder = (num2 % num1);


console.log("sum:", sum);
console.log("sub:", sub);
console.log("multiply:", multiply);
console.log("Division:", division);
console.log("Remainder:", remainder);




/* <use shorthand> */

let amarPrice = 90;
let vabBarce = amarPrice += 30;
console.log("Vab bere dam barce:", vabBarce);
let damDorKom = amarPrice -= 40;
console.log("osomoi dam kome:", damDorKom);

let vaiVagMereDilo = damDorKom / 2;
console.log("jhere dilo sala:", vaiVagMereDilo);

let abbuKisuDilo = vaiVagMereDilo *= 3;
console.log("Khub khusi:", abbuKisuDilo);



/* <Name added> */

let firstName = "Rohul";
let lastName = "Amin";
let fullName = firstName + " " + lastName;
console.log("My name is:", fullName);


/* <To-Fixed using> */

let code1 = 0.1;
let code2 = 0.2;
let jogFoll = (code1 + code2);
let converPI = jogFoll.toFixed(1)
let convert = parseFloat(converPI);

console.log(convert);


/* <use if- else > */

let userId = "rohul669319@gmail.com";
let password = 1234567;


if (userId == "rohul669319@gmail.com" && password == 1234567) {
    console.log("Thanks for login");
}
else {
    console.log("Wrong Pass")
}
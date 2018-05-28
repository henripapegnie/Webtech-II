let number = prompt('geef een eerste getal in');
number = parseInt(number);

let number2 = parseInt(prompt('geef een tweede getal'));
number2 = parseInt(number2);

let sum = number + number2;

let text = `De som van ${number} en ${number2} is ${sum}`;

document.write(text);

//----------------------//

let i = 7;

console.log(i);
console.log(i++);
console.log(++i);

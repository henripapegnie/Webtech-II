// 1 uur = 3600 sec
let number = 7263; //Kommmagetal...
//Naar bendenen afronden
let amountHours = number / 3600; 
// Resultaat tonen 
amountHours = Math.floor(amountHours); 

// Hoeveel seconde blijven er over? 
console.log(amountHours);


let remainingSeconds = amountHours % 3600;
console.log ('Overgebleven seconden: ' + remainingSeconds);

let amountHours = Math.floor(remainingSeconds / 60);
console.log('Aantal minuten: ' + amountMinutes);
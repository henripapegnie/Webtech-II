/********************************************************************* 
* @author     Papegnie Henri
* @created    16/01/2017
* @modified   18/01/2016
* @copyright  Copyright © 2016-2017 Artevelde University College Ghent
* @function   Plaats hier -  een korte samenvatting van jouw script
*********************************************************************/

//geef een getal in 
let number = prompt('geef een getal');

// concatenation: voeg getal toe aan de string
let text ='het getal dat je invoerde was:' + number;

// hoe lang is het getal
let amountcharacters = number.length;

// gebruik makend van interpolatie om de vareable in de string te steken
let text2 = `Het getal is  ${amountcharacters} karakters lang`;

// breng het resultaat op het scherm 
document.write(text);
document.write('<br>');
document.write(text2);

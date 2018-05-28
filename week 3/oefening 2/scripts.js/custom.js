var popcorn = 3;
var hamburger = 4;
var donut = 10;

let imput1 = document.getElementById('result1');
let imput2 = document.getElementById('result2');
let imput3 = document.getElementById('result3');
let userSolution = document.getElementById('result4');

imput1.value = popcorn + popcorn + popcorn;
imput2.value = popcorn + hamburger + hamburger;
imput3.value = donut*2 + hamburger + donut*2;

let correctsolution = hamburger + donut * popcorn;

let checkButton = document.getElementById('check');

checkButton.addEventListener('click', function {
    if(correctsolution == userSolution.value) {

        alert("juist");
    }
    else{ 
        alert("fout");
    }
});
/*
let number=prompt("geef een getal in")

if(number%2==0) {
    document.write("even")
}
else{
    document.write("oneven")
}
*/



/*

let number = document.getElementById('getal');
let button = document.getElementById('evenOfOnevenKnop');

button.addEventListener('click',function(){

})

*/

let textveld = document.getElementById("getal");
let knop = document.getElementById("knop");

knop.addEventListener("click", function(){
    let getal = textveld.value;

    if(getal%2 == 0){
        alert("even getal");
    }
    else{
        alert("oneven");
    }
})

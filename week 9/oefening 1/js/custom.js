//stap1: knop en inputveld declareren
let btnSubmit = document.getElementById('storeMyMole');
let inputveld = document.getElementById('NameOfTheMole');

//stap2: click event zetten op de knop
btnSubmit.addEventListener('click', function(){
    //de mol uit het inputveld halen
    let mol = inputveld.value;

    //na een klik moet het in de local storgae opgeslagen worden
    localStorage.setItem('myMole', mol);

});
//stap 3: controleren of er een mol in de local storage zit? 
let stordMole = localStorage.getItem('myMole');
if (stordMole != null) {
    btnSubmit.style.display

}
let fruit = ["appel", "kiwi", "mango", "banaan", "peer"];
let veggies = ["tomato", "kiwi", "mango", "banaan", "peer"];


const showItems = function (arrayName){

    for(let i = 0; i < arrayName.length; i++){
    document.write(arrayName[i]+"<br>");};

}


showItems(veggies);

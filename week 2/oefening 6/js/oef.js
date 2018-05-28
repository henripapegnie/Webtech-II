
let getal = parseInt(prompt("getal????????"));

alert(zemmel(getal));

function zemmel(input){
    if(input<68 && input>50){
        return("voldoende");
    }
    else if(input>68 && input<77){
        return('onderscheiding');
    }
    else if(input>77 && input<100){
        return('kutje');
    }
    else{
        return('loser');
    }
}


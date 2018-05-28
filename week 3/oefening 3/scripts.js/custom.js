/*let plat = "_ _ _"
let berg = "/ ' ' '/"

document.write(plat + berg)*/

drawberg(3);
drawberg(5);
drawplat(37)
drawberg(9);

function drawberg(lengteB) {

    let i = 1;

    document.write('/');
    while(i<lengteB){
        document.write("'");
        i++;
    }
    document.write('\\')
}

function drawplat(lengteP){
    
    let i=1;

    document.write("___");
    while(i<lengteP){}
}
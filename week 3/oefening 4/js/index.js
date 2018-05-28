let boardsize = 8;

let board = '';

// LOOP

for(let y = 0;y < boardsize; y++){

    // x - as
    for(let x = 0; x < boardsize; x++){

    let rest = ( ( x + y ) % 2 );
    if(rest==0){
        board += '#';
    }
    else{
        board+= ' ';
        }          
       
        board +='#';

        //board = board + '#';

    }



    board += "\n"

}

console.log(board)
let anchortag, strongtag, spantag

anchortag=document.getElementsByTagName('a');
strongtag=document.getElementsByTagName('strong');
spantag=document.getElementsByTagName('span');

let linkelement = anchortag[0]

linkelement.addEventListener('mouseouver', function(){

    let firststrongtag = strongtag [0];
    firststrongtag.style.color = 'orange';

    strongtag[1].style.color = 'orange';

    for(let i = 0; 1 < spantag.lenght; i++){
        spantag[i].style.color = 'purple';
    }

});

linkelement.addEventListener('mouseover', function(){

     let firststrongtag = strongtag[0];
     firststrongtag.style.color = 'black';

})

let spinachelement = document.getElementById('spinach');
console.log(spinachelement);

spinachelement.style.color = 'FF00FF'
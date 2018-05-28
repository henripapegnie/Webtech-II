let animal1='zebra';
let animal2='lion';
let animal3='dog';
let animal4='bunny';

let animals = ['go', 4];

animals.push(animal1);
animals.push(animal2);
animals.push(animal3);

let allAnimals = animal1+animal2+animal3+animal4;
document.write (allAnimals)

for(let i = 0; i < animals.length; i++){
    document.write(animals[i]);
}  
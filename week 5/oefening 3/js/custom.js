let hond = {
    breed: 'doggo',
    name: 'jeroen',
    color:'brown',
    age: '14',
    gender: 'male',
    colorEyes: function(){
        return'brown'
    }
};

let Hond = function(breed, name, color, age, gender, colorEyes) {
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
    this.colorEyes = function() {
        return 'pink'
    };
    this.birthYear = function() {
        const currentYear = 2018;
        let birthYear = currentYear - this.age;
        return birthYear;
    }
}

let myFavouriteDog = new Hond('doggo', 'lisa' , 'pink', '45', 'male', 'green' );


document.write(myFavouriteDog.birthYear());

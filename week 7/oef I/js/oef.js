let buton =document.getElementById('btnMakeJoke');

let firstname = prompt('wat is je voornaam');
let lastname = prompt('wat is je achternaam');

const getJSON = function(url, callback) {
};


button.addEventListener('click', function() {

    const firstName = document.getElementById('firstNamefield').value;
    const lastName = document.getElementById('lastNamefield').value;

    const url = 'http://api.icndb.com/jokes/random?randomfirstname' + firstname + '&lastname' + lastname;

        getJSON(url, function(error, data) {

            document.write(data.value.joke);

    });

})

getJSON('http://api.icndb.com/jokes/random?randomfirstname' + firstname + '&lastname' + lastname, function(error, data) {
    console.log(data);

document.write(data.value.joke);

})
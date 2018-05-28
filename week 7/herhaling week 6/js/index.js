// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// get json data
getJSON('REPLACE-THIS-WITH-CORRECT-JSON-DATA-URL', function(error, data) {
    
    // show error
    if(error) {
        
        // do something here

        return false;
    }

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];

        // do magic here
    }
});
function initMap() {
    /** code om de kaart te initialiseren **/ 
}

google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
        
    const myHouseLatLng = {
        lat: 50.918900,
        lng: 3.568660,
    };
    
    const myStyles = [];

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myHouseLatLng,
        styles: myStyles
    });

    let marker = new google.maps.Marker({
        position: myHouseLatLng,
        map: map
    });

}


        


    

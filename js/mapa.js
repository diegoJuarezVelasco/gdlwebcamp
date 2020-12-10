function initMap() {
    // la ubicacion de donnies
    var donnies = {lat: 19.505567, lng: -99.162121};
    // El mapa centrado en donnies
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: donnies});
    // El marcardor, posicionado en el centro de donnies
    var marker = new google.maps.Marker({position: donnies, map: map, title: 'Donnies guitars'});
    marker.setAnimation(google.maps.Animation.BOUNCE);



}
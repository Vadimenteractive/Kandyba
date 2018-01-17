var map;
function initMap() {
    var mapCenter = {lat: 48.734374, lng: 37.579564},
        infoWindowContent = $('.info-window').html(),
    coworking = new google.maps.Map(
        document.getElementById('location-block'),
        {
        center: mapCenter,
        zoom: 17
        }
        ),
    marker = new google.maps.Marker(
        {
        position: mapCenter,
        map: coworking,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        }
    ),

    infowindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });


    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };
    marker.addListener('click', toggleBounce);
    marker.addListener('click', function() { // в апи гугл мапс слушатель событий addListener
        infowindow.open(coworking, marker);
    });

}

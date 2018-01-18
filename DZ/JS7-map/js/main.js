
function initMap() {
    var centerMap = {lat: 48.731302, lng: 37.581362},
        contentString = $('.info-window').html(),
        map = new google.maps.Map(document.getElementById('map'), {
        center: centerMap,
        zoom: 14
    }),
        marker = new google.maps.Marker({
            position: centerMap,
            map: map,
            animation: google.maps.Animation.BOUNCE, //BOUNCE или DROP
            //label: 'F', // символ внутри маркера
            icon: {
                url: "bubble-icon.png",
                scaledSize: new google.maps.Size(64, 64)
            },
            title: 'Go to Church!!!'
        }),
        infowindow = new google.maps.InfoWindow({
            content: contentString
        });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
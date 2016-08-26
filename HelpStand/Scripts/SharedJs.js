src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA5eIMIz70uYCWoXdLznCZt_Ij-c2ImiG8&callback=initMap";

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(59.3173096, 18.1141274),
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            streetViewControl: false,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        google.maps.event.addListener(map, 'click', function (event) {
            placeMarker(event.latLng);
        });

        function placeMarker(location) {
            var marker = new google.maps.Marker({
                position: location,
                map: map,
            });

            var infowindow = new google.maps.InfoWindow;
            google.maps.event.addListener(marker, 'click', function () {

                infowindow.setContent('<p style="font-size:22">Rädda barnen</p>' + '<p>Donera via Swish till nummer 073 93 151 46</p>' + '<button class="btn btn-default" id="editBtn">Edit</button>');
                infowindow.open(map, this);

                map.setZoom(16);
                map.setCenter(marker.getPosition());
                $('#editBtn').click(myFunction);
                //$('#editBtn').click(function () {
                //    //window.scrollBy(0, 180, 'slow');
                //    //$('html, body').animate({
                //    //    scrollTop: $("#editFrm").offset().bottom
                //    //}, 1000);
                //    alert("OK");
                //    //    $('html,body').animate({
                //    //        scrollTop: $(".second").offset().top},'slow');
                //    //});
                //});
                google.maps.event.addListener(infowindow, 'closeclick', function () {
                    map.setZoom(11);
                });

            });
        }


    }

google.maps.event.addDomListener(window, 'load', initialize);

//$('.editBtn').attr('id', 'editBtn');
//$('#editBtn').click(function () {
//    alert("Handler for .click() called.");
//});
function myFunction() {
    $('.container').animate({
        scrollTop: $("#editFrm").offset().bottom
    }, 1000);
}

'use strict';

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13
    });
    
    var geocoder = new google.maps.Geocoder();

    var input = document.getElementById('search-maps-input'),
        searchRequest = null,
        minLength = 3;
    
    var loading = $('#loader-operations, #overlay-operations');
    
    input.addEventListener('keypress', function (e) {
        
        if (e.keyCode == 13) {
            
            loading.fadeIn();
            
            e.preventDefault();
            
            searchRequest = true;
            
            var address = this.value,
                evt = e;
            
            geocoder.geocode({ 'address': address }, function(results, status) {

                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location);
                    searchRequest = null;
                    loading.delay(0.3).fadeOut();
                } else {
                    loading.fadeOut();
                    alert('Geocode was not successful for the following reason: ' + status);
                }

            });            
        }

    })
    
    var _html = '<a href="#" id="open-places-btn"></a><div class="place-list-w"><div class="place-list"><h2>Store list</h2><ul></ul></div></div>';
    var _div = document.createElement('div');

    _div.classList.add('store-lst');
    _div.innerHTML = _html;
    _div.className += ' active';

    google.maps.event.addListenerOnce(map, 'idle', function(){
        var mapIn = document.querySelector('.gm-style');
        mapIn.appendChild(_div);        
    });
    
    geocodeAddress(geocoder, map, _div);
    
}

var address = document.getElementById('_addresses').getElementsByTagName('SPAN'),
    index = 0,
    markerUrl = 'http://i.stack.imgur.com/JWM0W.png',
    bigMarkerUrl = 'http://skinnyfishmusic.com.au/wp-content/themes/musicplay/images/gmap_marker.png',
    loadingSecond = $('#loader-operations, #overlay-operations');

function geocodeAddress(geocoder, resultsMap, _div) {

    loadingSecond.fadeIn();
    loadingSecond.css('z-index', '999');
    
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        labelIndex = 0,
        cont = _div;

        if (index >= address.length) {
            loadingSecond.fadeOut();
            return false;
        }
    
        geocoder.geocode({ 'address': address[index].innerHTML }, function(results, status) {

            if (status === 'OK') {

                var mapTitle = document.getElementById('_addresses').getElementsByTagName('STRONG')[index],
                    contact = document.getElementById('_addresses').getElementsByTagName('EM')[index];

                /* Código responsável pelos markers */
                resultsMap.setCenter(results[0].geometry.location);

                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location,
                        title: mapTitle.innerText,
                        label: labels[labelIndex++ % labels.length]
                    });

                    //marker.setIcon(markerUrl);

                    var markerInfoWindow = '<div class="marker-detail"><h2>' + marker.title + '</h2><p>'+ results[0].formatted_address +'</p><a href="" class="btn-directions">Obter direções</a></div>';

                    var infoWindow = new google.maps.InfoWindow({
                        content: markerInfoWindow
                    });

                    marker.addListener('click',function(){
                        resultsMap.setCenter(marker.getPosition());
                        infoWindow.open(map, marker);
                    });

                    marker.addListener('mouseover',setBigIcon);
                    marker.addListener('mouseout',setDefaultIcon);

                    var _li = document.createElement('li');

                    _li.innerHTML = '<a href=""><h3>' + marker.title + '</h3><p>' + results[0].formatted_address + '</p> <p>' + contact.innerText + '</p></a>';
                    _div.querySelector('ul').appendChild(_li);

                    var link = _li.firstChild;

                    link.addEventListener('click',function(e){
                        e.preventDefault();
                        resultsMap.panTo(marker.getPosition());                        
                    });
                    link.addEventListener('mouseover',setBigIcon.bind(marker));
                    link.addEventListener('mouseout',setDefaultIcon.bind(marker));
                
                    index++;
                
                    geocodeAddress(geocoder, resultsMap, _div);

            } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                setTimeout(function (){
                    geocodeAddress(geocoder, resultsMap, _div);   
                }, 100)
            } else {                
                if (index < address.length) {
                    setTimeout(function (){
                        index++;
                        geocodeAddress(geocoder, resultsMap, _div);   
                    }, 100)                    
                }
                else {
                    loadingSecond.fadeOut();
                    console.log('Geocode was not successful for the following reason: ' + status);
                }
            }
        });         
   // }
    
    function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    
    function setDefaultIcon(marker){
        this.setIcon(markerUrl);
    } 
    
    function setBigIcon(marker){
        this.setIcon(bigMarkerUrl);
    }
}
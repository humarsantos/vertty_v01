'use strict';

var Stores = [
    {
        name: 'BANA SURF SHOP',
        address: 'Estrada De Sassoeiros, Lote 3 - Loja Dta., 2775-530',
        lat: 38.6985832,
        lng: -9.3300638
    },
    {
        name: 'El Corte Ingles - Lisboa',
        address: 'Av. António Augusto de Aguiar 31, Lisboa',
        lat: 38.7330827,
        lng: -9.1535102
    },
    {
        name: 'El Corte Ingles - Porto/Gaia',
        address: 'Av. da República 1435, 4430-999, Lagos',
        lat: 37.1046775,
        lng: -8.6842351
    },
    {
        name: 're-mind area Lda',
        address: 'Rua Adão Manuel Ramos Barata N 2-A1 Bloco 2 3 A, 1885-100',
        lat: 38.7816136,
        lng: -9.101544
    },
    {
        name: 'Ericeira surf shop',
        address: 'ALMADA FORUM - LOJA 1.73 - CAMINHO MUNICIPAL 1111 - VALE DE MOURELES, 2810-354',
        lat: 38.6601285,
        lng: -9.1752603
    },
    {
        name: 'A Desconfiada Unipessoal Lda',
        address: 'Avenida Nossa Senhora Da Alegria N 11 5 Dt, 3800-407,Aveiro',
        lat: 40.6471439,
        lng: -8.6442487
    },
    {
        name: 'CAIS À PORTA',
        address: 'Cais das Falcoeiras nº6 3800-180 Aveiro',
        lat: 40.640506,
        lng: -8.653754
    },
    {
        name: 'B CONCEPT',
        address: 'Rua de S. João 15 4700-325 Braga',
        lat: 41.550022,
        lng: -8.426295
    },
    {
        name: 'Granadilla Swim',
        address: 'Cape Town',
        lat: -33.9248685,
        lng: 18.4240553
    },
    {
        name: 'Ericeira surf shop',
        address: 'CASCAISHOPPING, LOJA 0.047 - ESTRADA NACIONAL 9, 2645-543 ALCABIDECHE',
        lat: 38.738205,
        lng: -9.399435
    },
    {
        name: 'THE OITAVOS HOTEL',
        address: 'Rua de oitavos, Quinta da Marinha, 2750-374 Cascais',
        lat: 38.7036785,
        lng: -9.4672991
    },
    {
        name: 'Ericeira surf shop',
        address: 'FORUM COIMBRA - AV. JOSÉ BONIFÁCIO DE ANDRADE E SILVA, NO1, LOJA 0.56- 3044-520',
        lat: 40.2114837,
        lng: -8.4420918
    },
    {
        name: 'Ericeira surf shop',
        address: 'RUA PRUDÊNCIO FRANCO DA TRINDADE, 21, 2655-344 ERICEIRA',
        lat: 38.9635353,
        lng: -9.4168763
    },
    {
        name: 'Ericeira surf shop',
        address: 'FORUM ALGARVE- LJ. 1.28 - ESTRADA NACIONAL 125, 8000-126 FARO',
        lat: 37.028276,
        lng: -7.9450065
    },
    {
        name: 'Ericeira surf shop',
        address: 'ALGARVE SHOPPING - LOJA 0158 - LOTE R, FRACÇÃO 3 TAVAGUEIRA GUIA, 8200-4170',
        lat: 37.1278076,
        lng: -8.2801506
    },
    {
        name: 'Ericeira surf shop',
        address: 'RUA LIMA LEITÃO, NO 27 - 8600-748 LAGOS',
        lat: 37.1022053,
        lng: -8.6726252
    },
    {
        name: 'Capicua',
        address: 'RUA DA PRATA Nº15, 1100-413 LISBOA',
        lat: 38.7099454,
        lng: -9.1366385
    },
    {
        name: 'Ericeira surf shop',
        address: 'C C VASCO DA GAMA, LJ. 2095 - AV. D. JOÃO II, LT 1 .05.02, 1990-094',
        lat: 38.7677648,
        lng: -9.0968507
    },
    {
        name: 'Ericeira surf shop',
        address: 'MAR SHOPPING, LOJA 0112 - AV. ÓSCAR LOPES - LEÇA , 4450-337',
        lat: 41.2079462,
        lng: -8.6864033
    },
    {
        name: '58 Peniche (Despomar)',
        address: 'SOL VILLAGE 1 - R. INFANTE D. HENRIQUE, LOTE 4, LOJA 1 - R/C, 2520-101 FERREL',
        lat: 39.364046,
        lng: -9.33688
    },
    {
        name: 'VERAO AGITADO',
        address: 'Urbanização Encosta Do Arade Lote B 11 3 Dt, 8400-669',
        lat: 37.1731605,
        lng: -8.4553934
    },
    {
        name: 'ALGARVE SURF SCHOOL',
        address: 'Rua comandante Matoso, 8650-367',
        lat: 37.008564,
        lng: -8.9371611
    },
    {
        name: 'SAGRES NATURA SURF SHOP',
        address: 'Rua São Vicente',
        lat: -30.0405795,
        lng: -51.1991769
    },
    {
        name: 'WAVESENSATIONS',
        address: 'AVENIDA COMANDANTE MATOSO 8650-357 - SAGRES',
        lat: 37.0088739,
        lng: -8.9356825
    },
    {
        name: 'Wu do Surf School Lda',
        address: 'Rua Comandante Matoso s/n 8650-357 Sagres',
        lat: 37.008564,
        lng: -8.9371611
    },
    {
        name: 'SURFMILFONTES,LDA',
        address: 'Rua António Mantas n41, 7645-221 Vila Nova de Milfontes',
        lat: 37.7262407,
        lng: -8.7821159
    },
    {
        name: 'Blue bottom pools supply',
        address: '11416 RR 620 North, Suite J, Austin, Texas 78726',
        lat: 30.4531632,
        lng: -97.8282206
    }
];

var nearStores = [];
        
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    labelIndex = 0,
    index = 0,
    markerUrl = 'http://i.stack.imgur.com/JWM0W.png',
    bigMarkerUrl = 'http://skinnyfishmusic.com.au/wp-content/themes/musicplay/images/gmap_marker.png';


function initMap() {
    
    var findAddress = {
        name: 'Baixa-chiado',
        lat: 0,
        lng: 0
    };
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12
    });
    
    var geocoder = new google.maps.Geocoder(),
        input = document.getElementById('search-maps-input'),
        loading = $('#loader-operations, #overlay-operations');

    var _html = '<a href="#" id="open-places-btn"></a><div class="place-list-w"><div class="place-list"><h2>Nearby Stores</h2><ul></ul></div></div>';
    
    var _div = document.createElement('div');

    input.addEventListener('keypress', function (e) {
        
        if (e.keyCode == 13) {
            
            loading.fadeIn();
            
            e.preventDefault();
            
            _div.innerHTML = _html;
            
            geocodeAddress({ name: this.value }, geocoder, map, _div);
            
            loading.fadeOut();
        }
     
    });

    _div.className = 'store-lst';
    _div.innerHTML = _html;
    _div.className += ' active';

    google.maps.event.addListenerOnce(map, 'idle', function(){
        var mapIn = document.querySelector('.gm-style');
        mapIn.appendChild(_div);        
    });
    
    geocodeAddress(findAddress, geocoder, map, _div);
}

function geocodeAddress(findAddress, geocoder, map, _div) {
    
    geocoder.geocode({ 'address': findAddress.name }, function(results, status) {

        if (status == 'OK') {
            findAddress.lat = results[0].geometry.location.lat();
            findAddress.lng = results[0].geometry.location.lng();

            map.setCenter(results[0].geometry.location);

            verifyStores(findAddress, map, _div);

        } 
        else {            
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function verifyStores (address, map, _div) {
    
    if (index < Stores.length-1 && nearStores.length < 5) {
        
        var p1 = new google.maps.LatLng(address.lat, address.lng);
        var p2 = new google.maps.LatLng(Stores[index].lat, Stores[index].lng);
        var distance = google.maps.geometry.spherical.computeDistanceBetween(p1,p2);  
        
        if (Number((distance/1000).toFixed(2)) <= 50 ) {
            
            var marker = new google.maps.Marker({
                map: map,
                position: { lat: Stores[index].lat, lng: Stores[index].lng },
                title: Stores[index].name,
                label: labels[labelIndex++ % labels.length]
            });
            
            marker.setIcon(markerUrl);

            var markerInfoWindow = '<div class="marker-detail"><h2>' + marker.title + '</h2><p>'+ Stores[index].name +'</p><a href="" class="btn-directions">Obter direções</a></div>';

            var infoWindow = new google.maps.InfoWindow({
                content: markerInfoWindow
            });

            marker.addListener('click',function(){
                map.setCenter(marker.getPosition());
                infoWindow.open(map, marker);
            });

            marker.addListener('mouseover',setBigIcon);
            marker.addListener('mouseout',setDefaultIcon);
            
            var listItem = document.createElement('li');

            listItem.innerHTML = '<a href=""><h3>' + marker.title + '</h3><p>' + Stores[index].name + '</p></a>';
            _div.querySelector('ul').appendChild(listItem);  

            var link = listItem.firstChild;

            link.addEventListener('click',function(e){
                e.preventDefault();
                map.panTo(marker.getPosition());                        
            });
            link.addEventListener('mouseover',setBigIcon.bind(marker));
            link.addEventListener('mouseout',setDefaultIcon.bind(marker));
            
            nearStores.push(Stores[index].address);    
        }   
        
        index++;
        verifyStores(address, map, _div);
    }
    else {
        index = 0;
        
        if (nearStores[0] == undefined && nearStores.length == 0) {
            
            var noItem = document.createElement('li');

            noItem.innerHTML = "<a href='#'><h3 class='not-found'>We couldn't found a nearby store</h3><p>Please, search another location.</p></a>";
            _div.querySelector('ul').appendChild(noItem);
        }
        
        nearStores = [];
    }
    
}

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
// Código JavaScript aqui
// Você pode começar adicionando interatividade à sua página

        // Funções para incrementar e decrementar a quantidade
    function adicionar(id) {
        var quantityInput = document.getElementById('quantity'+id);
        var quantityValue = parseInt(quantityInput.value, 10);
        quantityInput.value = quantityValue + 1;
    }

    function retirar(id) {
        var quantityInput = document.getElementById('quantity'+id);
        var quantityValue = parseInt(quantityInput.value, 10);
        
        // Certifique-se de que a quantidade não seja menor que 1
        if (quantityValue > 1) {
            quantityInput.value = quantityValue - 1;
        }
    }

    function initMap() {
        var iplLatLng = {lat: 39.735129, lng: -8.820732}; // Coordenadas aproximadas do Instituto Politécnico de Leiria
    
        var map = new google.maps.Map(document.getElementById('map'), {
            center: iplLatLng,
            zoom: 15
        });
    
        var marker = new google.maps.Marker({
            map: map,
            position: iplLatLng,
            title: 'Instituto Politécnico de Leiria (IPL)'
        });
    }
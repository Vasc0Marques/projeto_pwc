$(document).ready(function(){
    const apiKey = 'DeCi0vhv8XcKF9EDnIZ0AoRchkXpP0TcJieIEwU7iwIfR7Vr44';
    const apiUrl = 'https://api.petfinder.com/v2/animals?type=dog&pages=3'; // Vamos buscar 3 páginas de animais
    const numAnimalsToShow = 15; // Número de animais a serem exibidos
    const placeholderImageUrl = 'placeholder.jpg';
    const urlParams = new URLSearchParams(window.location.search);
    const animalId = urlParams.get('id');
    


    // Obtenha um token de acesso usando suas credenciais
    $.ajax({
        type: 'POST',
        url: 'https://api.petfinder.com/v2/oauth2/token',
        data: {
            grant_type: 'client_credentials',
            client_id: apiKey,
            client_secret: '4CuOoW0ZAYfywxOAmbIPz6kTLoOk1foJob8tWiaG'
        },
        success: function(response) {
            const accessToken = response.access_token;

            // Faça a solicitação real usando o token de acesso
            $.ajax({
                type: 'GET',
                url: apiUrl + animalId,
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                dataType: 'json',
                success: function(data) {
                    var animals = data.animals.slice(0, numAnimalsToShow); // Limita o número de animais

                    displayPetCards(animals);
                },
                error: function(request, error) {
                    console.error('Erro na solicitação:', error);
                }
            });
        },
        error: function(request, error) {
            console.error('Erro na obtenção do token de acesso:', error);
        }
    });

    function displayPetCards(animals) {
        var petCardsContainer = $('#petCards');

        animals.forEach(function(animal) {
            var cardHTML = '<a href="detalhes.html?id=' + animal.id + '" class="card">';
            
            // Verifica se 'animal.photos' existe e tem pelo menos uma foto
            if (animal.photos && animal.photos.length > 0) {
                // Escolha a primeira imagem disponível (pode ser ajustado conforme necessário)
                var imageUrl = animal.photos[0].large || animal.photos[0].medium || animal.photos[0].small;
                cardHTML += '<img src="' + imageUrl + '" alt="' + animal.name + '" style="max-width: 80%;">';
            } else {
                cardHTML += '<img src="placeholder.jpg" alt="Imagem não disponível">';
            }

            cardHTML += '<h2>' + animal.name + '</h2>';
            cardHTML += '<h4>' + animal.age + '</h4>';
            
            cardHTML += '</a>';

            petCardsContainer.append(cardHTML);
        });
    }
});
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

    function adicionar(id) {
        var quantityInput = document.getElementById('quantity'+id);
        var quantityValue = parseInt(quantityInput.value, 10);
        quantityInput.value = quantityValue + 1;
    }

    function retirar(id) {
        var quantityInput = document.getElementById('quantity'+id);
        var quantityValue = parseInt(quantityInput.value, 10);
        
        if (quantityValue > 1) {
            quantityInput.value = quantityValue - 1;
        }
    }

    function initMap() {
        var iplLatLng = {lat: 39.735129, lng: -8.820732}; 
    
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

    function adjustSelector() {
        var tabsNewAnim = $('.navbar');
        var selectorNewAnim = $('.navbar').find('li').length;
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $(".navbar").on("click", "li", function (e) {
            $('.navbar ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }
    
    $(document).ready(function () {
        setTimeout(function () {
            adjustSelector();
        });
    });
    
    $(window).on('resize', function () {
        setTimeout(function () {
            adjustSelector();
        }, 500);
    });
    
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").slideToggle(300);
        setTimeout(function () {
            adjustSelector();
        });
    });
    
    // Add active class to the current page link
    jQuery(document).ready(function ($) {
        var path = window.location.pathname.split("/").pop();
        if (path === '') {
            path = 'index.html';
        }
        var target = $('.navbar ul li a[href="' + path + '"]');
        target.parent().addClass('active');
    });
    
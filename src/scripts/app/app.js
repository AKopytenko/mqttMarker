//include('./src/static/broker.js');

function valid(input, mask) {
    if(input !== 'undefined') {
        let inputVal = input.val();
        if(inputVal.length) {
            switch(mask) {
                case 'coords':
                    if( /^-?\d{1,3}\.\d{0,6}$/.test(inputVal) && inputVal <= 180 && inputVal >= -180 )
                        return true;
                    return false;
                default:
                    if( /^[A-Za-zА-Яа-я\d\s\.]{3,75}$/.test(inputVal) )
                        return true;
                    return false;
            }
        }
    }
    return false;
}

$(function() {
    
    $('#pointX, #pointY').focusout(function() {
        if( valid($(this), 'coords') ) {
            $(this).removeClass('invalid');
        } else {
            $(this).addClass('invalid');
        }
    });

    $('#pointName').focusout(function() {
        if( valid($(this)) ) {
            $(this).removeClass('invalid');
        } else {
            $(this).addClass('invalid');
        }
    });

    // Yandex.maps
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.849004, 37.544095],
            zoom: 15,
            controls: ['zoomControl', 'geolocationControl', 'typeSelector']
        });
    }
    ymaps.ready(init);
});
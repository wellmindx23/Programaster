//almacenar slider en una variable
var slider = $('#slider');

//almacenar botones en variables
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//cambio de ultima imagen a primer lugar

$('#slider section:last').insertBefore('#slider section:first');
//mostrar primer imagen como menos de 100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
    slider.animate({marginLeft:'-'+200+'%'} ,700, function(){
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left', '-'+100+'%');
    });
}

function moverI() {
    slider.animate({marginLeft:0} ,700, function(){
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left', '-'+100+'%');
    });
}

siguiente.on('click', function() {
    moverD();
});

anterior.on('click', function() {
    moverI();
});

//movimiento automático

function autoplay(){
    interval = setInterval(function(){
        moverD();
    }, 5000);
}

autoplay();
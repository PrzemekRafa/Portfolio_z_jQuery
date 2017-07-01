'use strict';

$(document).ready(function(){

    bckgrndShow();
    
});

$(window).scroll (function () {
    
    bckgrndShow();
    
});
        
var navHeight = $('#menu').height();
var currentPosition = $(window).scrollTop();

function bckgrndShow (){
    if ( $(window).scrollTop() > navHeight) {
        $('#menu').addClass('menu_temp');
    } else {
        $('#menu').removeClass('menu_temp');
    }
};

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - navHeight
    }, 500);
});
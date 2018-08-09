$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('.navbar').addClass('nav-scroll-style');
        }
        if($(this).scrollTop() < 50){
            $('.navbar').removeClass('nav-scroll-style');
        }
    });
});
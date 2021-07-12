document.querySelector('.botom').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show')
});
$(document).ready(function(){
	var altura = $('.container').offset().top;
    $(window).on('scroll',function(){
        if ($(window).scrollTop()>altura){
            $('.container').addClass('container-fixed');
        } else {
            $('.container').removeClass('container-fixed');
        }
    });
});
ScrollReveal().reveal('.container', {delay:100});
ScrollReveal().reveal('.titulo', {delay:100});
ScrollReveal().reveal('.quienessomos', {delay:300});
ScrollReveal().reveal('.titulo1', {delay:330});
ScrollReveal().reveal('.galeria-servi', {delay:350});
ScrollReveal().reveal('.servicios', {delay:380});
ScrollReveal().reveal('.nuestros-clientes', {delay:380});
ScrollReveal().reveal('.cotenerdor-footer', {delay:380});
ScrollReveal().reveal('.copyrigth', {delay:380});

$(function(){
    $('#main_nav ul').css({
    right:-$('#main_nav ul').width()
});
$('#main_nav').hide();
$('#nav_toggle').click(function(){
    $('#main_nav').fadeIn(500);
    $('#main_nav ul').animate({
        right:0
    },500);
});
$('#main_nav .close').click(function(){
    $('#main_nav').fadeOut(500);
    $('#main_nav ul').animate({
        right:-$('#main_nav ul').width()
    },500);
});
$('#main_nav .depth1').click(function(){
            $('.depth2').slideToggle();
        });

});


//header 끝

$('.img, .con').css({
top:200,
opacity:0
});


$(window).scroll(function(){
    let sct = $(window).scrollTop();
    $('.scroll_view').each(function(index,item){
        if($(item).offset().top - sct < 400){
            $(item).find('.con').not('.on').delay(300).animate({
                top:0,
                opacity:1
            },900).addClass('on');
            $(item).find('.img').not('.on').animate({
                top:0,
                opacity:1
            },900).addClass('on');
        }
    });
});
$(window).scroll();
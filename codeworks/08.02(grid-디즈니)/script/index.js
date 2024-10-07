
$('.menu-icon').click(function(){
    $(this).fadeOut()
    $('header').addClass('on')
    $('.section').addClass('on')
})

$('ul.menu li').click(function(){
    $('ul.menu li').removeClass('on')
    $(this).addClass('on')
    $('.menu-icon').fadeIn()
    $('header').removeClass('on')
    $('section').removeClass('on')
    let idx=$(this).index()
    $('body').removeClass()
    $('body').addClass('bg'+idx)
    $('article').removeClass('on')
    $('article').eq(idx).addClass('on')
})
$('.btn1').click(function () {
    $('#sect1').show()
    lineShow()
    mainHide()
})
$('.btn1close').click(function () {
    lineHide()
    mainShow()
    $('#sect1').hide()
})
$('.btn2close').click(function () {
    lineHide()
    $('#sect2').animate({ 'height': '0' }, function () {
        $('#sect2').hide()
    })

})


$('.btn2').click(function () {
    $('#sect2').show()
    $('#sect2').animate({ 'height': '400px' })
})
function lineShow() {
    $('.top').animate({ 'width': '100%' }, function () {
        $('.right').animate({ 'height': '100%' }, function () {
            $('.bottom').animate({ 'width': '100%' }, function () {
                $('.left').animate({ 'height': '100%' }, function () {
                    $('.sect1-contants').fadeIn()
                })
            })
        })
    })
}


function lineHide() {
    $('.top').animate({ 'width': '0' })
    $('.right').animate({ 'height': '0' })
    $('.bottom').animate({ 'width': '0' })
    $('.left').animate({ 'height': '0' }, function () {
        $('.sect1-contants').fadeOut()
    })
}



function mainHide() {
    $('.video').animate({ 'top': '-1000px' })
    $('.menu').animate({ 'top': '1000px' })
    // $('.main-visual').animate({'right':'-1000px'})
    $('.main-visual').addClass('on')
}
function mainShow() {
    $('.video').animate({ 'top': '0' }, (2000))
    $('.menu').animate({ 'top': '0' }, (2000))
    // $('.main-visual').animate({'right':'-1000px'})
    $('.main-visual').removeClass('on')
}


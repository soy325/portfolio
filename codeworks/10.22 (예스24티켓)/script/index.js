
$('.tab-menu li').click(function (e) {
    e.preventDefault()
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    // $('.tab').hide()
    // $('.tab').eq(idx).show()
    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on')

})
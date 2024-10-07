// $('.friend li a').click(function (e) {
//     e.preventDefault()
//     $('.friend li a').removeClass('on')
//     $(this).addClass('on')

//     let href = $(this).attr('href')
//     $('article').removeClass('on')
//     $(href).addClass('on')
// })

// let idx=$(this).index()
// $('article').hide()
// $('article').eq(idx).show()})

const aElems = document.querySelectorAll('.friend li a')
// console.log(aElems);
aElems.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        aElems.forEach(function (a) {
            a.classList.remove('on')
        })
        this.classList.add('on')
        let href = this.getAttribute('href')
        // alert(href)
        document.querySelectorAll('article').forEach(function (art) {
            art.classList.remove('on')
            document.querySelector(href).classList.add('on')
        })
    })

})
function bannerRotate() {
    $(''.rotate).animate({ 'rotate': '+=10deg' }, '50','linear' )
}
let = stopId
$('quick').mouseenter(function () {
    stopId = setInterval(bannerRotate, 50)
})
$('quick').mouseleave(function () {
    $('.rotate').stop(1,0)
    clearInterval(stopId)
})
var swiper1 = new Swiper(".slide1", {
    effect: "fade",
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteration: false,
    }
})

// manu
$('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().slideUp()
})
// 버튼 클릭 해당번째 슬라이드 show
// $('menu ul li').click(function (e) {
//     e.preventDefault()
//     let idx = $(this).index()
//     $('menu ul li').removeClass('on')
//     $(this).addClass('on')
//     swiper.slideTo(idx, 500) // 해당 슬라이드 번째 보여줘
// })

// li 모두를 가져와라
// const liElems = document.querySelectorAll('.menu ul li')
const liElems = document.querySelectorAll('.menu ul li')
console.log(liElems);
// 모든 li를 대상으로 ~ 각각 li요소
liElems.forEach(function (liElem, idx) {
    // console.log(liElem,idx);
    // 각각 li
    liElem.addEventListener('click', function (e) {
        e.preventDefault()
        // 모든 li
        liElems.forEach(function (item) {
            item.classList.remove('on')
        })
        // 각각 활성화
        liElem.classList.add('on')
        console.log(idx)
        swiper1.slideTo(idx, 500)
    })

})

// 해당 슬라이드에 맞는 메뉴 활성화
// swiper1.on('slideChange', function () {
//     let activeIndex = swiper1.activeIndex
//     console.log(activeIndex);
// 모든 네비 활성화

// // 해당 번째 네비 활성화
// $('.menu ul li').removeClass('on')
// $('.menu ul li').eq(activeIndex).addClass('on')
// })

swiper1.on('slideChange', function () {
    let activeIndex = swiper1.activeIndex
    liElems.forEach(function (item) {
        item.classList.remove('on')
    })
    liElems[activeIndex].classList.add('on')

})
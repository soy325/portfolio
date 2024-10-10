const sections = document.querySelectorAll('section')
const footer = document.querySelector('footer')
const sectLast = sections[sections.length - 1]
const sectLastTop = sectLast.offsetTop

sections.forEach((sect, i) => {
    // 기본 마우스 스크롤 이벤트를 막음
    sect.addEventListener('wheel', function (e) {
        e.preventDefault()
        // delta는 마우스 휠 스크롤을 제어하는 것
        let delta = e.deltaY
        // wheel을 내리면 +값이 발생하고 올리면 -값이 발생되도록 
        if (delta < 0 && i === 0) {
            // 해당 조건에 도달하면 명령 loop를 빠져나가라
            return
            // length는 객체의 길이(높이)를 구하는 것
            // 배열에 index는 [0,1,2,3,4,--]로 계산되기 때문에 -1을 하여 숫자를 맞추어 주어야함.
        } 
         if (delta > 0 && i === sections.length - 1) {
            // footer을 찾아가기 위해 scrollIntoview 사용
            // footer은 return 다음으로 오면 안됨 
            footer.scrollIntoview({ behavior: 'smooth' })
            return
        }
        // 3항 연산자 : 조건식 ? 참 : 거짓
        let secTop = delta < 0 ?
            sect.previousElementSibling : sect.nextElementSibling
        if (secTop) {
            let targetsecTop = secTop.offsetTop
            window.scrollTo({
                top: targetsecTop,
                behavior: 'smooth'
            })
        }
    })
})

// console.log(document.body.scrollheight);

// 전제 문서에 길이 페이지 전체가 3000
// console.log(document.body.scrollheight);
// 사용자가 스크롤(scrollY)을 2000까지 내림
// 사용자의 화면 높이(window.height)는 1000
// 2000+1000

// 마지막 페이지에서 스크롤을 위로 올릴 때 바로 위에 있는 페이지로 이동하게 하는 것

window.addEventListener('wheel', function (e) {
    if (e.deltaY < 0 && this.window.innerHeight + window.scrollY >= document.body.scrollheight - 10)
        e.preventDefault()
    window.scrollTo({ top: sectLastTop, behavior: 'smooth' })
})

// menu
$('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').fadeIn()
})
$('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').fadeOut()
})

// menu-bar
function myFunction(x) {
    x.classList.toggle("change");
  }

// menu-bar
$('.menu').click(function(){
    $('nav').slideToggle(1000)
})

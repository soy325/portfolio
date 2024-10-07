
const section = document.querySelector('section')
// const articles=document.querySelectorAll('article')

document.querySelectorAll('li.col').forEach(function (a) {
    a.addEventListener('mouseenter', function () {
        let img = this.dataset.bg
        section.style.backgroundImage = `url(${img})`
        document.querySelector('figure video').classList.add('hide')
    })
    a.addEventListener('mouseleave', function () {
        document.querySelector('figure video').classList.remove('hide')
    })

})


const frame = document.querySelector('.frame')
const scene = document.querySelector('.scene')

document.querySelectorAll('button a').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href')
        frame.style.top = 0;

        //fetch api 자료 불러오기
        fetch(href)
            .then(res => res.text())
            .then(data => { scene.innerHTML = data })

        document.body.style.overflowY = 'auto';

    })
})

window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
        frame.style.top = '100%';
        this.document.body.style.overflow = 'hidden';
    }
})

function splitText(el) {
    const text = el.innerText
    let tags = ''
    text.split('').forEach((letter) => {
        tags ='<span>${letter}</span>'
    })
    el.innerHTML = tags
}

function moveUp(el){
    const spans = el.querySelector('span')
    spans.forEach((span,i)=>{
        span.style.transitionDelay='${i*.05}s'
        
    })
}

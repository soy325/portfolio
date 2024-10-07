function myFunction(x) {
    x.classList.toggle("change");
  }
// header-menu
  $('.menu-bar').click(function () {
    $('.menu').slideToggle(1000)
})
  $('.login-icon').click(function () {
    $('.login').slideToggle(1000)
})

/////////////////////////////////////////////////

// 버튼활성화
$('.product-item').each(function(){
$(this).find('li').first().addClass('on')
})

// 첫번째 상품페이지만 보이게 하는 것(맨 위에 있는 하나만 읽음)
// $('.product-detail').each(function(){
//  $(this).find('>li').first().siblings().css('display','none')
 
// })

// 버튼 누를 때 상세페이지가 바뀜
$('.product-item > li a').click(function (e) {
            e.preventDefault()
            let productImg = $(this).attr('href') 
            $(this).closest('.product').find('figure img').attr('src', productImg)


// 버튼 활성화
 $(this).parent().siblings().removeClass('on')
 $(this).parent().addClass('on')


  // 해당상품 설명 보여줘
let i=$(this).parent().index()
$(this).closest('.product-item').prev().find('>li').hide()
$(this).closest('.product-item').prev().find('>li').eq(i).show()
})

// 버튼누르면 main-title도 함께 바뀌는 것
$('.product-summary').each(function(){
  $(this).find('li').first().siblings().hide()
})
$('.product-item li').click(function (e) {
  e.preventDefault()
   let idx=$(this).index()
 
    $('.product-summary li').hide()
    $('.product-summary li').eq(idx).show()

})
// ////////////////////////////////////////////////////////////

// 버튼 누르면 슬라이드 (다른 버튼을 누르면 자동으로 닫히는 것까지)
$('.more').click(function () {
let $this=$(this)
let $productMore=$this.parent().next('.product-more')

if($this.hasClass('on')){ 
$this.removeClass('on')
$productMore.slideUp()

} else{
$('.more').removeClass('on')
$('.product-more').slideUp()

$(this).addClass('on')
$productMore.slideDown()
}
})


$('.product-summary').each(function(){
  $(this).find('li').first().siblings().hide()
})
$('.product-item li').click(function (e) {
  e.preventDefault()
   let idx=$(this).index()
 
    $('.product-summary li').hide()
    $('.product-summary li').eq(idx).show()

})

$('.product-color').click(function(e){
e.preventDefault()
})
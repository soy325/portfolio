$('button.next').click(function(){
    $('.hslide-wrap').stop().animate({'left': '-200%'},function(){
        $('.hslide').first().appendTo('.hslide-wrap')
        $('.hslide-wrap').css({'left':'-100%'})
    })
    $('.vslide-wrap').stop().animate({'top': '-200%'},function(){
        $('.vslide').first().appendTo('.vslide-wrap')
        $('.vslide-wrap').css({'top':'-100%'})
    })
    
})
$('button.prev').click(function(){
    $('.hslide-wrap').stop().animate({'left': '-0%'},function(){
        $('.hslide').last().prependTo('.hslide-wrap')
        $('.hslide-wrap').css({'left':'-100%'})
    })
    $('.vslide-wrap').stop().animate({'top': '0%'},function(){
        $('.vslide').last().prependTo('.vslide-wrap')
        $('.vslide-wrap').css({'top':'-100%'})
    })
})

// tab 메뉴 이벤트
$('.tab-menu li').click(function(){ // 탭메뉴 li 클릭시
    let tab =  $(this).find('img').attr("src"); // 누른 li 안에 있는 img 경로 담기
    let i = $(this).index();

    let idx = $(this).parents('.hslide').index(); // 누른 li 가 몇번 째 슬라이드($('.hslide'))에 있는지 담기

    $('.vslide').eq(idx).css({ 'background-image' : 'url(.'+tab+')'}) // 누른 li 와 같은 슬라이드에 있는 $('.vslide') 의 배경이미지 변경하기
    
    //li 클릭했을 때 글내용 바뀜
    $('.hslide').eq(idx).find('.tab li').fadeOut();
    $('.hslide').eq(idx).find('.tab li').eq(i).fadeIn();

    // 메뉴가 어두운 상태에서 클릭했을 때 밝아지기
    $(this).siblings('.tab-menu li').removeClass('on');
    $(this).addClass('on')
})
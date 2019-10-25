//slide_o1.js

(function($){

// .view_indicator 내부의 li(a)를 선택하면,  .side_temp 내부의 .guide 박스가 이동하게 만들어라
// index() 순서를 가져오는 것 , eq() 순서를 주는 것
// 방법1 . margin-left:-100%; -200%.... || 방법2. position:relative; left:-100%; -200%....


  const viewBox = $('#viewBox');
  const indicator = viewBox.find('.view_indicator');
  const indiLi = indicator.find('li');
  const indiLink = indiLi.children('a');
  const slideForm = viewBox.find('.slide_form')
  const guideBox = viewBox.find('.guide');

  slideForm.css({'overflow':'hidden'})
  indicator.css({'zIndex':500})
  guideBox.css({'position':'relative','top':0,'left':0});

  indiLink.on('click focus', function(e){
    e.preventDefault(); //선행되었던 이벤트를 중지시켜라, 기본적으로 걸려있던 액션을 중지시키는 것
    let parLi = $(this).parent('li');
    let i = $(this).parent('li').index();
    console.log(i);

    indiLink.removeClass('action');
    $(this).addClass('action');

    guideBox.stop().animate({'left':-100 * i + '%'})

  });

})(jQuery);
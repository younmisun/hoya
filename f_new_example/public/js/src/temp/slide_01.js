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
  const actionGo = guideBox.find('.actionGo');

  // slideForm.css({'overflow':'hidden'});
  // indicator.css({'zIndex':500});
  // guideBox.css({'position':'relative','top':0,'left':0});

  let timed = 500;
  let myn = 0;
  let maxn = actionGo.length;

  const moveSlide = // moveSlide 이벤트 정의
  function(m){  // moveSlide를 함수안에 부여할 경우, 'm'이라는 것이 받게되는 상황
    indiLink.removeClass('action'); // indicator안에 있는(배너속 하단 부 각 부여된 광고의 지표버튼(?)) 링크에 있던 action 클래스를 지우고
    indiLi.eq(m).children('a').addClass('action'); //'m'을 부여받은 indicator 버튼링크에 action 클래스가 부여된다.
    
    guideBox.animate({'marginLeft':(-100*m)+'%'},
    function(){actionGo.removeClass('action');
    setTimeout(function(){
      actionGo.eq(m).addClass('action');}, timed);
    });
  };
  
  //광고 움직이게 하기

    let go;
    const Goslide = function(){
      go = setInterval(function(){
        myn++
        if (myn >= maxn){myn = 0;}
        moveSlide(myn);
      },timed*2);
    }

    const stopSlide = function(){
      clearInterval(go);
    };

    Goslide();
    viewBox.on({'mouseenter':stopSlide,'mouseleave':Goslide});
  //===========================================================
    
  indiLink.on('click focus', function(e){
    e.preventDefault();
    //선행되었던 이벤트를 중지시켜라, 기본적으로 걸려있던 액션을 중지시키는 것
    stopSlide();
    let i = $(this).parent('li').index();
    myn = i;
    moveSlide(i);

    /* let parLi = $(this).parent('li');
    let i = $(this).parent('li').index();
    console.log(i);

    indiLink.removeClass('action');
    $(this).addClass('action');

    guideBox.stop().animate({'left':-100 * i + '%'}); */



  });
})(jQuery);
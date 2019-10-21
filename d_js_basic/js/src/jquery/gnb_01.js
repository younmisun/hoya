/**
 * 1. 마우스 또는 키보드 포커스 처리시, 하위메뉴 전체가 나타나게 만들기(배경 하얗게)
 * 2. 마우스 또는 키보드 포커시 처리시, 하위메뉴 전체가 나타나게 만들기(별도 배경 없이)
 * 3. 마우스 또는 키보드 포커시 처리시, 해당 메뉴 하위 하나만 나타나게 만들기
 * */

 (function($){

  const gnb = $('#gnb');
  const gnbArea = gnb.children('ul');
  const gnbArLi = gnbArea.children('li');
  // gnbArLi.children('a').attr({'class':'titleLink'}); //attr 혹은 addClass로 줘도 됨!
  gnbArLi.children('a').addClass('titleLink'); //a를 컨트롤 할 수 있도록 자바에서 클래스를 지정해줌

  const titleLink = $('.titleLink');
  const partList = titleLink.next('ul');
  const subLink = partList.find('a');
  
  let timed = 500; 

  //3번

  titleLink.on('mouseenter focus',function(){
    let ulSlide = $(this).next(partList);
    ulSlide.parent().stop().siblings().find(partList).stop().slideUp();
    ulSlide.stop().slideDown();

    ulSlide.find('a').eq(-1).on('blur',function(){
      ulSlide.stop().slideup();
    });
  });

  gnb.on('mouseleave',function(){
    stop().partList.slideUp();})
  
  /* //1번 기능 수행하기 ================================================
  gnbArea.css({'height':'auto','backgroundColor':'#fff',
  'boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3'});
  //포커스 잡히면 보이게하기
  titleLink.on('focus',function(e){
    e.preventDefault();
    partList.slideDown();
  });
  //마지막 요소 블러처리 되면 사라지게
  subLink.eq(-1).on('blur',function(){
    partList.stop().slideUp(timed);
  });
  //마우스 올렸을 경우 나타나게하기
  gnbArea.on('mouseenter',function(){
    partList.stop().slideDown(timed);
  });
  
  gnb.on('mouseleave',function(){
    partList.stop().slideUp(timed);
  })

  //2번 기능 수행하기 ================================================
  
  gnbArea.css({'height':'100%'}); // 이외의 기능은 1번 기능과 동일 */
  
  //3번 기능 수행하기 ================================================

/*   titleLink.on('focus',function(){
    $(this).next(partList).slideDown();
  });

  partList.children('li').eq(-1).find('a').on('blur',function(){
    // $(this).parents(partList).slideUp();
  });
   */



  
  
  /* 
  $('#contentBox').find('h2').css({'width':'0','height':'0','display':'none'});

  gnb.css({'width':'1000px','height':'40px','margin':'auto','backgroundColor':'#ccc'});
  gnbUl.css({'width':'100%','height':'200px','backgroundColor':'#fff'});
  gnbLi.css({'float':'left','width':'125px','height':'auto','backgroundColor':'#9cf'}); */
  
 })(jQuery);
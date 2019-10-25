// spigen_main_content_02.js
(function(){

  const conBox2 = $('#conBox2')
  const conBoxLink = conBox2.find('ul>li>a');

  //.action
  conBoxLink.on('mouseenter focus',function(){
    $(this).addClass('action');
   })
            .on('mouseleave blur',function(){
    $(this).removeClass('action');
    });

  
  /*
  스크롤바가 일정량 움직였을 경우에 top button이 생성되게 만들기
  top_move_btn 생성되게 만들기
  사용된 이벤트는 scroll
  scrollTop() : 스크롤바의 움직인 위치값을 파악
  offset().top, offset().left : 찾아오기
  mousewheel, DOMMouseScroll : 크로브라우징으로?
  상단 네비게이션 js 기능으로 처리 > 과제 
  BOM, DOM ??
  */

  let conBoxOffset = conBox2.offset().top;
  const topBtn = $('.top_move_btn');
  const win = $(window);
  // win.on('scroll',function(e){});
  win.on('scroll',(e) => {
    // console.log(e);
    let scrollResult = $(this).scrollTop(); //scrollTop 스크롤을 얼마나 움직일 것인가
    // console.log(scrollResult);
    // console.log(conBox2.offset().top); 아이디 콘박스와 얼마만큼 떨어져있니?

    if(scrollResult > conBoxOffset){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });

  topBtn.on('click',(e) => {
    e.preventDefault();
    $('html, body').stop().animate({'scrollTop':0},10000,'easeOutElastic',
    ()=>{
    $('h1>a').focus()
  });
  });
  
})(jQuery); 

/** 
 * 자주 사용하는 이벤트 1
 * mouseenter, mouseleave
 * click, foucs, blur
 * keyup 
 * =======================
 * 자주 사용하는 메소드
 * 선택자(자식, 부모, 형제)
 * show/hide, addClass/removeClass
 * attr/removeAttr
 * =======================
 * 불러오거나 삽입하는 기능
 * text, append, prepend
 * load
 * =======================
 * 자주 사용하는 문법
 * 연산자
 * if, switch
 * for
 * function(){};
 * var, const, let
 * parseInt()
 * =======================
 * eq(),index()
 * */
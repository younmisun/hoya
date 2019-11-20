(function($){
  
  /* const menuV= $('.accordion_menu_v');
  const menuDd = menuV.find('dd'); */
  // 1. 이렇게 줄 경우에는 홈페이지에 접속할 경우 내용의 잔상이 보일 수 있음 (css에서 display:none을 주지 않고 했을 때)

  // 2. 첫번째 메뉴 내용만 펼쳐놓고 나머지 내용들을 감추고 시작했을 때 자바코드

  const menuV= $('.accordion_menu_v');
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');

  menuDd.eq(0).show();

  // let t = menuDt.eq(0).contents(); // 내용에 들어있는 모든 요소 파악
  // menuDt.wrap('<div>'); // wrap : 부묘요소를 생성하거나 파악
  menuDt.contents().wrap('<a href="#"></a>'); // js 사용시에는 반복문으로 처리해야한다.

  const menuDtLink = menuDt.find('a');

  menuDtLink.css({'display':'block','width':'100%','height':'100%','color':'inherit'})
  


  menuDtLink.on('click',function(){
    $(this).parent(menuDt).next(menuDd).siblings('dd').slideUp(); // 1-2 .hide를 줄 경우 매끄럽지 않기 때문에 slideUp을 줘봄(매끄럽게 내려간다)
    // 1-1 siblings('menuDd')를 넣으면 지칭한 dd를 모두 변수로 지정했기 때문에 모든 dd들이 접힌다. 때로는 변수가 아닌 직접선택을 해주기도 한다.
    // 1-3 $(this).next('dd').slideDown(); // .show를 줄 경우 매끄럽지 않기 때문에 slideDown을 줘봄(매끄럽게 올라간다)
    // $(this).next('dd').slideToggle();
    // 1-4 처음 지정했을 때 13줄에 eq(0)show를 줬기 때문에 닫고 싶어도 시간이 지날 경우에 다시 dd가 멋대로 나타난다. 그럴때 toggle을 준다.

    $(this).parent(menuDt).next(menuDd).stop().slideToggle();
    // 1-5 toggle을 주면 여러번 연속적으로 빠르게 누르게되면 애니메이션을 멈추게하고 싶어도 누른 값을 치루기 위해 누른만큼 연출이 됨.
    // 그렇기 때문에 stop으로 제어해줘야 중간에 닫힐 수 있고 좀 더 자연스럽게? 연출됨..? 몰라...흑흑..
    // 어떠한 animation 기능을 활용할 때 제어하는 stop은 애니메이션 기능 앞에 써준다.
  });
  // parent를 주지 않고 따로 할 경우... //css에도 설정을 추가해줘야됨

 /*  menuDt.on('click',function(){
    $(this).next(menuDd).siblings('dd').stop().slideUp();
    $(this).next(menuDd).stop().slideToggle();
  }); */

  //dd가 여러개 일 경우
  // 선택 요소 뒤에 오는 모든 dd부터 그다음 dt 이전의 요소인 dd까지
  //$(this).nextAll('dd').next('dt').prev('dd')

/*   menuDt.on('click',function(){
    let i = $(this).index()/2;
    menuDd.eq(i).siblings('dd').slideUp();
    menuDd.eq(i).stop().slideToggle();

    console.log($(this).nextAll('dd').next('dt').prev('dd'));
  });

  //menuDtLink.on('focus', function(){$(this).addClass('action');}); 1번 방법

  const addC = function() {($this).addClass('action');};
  const removeC = function() {($this).removeClass('action');};

  // menuDtLink.on('focus',addC);
  // menuDtLink.on('blur',removeC);

menuDtLink.on({"focus":addC, "blur":removeC}); */


})(jQuery);
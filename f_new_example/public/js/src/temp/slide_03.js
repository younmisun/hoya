// slide_03.js
(function($){

  const slideForm = $('.slide_03_form');
  const slideGuide = slideForm.children('ul');
  let slideLi = slideGuide.find('li');
  
  // slideForm.css('overflow','hidden');
  
  //-------------------------------------------------------------------
  //li에 클래스를 부여 (.slide_03_con_0$)
  
  for(let i=0; i<slideLi.length; i++){
    
    let className = 'slide_03_con_' + (i+1);
    slideLi.eq(i).addClass(className);
    
  }
  
  let cloneLi = slideLi.eq(-1).clone(true);
  //clone 사용시 괄호안에 true까지 쓰면 그 기능까지 복제한다
  
  cloneLi.eq(-1).prependTo(slideGuide);
  
  //1. prepend, prependTo의 역할을 정확하게 구분
  /* 감싸는 영역 prepend(담는 내용);
  * 담는 내용.prependTo(감싸는 영역); */
 //2. 마지막 영역을 복제(clone)후에 앞에 담아라!
 //3. css작업시 nth-child()를 이용하여 이미지 또는 기능을 담게되면
 //   순서가 우리가 원하는대로 담겨지지 않음. 
 //   복제해서 앞에 붙여도 nth 순서는 변하지 않기 때문이다.
 //   그러므로 각각 class 이름을 부여하여 이미지, 기능을 처리해야함
 //   (복제 전에 이름을 부여해야함)
 //4. 또한, 그 부모인 영역의 넓이는 기존갯수 +1만큼의 크기값으로 재설정해야함
 
 //------------------------------------------------------------------
 
 const slide03Btn = $('.slide_03_btn');
 const nextBtn = $('.next');
 const prevBtn = $('.prev');
 slideLi = slideGuide.find('li');

 // 처음 지정했던 let slideLi는 위에서 변수로 지정했기 떄문에 li가 5개다. 그 이후로 우리가 변수를 수정하고.
 // 클래스같은걸 부여했기 때문에 6개가 되었기 때문에 여기 밑에서 다시 재정의를 내려준다.
 // 위에 slideLi와 지금 현재 이 부분에 있는 것은 다른 거라고 생각하면됨.
  
  let myn = 0;
  const bannerLen = slideLi.length;

  nextBtn.on('click',function(e){  // 클릭해서 다음내용보기로 넘어갈 때
    e.preventDefault(); // 기존에 있던 이벤트는 정지시켜주고
    myn++; // 0값을 +1씩 증가하라
    if(myn >= bannerLen-1 ){ 
      // 아래 li에 행하고 있는 이벤트(li 목록의 값을 -100%로 이동해라)를 진행하는데 이 만약문을 충족 시키지 못하면 무시하고
      // myn의 크기와 li의 크기가 myn의 크기보다 작거나 같게되면
      // bannerLen이 -1인 이유는 
      slideGuide.css({'left':'100%'});
      // css에서 li의 값을 100%로 돌려라(기존 css에서는 marign-left:-100%로 되어있어서 복제된 광고내용5이 안보이고 광고내용1이 보였음)
      // 그러면 이 상태는 현재 맨 처음에 복제한 광고내용5가 보여지는 상태
      // 하지만, css에 animation효과가 없기 때문에 변화의 모습이 보여지지 않음, 그냥 마지막li에 광고내용5가 보여지는 것 같이 보임
      myn = 0;} //다시 변수 myn의 값을 0으로 바꿔라, 왜냐하면 myn의 값은 li와 같이 움직이면서 증가되었기 때문에 초기값과 다르기 때문에 다시 재정의
    let per = -100 * myn + '%'
    slideGuide.stop().animate({'left':per},1000); //li 목록의 값을 -100%로 이동해라
    //마지막. if에서 적용한 것을 동시에(눈에 안보이는 움직임)(left:100%값으로 돌아가서)
    //다시 처음으로 돌아왔기 때문에 자연스럽게 첫번째 화면으로 넘어가는 것 처럼 보인다.
    //scss에서 slide_03_form ul의 값을 width:50%; overflow:hidden을 가리고 보면 조금 이해가됨
  });

  prevBtn.on('click',function(e){
    e.preventDefault();
    myn--; // 0값을 -1씩 감소하라

    let per = -100 * myn + '%';
    slideGuide.stop().animate({'left':per},1000,function(){ //li를 자연스럽게 -100%로 이동하고, 이 상황에서
      if(myn <= -1){ //혹시나 myn 값이 -1보다 작거나 같게된다면
        myn = bannerLen-2;}
      per = -100 * myn + '%';
      slideGuide.css({'left':per});
    });

  });

  
})(jQuery);
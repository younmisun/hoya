//paul_viewBox.js
(function($){

  const viewBox = $('#viewBox');
  
  //버튼 및 인디케이터 영역
  const indi = viewBox.find('.indicator');
  const indiCon = indi.find('p').children('em');
  const indiBtn = indi.find('.view_btn').children('button');

  //슬라이드 영역
  const slide = viewBox.find('.slide_form');
  const slideUl = slide.find('ul');
  const slideLi = slideUl.find('li');

  // 1.slide영역 순서에 맞게 배치
  let liLen = slideLi.length;
  const slideZindexSet = function(){
  for (let i=liLen-1; i>=0; i--){
    slideLi.eq(i).css({zIndex:liLen - i});
  };
  };

  slideZindexSet();

  /*
  for (let i=0; i <liLen; i++){
  slideLi.eq(i).css({zIndex:liLen - i});};
   */

  let textN = 0;
  const textEm = function(n){indiCon.text( '0' + ( n + 1 ));
  };
  textEm(textN);

  slideLi.eq(0).siblings().hide();
  slideLi.eq(0).find('dl').addClass('action');
/*   const slideDt = slideLi.find('dt');
  const slideCon = slideLi.find('dd.con');
  const slideLink = slideLi.find('dd.link'); */


  const fakeBtn = $('.fake_btn');
  fakeBtn.hide();

  // 버튼 클릭
  indiBtn.on('click', function(e){
    e.preventDefault();
   
    fakeBtn.show();
    
    if ($(this).index() == 0){ //next 버튼 | index() == 0 혹은 hasClaass('클래스이름') ->'클래스 이름이라면'
    textN++;
    if (textN >= liLen){textN=0;}
    textEm(textN);
  }else{ //prev 버튼
    textN--;
    if (textN < 0){textN=liLen-1}
    textEm(textN);
  }
  /*
  slideLi.eq(textN).siblings().fadeOut(); //fadeOut 선택한 요소 점점 사라지게 하는 요소 Li의 선택된 자기자신을 제외하고 점점사라져라
  //slideLi(li에서 eq(textN) 선택된 li중에) siblings(자기자신을 제외하고) fadeOut (나머지 요소는 점점사라지게해라)
  slideLi.eq(textN).fadeIn();
});

// li 보이지 않게 하고, -> li요소의 첫번째만 보이게 만들고

slideLi.eq(textN).siblings().slideUp();
slideLi.eq(textN).slideDown();

*/



//옆에서 움직이는 현상
/*  slideThis.css({zIndex:liLen+ 2, left:-100 + '%'});
slideThis.stop().show(function(){
  slideThis.animate({left:0},function(){
    slideLi.eq(textN).siblings().hide();
    slideZindexSet();
  });
  
  
}); */

let slideThis = slideLi.eq(textN);
//가로로 늘어나는 현상
slideThis.css({zIndex:liLen+ 2, width:0, padding:0});
slideThis.css({display:'block',padding:'5vw 0'});
slideThis.stop().show(function(){
  slideThis.animate({width:100+'%',paddingLeft:'5vw'},
                     1000,'easeOutCubic',function(){
    slideThis.siblings().hide();
    slideZindexSet();
    fakeBtn.hide();
    slideThis.siblings().find('dl').removeClass('action');
    slideThis.find('dl').addClass('action');
    
  });  
});
});








})(jQuery);
//jq_05_event_02.js
(function($){
  let menu = $('.menu');
  let menuUl = menu.children('ul');
  let menuLi = menuUl.children('li');
  let menuLink = menuLi.children('a'); // 2.a 태그에 대한 기본 요소를 변수로 지정해주고 blur요소를 잡아준다(밑에 처럼)

  let mLiBg = menuLi.css('backgroundColor');
  let mLiBdr = menuLi.css('borderRadius');
  let mLinkColor = menuLink.css('color');
  let mLinkWeight = menuLink.css('fontWeight');
  menuLink.css({'outline':0});

  //3. 위처럼 지정된 것을 더 간단하게 세팅하는 방법
  let set = {
    licolor : mLiBg, //menuLi.css('backgroundColor')
    liborder : mLiBdr, //menuLi.css('borderRadius')
    linkcolor : mLinkColor, //menuLink.css('color')
    linkbold : mLinkWeight //menuLink.css('fontWeight')
  };

  Set.licolor 
//focus : 초점이 잡힌 상태(a, button, form 내부의 요소)

/*   menuLi.children('a').on('focus', function(){
    let mythis = $(this);
    mythis.parent('li').css({'backgroundColor':'#0af','borderRadius':'0.5rem'});
    mythis.css({'color':'#faf','fontWeight':'bold','outline':'none'});
  });  */

  menuLink.on('focus', function(){
    let mythis = $(this);
    mythis.parent('li').css({'backgroundColor':'#0af','borderRadius':'0.5rem'});
    mythis.css({'color':'#faf','fontWeight':'bold','outline':'none'});
  });



// blur : 초점이 잡힌(focus)요소가 풀리는 상황 

/*   menuLi.children('a').on('blur',function(){
    let mythis = $(this); // 변수를 지정해줄 때 this를 사용하게되면 안됨, 자바에서 이미 this에 대한 명령어가 존재하기 때문에
    mythis.parent('li').css({'backgroundColor':'#fff','borderRadius':0});
    mythis.css({'color':'#777','fontWeight':'normal'})
  }); // 1. 이 방법을 사용할 경우에는 나중에 컬러를 바꾼다던가, 변함이 생길 경우 불편한 상황이 올 수 있으므로 권하지 않는다. */

  menuLink.on('blur',function(){
    let mythis = $(this);
    mythis.parent('li').css({'backgroundColor':mLiBg/* 3-1. mLiBg 대신 licolor를 쓸 수 있다 */,
    'borderRadius':mLiBdr/* 3-2. mLiBd 대신 liborder를 쓸 수 있다.. 그 외 set에서 다시 지정해준걸로 대체 사용할 수 있다 */});
    mythis.css({'color':mLinkColor,'fontWeight':mLinkWeight})
  });

  let mytop = $('.top_link').children('button');

  /*
  mytop.on('mouseenter', function(){});
  mytop.on('mouseleave', function(){}); //4.동일한 글자를 쓸 필요 없이 편의성을 위해 메소드 체인을 사용해 아래처럼 사용한다.
  
  mytop
  on('mouseenter', function(){})
  on('mouseleave', function(){}); //메소드 체인을 이용한 경우
  */

  // !!!!!!!!!!!!!!!!!!선택자.기능('기능이름',function(){});!!!!!!!!!!!!!!!!
  
  let topColor = mytop.css('backgroundColor');

  mytop.hover(function(){
        $(this).animate({'backgroundColor':'#305'}, function(){
          $(this).animate({'width':'300%'}, function(){
          $(this).animate({'backgroundColor':'#f06'});
          });
        });
     },  //마우스를 올렸을 경우, animate일 경우에는 콜백이 가능함!
      function(){
        $(this).animate({'backgroundColor':topColor}); //마우스를 벗어났을 경우
    });

  mytop.on('click',function(event){
    event.preventDefault(); //먼저 선행되는 이벤트를 제거하는 기능, 제거해줘야지 지정한 이벤트가 설정할 수 있땅?
    $('html, body').animate({'scrollTop':0}); //브라우저마다 인지하는 것이 다르기때문에 html, body둘다 써줘야함
  });

  /* 
  * css() => css 기능을 거의 다 쓸 수 있다.
  * animate()는 css의 기능을 쓸 수 있지만, 모두 쓸 수는 없다.
  *            transform, transition, animation, borderRadius 등
  *            흔히 말하는 css3 기능은 동작하지 않는다. 
  *            또한 backgroundColor, color 등 색상관련된 기능은 jQuery-ui에서 사용되는 기능
  *            animate는 css와는 다른 기능 일부가 첨부되어 있다.(scrollTop 등) 
  */

  // document와 window는 같은 개념으로 가지고 있다

  const win = $(window);
  const conBox = $('#contentBox');

  win.on('scroll',function(){
    let myscroll = $(this).scrollTop();

    //jQuery ui가 있을 경우에만 적용됨

    if (myscroll > 150){
      conBox.stop().animate({'backgroundColor':'#aca'},300);
    }else{
    conBox.stop().animate({'backgroundColor':'#fca'},300);
    }

 /*    if (myscroll > 150){
      conBox.css({'backgroundColor':'#aca','transition':'all 300ms ease'});
    }else{
    conBox.css({'backgroundColor':'#fca','transition':'all 300ms ease'});
    } */

    //위와 동일한 다른 방법
    // (myscroll>150) ? conBox.css({'backgroundColor':'#aca'}):conBox.css({'backgroundColor':'#fca'})
    });

    //크기값이 변경되었을 때 사용하는 기능(가로,세로 일부기능 제한두고 사용)

    let beforeWidth = win.width(); // 크기 값이 변동되기 전 가로값
    win.on('resize',function(){
      let afterWidth = win.width(); // 크기 값이 변동된 후 가로값
      
      if(beforeWidth !== afterWidth){
        console.log('크기가 변경되었습니다.');
        history.go(0);
      }
      

  });

  /** 새로고침의 방법
   * location.reload(true);           //새로고침(F5번키)
   * location.href = location.href;   // 상단 주소창에 있는 주소로 이동 (권장하지 않음!)
   * history.go(0);                   //사용기록중에 가장 최근기록위치로 이동
   */

})(jQuery);
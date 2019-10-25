//make_spigen_main_pc.js

(function($){
  // 1. #gnb 영역 내부에 있는 ul 내용을 .side_gnb_area에 복사해서 붙여넣기
  // clone 이라는 메소드를 사용

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');

  //============================================================================
  // header 영역에 해당하는 내용을 만들기
  
  const gnbMenu = [{title:'about', titleLink:'#######',
                    /* 'sub':['who we are','what we do','our locations'] */
                    sub:[{subName:'who we are', subLink:'#####'},
                         {subName:'what we do', subLink:'#####'},
                         {subName:'our locations', subLink:'#####'}
                        ]},
                    /* sub:['careers','HR Blog','apply'], */
                   {title:'careers', titleLink:'#######',
                    sub:[{subName:'careers', snbLink:'#####'},
                         {subName:'HR Blog', subLink:'#####'},
                         {subName:'apply', subLink:'#####'}
                        ]},
                   {title:'media', titleLink:'#######',
                   sub:[{subName:'media', subLink:'#####'}]},

                   {title:'IR', titleLink:'#######',
                    sub:[{subName:'investors', snbLink:'#####'},
                         {subName:'IR Archive', snbLink:'#####'},
                         {subName:'IR Meeting', snbLink:'#####'}
                        ]}];

/*   //gnbMenu[0].title
  for(let i = 0; i < gnbMenu[0].sub.length; i++){
    console.log(gnbMenu[0].sub[i]);
  }
  for(let i = 0; i < gnbMenu[1].sub.length; i++){
    console.log(gnbMenu[1].sub[i]);
  }
  for(let i = 0; i < gnbMenu[2].sub.length; i++){
    console.log(gnbMenu[2].sub[i]);
  }
  for(let i = 0; i < gnbMenu[3].sub.length; i++){
    console.log(gnbMenu[3].sub[i]);
  } */

/* 
    for(let i=0; i<gnbMenu.length; i++){
    console.log(gnbMenu[i].title);
    //-----------------------------이중 for문
    for(let j=0; j < gnbMenu[0].sub.length; j++){
      console.log(gnbMenu[0].sub[j])
    }
  }
 */

  const menuLen = gnbMenu.length;
  
  gnb.append('<ul></ul>'); //gnb영역에 ul생성
  const gnbUl = gnb.children('ul');

  for(let i = 0; i < menuLen; i++){ 
    // gnb.append(gnbMenu[i]);
    gnbUl.append('<li><dl><dt><a href="#"></a></dt><dd></dd></dl></li>');
    const gnbLi = gnbUl.children('li').eq(i);
    let gnbLiLink = gnbLi.find('dt').children('a');
    gnbLiLink.attr('href',gnbMenu[i].titleLink); //링크 속성변경
    gnbLiLink.text(gnbMenu[i].title);

    let subLen = gnbMenu[i].sub.length;

    for(let j=0; j < subLen; j++){
      let gnbDd = gnbLi.find('dd'); //for문 안에 let gnbDd를 설정했기 때문에 for문을 빠져나가면 설정값은 사라진다.
      gnbDd.append('<a href=""></a>');
      let gnbMyLink = gnbDd.children('a').eq(j);
      gnbMyLink.text(gnbMenu[i].sub[j].subName);
      gnbMyLink.attr('href',gnbMenu[i].sub[j].subLink);
    };


  }; //for(i < menuLen)

  
  
  //============================================================================
  
  let gnbContents = gnb.contents().clone(); // 복사를 하지않고 그대로 append 할 경우 기존 내용을 지우고 내용을 삽입할 수 있으니 주의
  sideGnbArea.append(gnbContents);

  //------------------------------------
  // 버튼 클릭시 side_gnb_area 나타나게 만들기

  const openGnbBtn = $('.gnb_btn > button');
  const closeGnbBtn = $('.close_gnb_btn > button');
  const sideGnb = $('.side_gnb');
  const gnbDl = gnb.find('dl');
  const gnbDd = gnb.find('dd');
  const gnbDt = gnb.find('dt');
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink = gnbDd.children('a');

  let time = 600;

  openGnbBtn.on('click', function(e){
    e.preventDefault(); //혹시 모를 이벤트가 생길 경우를 방지하기 위해 써준다
    // sideGnb.show();
    // sideGnb.css({'display':'block'});
    sideGnb.stop().fadeIn(time/2, function(){
      $(this).on('keyup',function(e){

        //esc => 27 / esc의 keycode가 27번임
        //27번을 사용하지 않고 escape를 사용하고 싶다면? Escape 대문자로 꼭 넣어줘야함.
        //영문글자를 강제로 대/소문자로 치환하는 함수
        //대문자로 변환 toUpperCase(), 소문자로 변환 toLowerCase()
        //console.log(e.key.toLowerCase());

      if(e.keyCode == 27){
        sideGnb.fadeOut(time);
        openGnbBtn.focus();
      }
      });
    });
    closeGnbBtn.focus();


  });
  
  closeGnbBtn.on('click',function(e){
    e.preventDefault();
    // sideGnb.hide();
    // sideGnb.css({'display':'none'});
    sideGnb.fadeOut(time/2);
  });

  // #gnb에 마우스를 올렸을 경우 dd를 나오게 하기

  const addAction = function(){
    let li = $(this).parent('li');
    li.find(gnbTitleLink).addClass('action');
    li.siblings().find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideDown();
  };

  const removeAction = function(){
    $(this).parents('li').find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideUp();
  };


  /* 
    gnbDl.on('mouseenter',addAction);
    gnbDl.on('mouseleave);,removeAction);
  */
 
  gnbDl.on({'mouseenter':addAction, 'mouseleave':removeAction});

  //gnb에 dt에 focus 처리되면 dd가 나타나게 만들기
  // focus가 되는 태그 종류는 a, button, form(input, textarea, select)

  gnbTitleLink.on('focus',addAction);
  gnbListLink.on('blur',addAction);
  gnbListLink.eq(-1).on('blur',removeAction);

//.side_gnb_area 내부의 마지막 a요소에서 blur 처리되면, .close_gnb_btn 위치로 다시 focus 처리되어라

  const sideLink = sideGnbArea.find('a');
  const sideLastLink = sideLink.eq(-1);
  
  sideLastLink.css({'fontSize':'2rem'});

  sideLastLink.on('blur',function(e){
    closeGnbBtn.focus();
    
  });
  
/*
  $('h1').find('a').on('focus'); // focus가 잡히면
  // $('h1').find('a').focus(); // focus를 잡아라!

  sideLastLink.on('blur',function(){
    
    closeGnbBtn.attr({'tabindex':1});
    $('.close_gnb_btn').children('button').focus();
    // closeGnbBtn.focus();


  });
*/

//.side_gnb_area 에서 키보드 esc 누르면 빠져나가고, 이전의 위치로 돌아가라
// ->.side_gnb_area가 보이는 곳에서 수행 27번줄

//keyup 키보드를 올리면



})(jQuery);
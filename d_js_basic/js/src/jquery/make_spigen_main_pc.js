//make_spigen_main_pc.js

(function($){
  // 1. #gnb 영역 내부에 있는 ul 내용을 .side_gnb_area에 복사해서 붙여넣기
  // clone 이라는 메소드를 사용

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');

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
    sideGnb.fadeIn(time/2);
  });
  closeGnbBtn.on('click',function(e){
    e.preventDefault();
    // sideGnb.hide();
    // sideGnb.css({'display':'none'});
    sideGnb.fadeOut(time/2);
  });

  // #gnb에 마우스를 올렸을 경우 dd를 나오게 하기

  const addAction = function(){
    $(this).find(gnbTitleLink).addClass('action');
    gnbDd.stop().slideDown();}

  const removeAction = function(){
    $(this).find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideUp();}


  gnbDl.on('mouseenter',addAction);
  gnbDl.on('mouseleave',removeAction);

  //gnb에 dt에 focus 처리되면 dd가 나타나게 만들기
  // focus가 되는 태그 종류는 a, button, form(input, textarea, select)
  
  gnbTitleLink.on('focus',function(){
    gnbDd.stop().slideDown();
    
  });

  gnbListLink.eq(-1).on('blur',function(){
    gnbDd.stop().slideUp();

  });




})(jQuery);
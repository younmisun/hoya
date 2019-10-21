//jq_07_showHide.js

(function($){
  const showHide = $('.showHide').children('li');
  const fade = $('.fade').children('li');
  const slide = $('.slide').children('li');
  const class_control = $('.class_control').children('li');

  const viewBox = $('.view_area');

  // show, hide, toggle
  showHide.eq(0).on('click',function(){viewBox.show(500);});
  showHide.eq(1).on('click',function(){viewBox.hide(500);});
  showHide.eq(2).on('click',function(){viewBox.toggle(500);});

  //================================================
  // fadeIn, fadeOut, fadeToggle
  fade.eq(0).on('click',function(){viewBox.fadeIn(500);});
  fade.eq(1).on('click',function(){viewBox.fadeOut(500);});
  fade.eq(2).on('click',function(){viewBox.fadeToggle(500);});

  //================================================
  // slideDown, slideUp, slideToggle
  slide.eq(0).on('click',function(){viewBox.slideDown();});
  slide.eq(1).on('click',function(){viewBox.slideUp();});
  slide.eq(2).on('click',function(){viewBox.slideToggle();});

  //eq(n번째)랑 index(n번째)랑은 다른의미임! 기억해두자(자주 헷갈림)
  
  //================================================
  // addClass, removeClass, toggleClass
  class_control.eq(0).on('click',function(){
    viewBox.removeAttr('style'); //기존에 있던 스타일 속성을 지우라는 명령어
    viewBox.addClass('act')});
  class_control.eq(1).on('click',function(){
    viewBox.removeAttr('style');
    viewBox.removeClass('act')});
  class_control.eq(2).on('click',function(){
    viewBox.removeAttr('style'); 
    viewBox.toggleClass('act')});
})(jQuery);
 
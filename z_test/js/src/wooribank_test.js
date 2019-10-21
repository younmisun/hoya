(function($){

  const gnb = $('#gnb');
   const gnbUl = gnb.find('ul');
  const gnbDl = gnb.find('dl');
  const gnbDt = gnb.find('dt');
  const gnbDd = gnb.find('dd');
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink = gnbDd.children('a');
  const conBox = $('#conBox');

  gnb.on('mouseenter',function(e){
    e.preventDefault();
    gnbDd.stop().slideDown();
    conBox.css({backgroundColor:'rgba(0,0,0,0.3)'})
  });

  gnbTitleLink.on('focus',function(){
    gnbDd.stop().slideDown();
  });

  gnb.on('mouseleave',function(){
    gnbDd.stop().slideUp();
    conBox.css({backgroundColor:'#fff'})
  });

  gnbListLink.eq(-1).on('blur',function(){
    gnbDd.stop().slideUp();
  });



})(jQuery);
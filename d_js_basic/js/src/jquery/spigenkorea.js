//spigenkorea.js

(function($){
  
  const wrap = $('#headBox');
  const menuArea = $('.menuArea');
  const gnb = menuArea.find('dt');
  const gnbContents = menuArea.find('dd');
  const aboutZone = menuArea.find('.about');
  const careersZone = menuArea.find('.careers');
  const mediaZone = menuArea.find('.media');
  const irZone = menuArea.find('.ir');

  menuArea.on('focus', function(){
   $(this).show(aboutZone)
  });
  

})(jQuery);
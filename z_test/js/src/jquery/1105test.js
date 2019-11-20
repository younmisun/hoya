(function($){
  const miniPro = $('#miniProduct');
  const indi = miniPro.children('.indicator');
  const slide = miniPro.children('.product');
  const indiLi = indi.children('li');
  const indiLink = indiLi.children('a');
  const slideLi = slide.children('li');

  slide.wrap('<div class="bgimg"></div>');



  miniPro.css({'overflow':'hidden'});
  indiLink.find('span').addClass('hidden');


  indiLink.on('focus',function(e){
    e.preventDefault();
    n = $(this).parent('li').index();
    slide.animate({left:-100 * n + '%'})
    // slideWrap.animate({left: -100 * n +'%'})

  });
  

})(jQuery);

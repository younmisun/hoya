//jq_01.js

(function($){
  // console.log($.fn.jquery);

  // #wrap{width:700px; height:auto; margin:auto; background-color:#faa;}
  $('#wrap').css({'width':'700px', 'height':'auto', 'backgroundColor':'#faa', 'margin':'auto'});
  $('h1').css({'width':'100%','height':'auto','backgroundColor':'#acf'})
  //h2.addEventListener('click',function(){};)
  $('h2').on('click',function(){
    $('#wrap').animate({'height':'1000px','backgroundColor':'#0af'});
  })





})(jQuery);


// jQuery 실행시키는 파일! 
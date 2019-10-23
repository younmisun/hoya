// spigen_main_content_02.js
(function(){

  const conBoxLink = $('#conBox2>ul>li>a');

  //.action
  conBoxLink.on('mouseenter focus',function(){
    $(this).addClass('action');
   })
            .on('mouseleave blur',function(){
    $(this).removeClass('action');
    });
  
})(jQuery); 
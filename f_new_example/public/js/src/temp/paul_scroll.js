//paul_scroll.js

(function($){

   //offset().top : 브라우저 최 상단에서 얼만큼 떨어져 있는가를 판단하는 기능
   //offset().left : 브라우저 왼쪽에서 얼만큼 떨어져 있는가를 판단하는 기능
   
   const viewBox = $('#viewBox');
   const con1 = $('#conBox');
   const con2 = $('#conBox2');
   let viewBoxlocation = viewBox.offset().top;
   let con1location = con1.offset().top;
   let con2location = con2.offset().top;
   console.log(viewBoxlocation);
   console.log(con1location);

   let winScroll = $(window).scrollTop();
   console.log(winScroll);

   let scrollResult = 0;
   let n = 0;
   $(window).on('mousewheel DOMMouseScroll', function(e){
     // e.originalEvent.wheelDelta //크롬에만 존재하는 기능
     // e.detail //fireFox에서만 값이 3으로 움직임을 가짐

     let delta = e.originalEvent.wheelDelta;
     (delta) ? scrollResult = delta : scrollResult = e.detail * -40;
     (scrollResult >= 0) ? n++ : n--;
     console.log(n); 

     winScroll = $(window).scrollTop();
     if(winScroll >= con1location){
       con2.css({backgroundColor:'#fa7',marginLeft:'-50vw',
                 transform:'rotate(360deg)',transition:'all 300ms ease'})
     }else{
       con2.removeAttr('style');
     }

/*      if(e.originalEvent.wheelDelta){ //크롬
       scrollResult = e.originalEvent.wheelDelta;
     }else{
       scrollResult = e.detail * -40;
     }

     console.log(scrollResult) */

   });

})(jQuery);
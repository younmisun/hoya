//main.js
(function($){
  
  const body = $('body');
  const wrap = $('#wrap'); // #wrap

  
  //script 내용 간편작성 위해 함수 생성
  const jsLink = function(temp){ // 또는 '(temp) =>'으로 시작할수도 있다.
   return body.append(`<script src="../js/src/temp/${temp}.js"></script>`); };

  // 광고영역생성 ==============================================================

  wrap.append('<section id="viewBox"></section>')
  const viewBox = $('#viewBox');

  viewBox.load('./temp/slide_01.html',function(){
    jsLink('slide_01');
  });



})(jQuery); 
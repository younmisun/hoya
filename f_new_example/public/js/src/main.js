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

// 광고영역2 생성 ===============================================================
  wrap.append('<section id="viewBox_02"></section>');
  const vB2 = $('#viewBox_02');
  vB2.load('./temp/slide_02.html',function(){
    return jsLink('slide_02');
  });

  // 자동슬라이드 내용에서 중첩기능 수정요망

// 광고영역3 생성 ===============================================================

wrap.append('<section id="viewBox_03"></section>');
const vB3 = $('#viewBox_03');
vB3.load('./temp/slide_03.html',function(){
  return jsLink('slide_03');
});

// 광고영역4 생성 ===============================================================

wrap.append('<section id="viewBox_04"></section>');
const vB4 = $('#viewBox_04');
vB4.load('./temp/slide_04.html',function(){
  return jsLink('slide_04');
});

// 광고영역5 생성 ===============================================================

wrap.append('<section id="viewBox_05"></section>');
const vB5 = $('#viewBox_05');
vB5.load('./temp/slide_05.html',function(){
  return jsLink('slide_05');
});
})(jQuery); 
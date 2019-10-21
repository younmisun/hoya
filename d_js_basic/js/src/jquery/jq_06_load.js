//jq_06_load.js

(function($){
 //jQuery 기초
 /**
  * 
  * js문서에서는 기준경로가 작성하고 있는 js문서가 아니다.
  * (html 문서에서 불러왔을 경우)
  * html 문서로 연결된 경우 불러온 html 문서기준으로 경로를 설정
  */


  const wrap = $('#wrap');
  wrap.prepend('<div class="head_wrap"></div>');
  const headWrap = $('.head_wrap');

  wrap.append('<foot class="foot_wrap"></div>');
  const footWrap = $('.foot_wrap');

  headWrap.load('./temp/header.html',function(data){
    console.log(data)
    const headBox = $('#headBox');
    headBox.css({'backgroundColor':'#3ff'});
  
  footWrap.load('./temp/footer.html',function(data){
  })

  });
  // let headBox = $('#headBox');
  // headBox.css({'backgroundColor':'#333'});//외부에서 불러오기만 할 수 있음 컨트롤 할 수 없다(style이라던지..css기능 등)
  // 하고자한다면 headWrap.load('./temp/header.html' 다음에 ,function.... 위에 한것처럼 내부안에서 fuction 값을 주고 하면 된다.X_X;)

  wrap.load('../../data/test.json',function(data){
    console.log(data);
  });

  
})(jQuery);
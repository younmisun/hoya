// spigen_main.js

(function($){
  const wrap = $('#wrap');
  // 혹은 const body = $('body'); 1. 바디를 변수로 지정해준다음
  const body = $('body');
  const header = $('#headBox');
  const adver = $('#viewBox');
  const content = $('#conBox');
  const content2 = $('#conBox2');
  const footer = $('#footBox');

  const inverstor = $('#inverstor');

  // =============================

  let tempUrl = "./spigen_temp/";
  let jsUrl = "../../js/src/spigen_temp_pc/";

  header.load(tempUrl+'spigen_header.html',function(){
    // wrap.after('<script src="../../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
    //body.append('<script src="../../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
    //2.바디에 스크립트를 준다.
    //헤더를 부른다음에 자바스크립트를 불러라
  });
  adver.load(tempUrl+'spigen_main_adver.html');


  content.load(tempUrl+'spigen_main_content_01.html',function(){
    let conJS = jsUrl + 'make_spigen_content_01.js';
    body.append(`<script src="${conJS}"></script>`)
    //외에 2가지 방법으로도 불러올 수 있음
    //body.append('<script src="../../js/src/spigen_temp_pc/make_spigen_content_01.js"></script>)
    // body.append('<script src="'+ conJS +'"></script>')
  });

  content2.load(tempUrl+'spigen_main_content_02.html',function(){
    let conJS = jsUrl + 'spigen_main_content_02.js';
    body.append(`<script src="${conJS}"></script>`)
    //외에 2가지 방법으로도 불러올 수 있음
    //body.append('<script src="../../js/src/spigen_temp_pc/make_spigen_content_01.js"></script>)
    // body.append('<script src="'+ conJS +'"></script>')
  });


  footer.load(tempUrl+'spigen_footer.html');

  // setTimeout(function(){},'시간');
  //자바스크립트 기능, 일정 시간이 지난 후에 함수를 수행해라!

  setTimeout(function(){
    body.append('<script src="../../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
  }, 100);
  //일정시간이 지난 후에 자바스크립트를 불러라, header를 부른다음 자바스크립트를 불러올 경우 안될 수가 있음. 
  //무엇을 더 권장할 수는 없지만, 어떤 상황에 따라 사용해야하는 방법이 달라짐
  


})(jQuery);
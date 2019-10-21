//jq_02.js

(function($){
  //jQuery 내용작성하는 곳
  //선택자

  document.getElementById('box');
  document.querySelector('#box');
  $('#box')

  document.getElementsByTagName('p')[0];
  document.querySelector('p');
  $('p')
  /* 
  $('.box p').css({"padding":"0.5rem", "backgroundColor":"#fa0"});
  $('.box').find('p').css({"color":"#f03", "textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.5"});
  
  $('.box>p').css({"borderBottom":"2px solid #111"});
  $('.box').children('p').css({"transform":"rotate(45deg"});

  $('dl > dt+dd').css({"backgroundColor":"#acc"});
  $('dl').children('dt').next('dd').css({"fontSize":"2rem"});

  $('dl > dt~dd').css({"marginLeft":"10rem"});
  $('dl').children('dt').nextAll('dd').css({"color":"#f03"});
  
  $('ul > li:nth-child(1)').css({"backgroundColor":"#ffa"});
  $('ul').children('li:nth(3)').css({"backgroundColor":"#aff"})
  $('ul').children('li').eq(2).css({"borderBottom":"5px solid #333"});
  
  $('ul').find('li:eq(3)').siblings().css({"borderLeft":"3px solid #f06"}) */

/*
  $('#first').css({"padding":"0.5rem","backgroundColor":"#fcc"});
  $('#first').find('strong').css({"color":"07f"});
  밑에 처럼 쓸 수 있다!
 */

  // let first=$('#first');
  // first.css({"padding":"0.5rem","backgroundColor":"#fcc"});
  // first.find('strong').css({"color":"07f"});

  let first = $('#first');
  let str = first.find('strong');

  first.css({"padding":"0.5rem","backgroundColor":"#fcc"});
  str.css({"color":"#fff"});

  str.parent().css({"padding":"0.3rem","backgroundColor":"#c0f"})
  // str.parents("#first").css({"padding":"0.2rem","border":"1ox solid #333"});  // 본인만?
  // str.parentsUntil('#first').css({'padding':'0.2rem','border':'1px dotted #99f'}) // 본인을 제외한 밑에 자식요소에 줌
  //parentUntil() 괄호안에 값을 입력하지 않으면 모든 str 태그 이상의 부모 요소 모두에게 값을 준다
  
  str.closest('#first').css({'padding':'0.2rem','border':'3px dotted #99f'})
  //closest 괄호안에 값을 입력하지 않으면 아무것도 적용되지 않음. parent보다 많이 사용하지만, parent를 권장한다고한다

  /*
  parent() : 부모만(값을 작성하지 않아도 동작)
  parents('selector') : 부모이자, 조상에 해당하는 요소, 선택 값을 작성하면 선택요소만
  parentsUntil('selector') : parents와 기본은 같은 내용, 선택 값을 작성하면 선택요소 자식까지
  closest('selector') : 값이 없으면 동작하지 않음, 선택값을 작성하면 선택요소만 적용 (1.8ver 까지)  
  */


  //자식 : children
  //자손 : find
  //인접형제(동생) : next;
  //형제(동생들) : nextAll
  
  //부모 : parent
  //조부모(그 위로 포함) : parent, parentsUntil, closest
  //형제(바로 위 형):prev
  //형제(형들) : prev;
  //g형제(형들) : prevAll
  //다른형제(나를제외) : sibling

})(jQuery);
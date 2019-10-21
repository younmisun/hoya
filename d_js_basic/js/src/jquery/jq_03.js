//jq_03.js

(function($){

$('#myBox').css({'width':'80%','height':'200px','margin':'auto','backgroundColor':'#ddd'});

//생성(요소, 값)
  /*
  ES6 기반의 코드
  const myBox = document.querySelector('#myBox');
  const myh2 = document.createElement('h2');
  let h2Text = document.createTextNode('jquery text 생성하기');
  myh2.appendChild(h2Text);
  myBox.appendChild(myh2);
  */
 
  const myBox = $('#myBox');
  myBox.append('<h2></h2>');
  const myh2 = myBox.children('h2'); //자식인지 알면 children을 쓰고 myBox안에 있지만 잘 모르겠으면 find
  myh2.text('<i>jquery를 통해 글자를 생성하였습니다<i> text()!')
  //append를 넣어도 괜찮지만 내용이 텍스트일경우에는 text를 써도 된다.(text를 넣을 경우에는 안에 태그요소를 넣어도 적용되지 않고 글자 그대로 나타남)

  //html(), append(), prepend(), appendTo(), prependTo(), before(), after(), text()

  // myBox.html('<p>요소를 생성하였습니다</p>')
  //내용이 있는 상태에서 사용할 경우는 이전에 있던 내용이 사라지면서 새로 내용이 추가됨. 내용을 파악할 때 사용하기도 한다.

  /*
  let con = myBox.html(); //내용을 파악할 때, 태그한 내용까지 다 가져온다.
  console.log(con);
  */

  myBox.append('<p>기존요소를 두고 뒤에 내용을 추가한다!!! append() </p>');
  // myBox.prepend('<p>기존요소를 두고 앞에 내용을 추가한다!!! prepend() </p>');

  // let myt = $('h2');
  // myt.appendTo(myBox);
  // myt.prependTo(myBox);

  // append, prepend, appendTo, prependTo : 값을 내부에 삽입하는 기능, 해당요소를 만들어서 삽입 또는 기존의 요소를 끌어와서 삽입하는 기능
  // To가 붙으면, 주어의 위치가 바뀌는 것을 의미한다

  // before, after
  //  myBox.before('<div class="beforeBox"></div>');
  //  myBox.after('<div class="afterBox"></div>');

  //  let myBefroe = myBox.before();
  //  let myAfter = myBox.after();
  //  console.log(myBefore,myAfter)

   // 확인(크기, 속성)
   // width(), height(), innerWidth(), outerWidth(), outerWidth(true), innerHeight(), outerHeight(), outerHeight(true);
   // 위와 유사 : css('width'), css('height')

   //parseInt(),parseFloat();

   const resultBox = $('#resultBox');
/*    
   let resultWidth = resultBox.width(); // padding, border를 제외한 width의 값
   console.log(resultWidth);
   let resultinnerWidth = resultBox.innerWidth(); //padding 값을 포함한 width
   console.log(resultinnerWidth);
   let resultouterWidth = resultBox.outerWidth(); //border값을 포함한 width
   console.log(resultouterWidth);
   let resultoutertrueWidth = resultBox.outerWidth(true); // border 값을 포함한 width
   console.log(resultoutertrueWidth); //margin 값을 포함한 가로값 */
   
/*   let resultBoxWidth = resultBox.css('width');
  let resultPaddingWidth = parseInt(resultBox.css('paddingLeft') + resultBox.css('paddigRight'));
  let pasWidth = parseInt(resultBoxWidth)+resultPaddingWidth;
  console.log(pasWidth) */
  /* console.log(resultBoxWidth);
  let pasWidth = parseInt(resultBoxWidth);
  console.log(pasWidth); */
  
  let url = "http://www.naver.com";
  resultBox.attr({'class':'adC', 'data-class':'http://www.naver.com'});
  // console.log(myat);

  resultBox.on('click', function(){
    // resultBox.after('<a href="'+url+'">클릭하면 이동합니다.</a>');
    resultBox.after(`<a href="${url}">클릭하면 이동합니다.2s</a>`);
    resultBox.removeAttr('id');
  });

   //변경,삭제
     //myBox.empty();  //선택하는 것 제외 내부의 기능을 삭제
     //myBox.remove(); //선택한것을 그대로 삭제

  //jquery 기초개념 : 메소드 체인, 콜백
   /*  메소드 체인 : 하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 것
    $().find().animate();  */

   /*  콜백 함수 : 하나의 함수내에서 다시 함수를 호출하여 사용하는 기능
    $().animate({}, function(){
    $().animate({}, function(){
      $().animate({}, function(){
        $().animate();
      });
      });  */

  // Event 이벤트
  // show(), hide(), fadeIn, fadeout, slideUp, slideDown, toggle, hasClass..... 찾ㅇ ㅏ보기..!
})(jQuery);


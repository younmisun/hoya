// slide_04.js

(function($){
  // 이미지경로,이미지파일명
  const url = "../img/"

  let imgList;
  $.ajax({
    async:false,
    // type:'data 공개 방식'
    type:'GET', //공개
    url:'../data/slide_04.json', //html 위치 기준
    dataType:'json',
    error:function(){console.log('data error');},
    success:function(data){
      imgList = data;
      return imgList;
    }
  });

  console.log(imgList);
  //-----------------------------------
  //기본선택자 및 내용(기본틀) 생성
  const slide04 = $('#viewBox_04');
  slide04.append('<div class="slide_form"></div>');
  const slideForm = slide04.children('.slide_form');
  slideForm.append('<ul></ul>');
  const slideGuide = slideForm.children('ul');
  // slideGuide.append('<li class="slide_4th_01"></li>');

  let imglen = imgList.length;
  let slideCon = '<dl><dt></dt><dd class="con"></dd><dd class="link"><a href=""></a></dd></dl>';

  for(let i = 0; i < imgList.length ; i++){
    slideGuide.append(`<li class="slide_4th_0${i+1}"></li>`);
    let li_nth = slideGuide.children('li').eq(i);
    li_nth.text(imgList[i].title);
    li_nth.html(slideCon); //html은 기존에 있던 내용을 삭제하고 내용을 기입한다는 것, append를 사용해도 괜찮음
    li_nth.css({'backgroundImage':`url(${url+imgList[i].bgimg})`});
    // 혹은 li_nth.css({'backgroundImage':"url("+ url + imgList[i]+")"});

    li_nth.find('dt').text(imgList[i].title);
    li_nth.find('.con').text(imgList[i].content);
    let link = li_nth.find('.link').children('a');
    link.text(imgList[i].linkTest);
    link.attr({'href':imgList[i].link,'target':'_blank'});
  }

  let cloneLi=slideGuide.children('li').eq(-1).clone(true);
  cloneLi.prependTo(slideGuide); // 혹은 slideGuide.prepend(cloneLi);
  
  imglen++; //li마지막요소 추가하여 갯수 다시 파악
  const slide4thLi = slideGuide.children('li');

    slideGuide.css({'width':100 * imglen+'%'});
    slide4thLi.css({'width':100 / imglen+'%', 'boxSizing':'border-box','border':'1px solid #5ff'});

  // ----------------------------------------------------------------------------------------
  
  // 버튼요소 만들기
  
  slide04.prepend('<div class="slide_btn"></div>');
  const slideBtn = slide04.children('.slide_btn');
  slideBtn.append('<button type="button" class="next"><span>다음내용</span></button>\
  <button type="button" class="prev"><span>이전내용</span></button>');
  //button에 type을 빼고 넣으면 submit으로 자동생성됨
  const btn = slideBtn.children('button');
  // const nextBtn = slideBtn.find('.next');
  // const prevBtn = slideBtn.find('.prev');
  
  slide04.css({'position':'relative'})
  slideBtn.css({'position':'absolute','top':'-50px','left':'0'});
  btn.css({'width':'100px','height':'30px'});
  btn.eq(0).css({'float':'right'});
  btn.eq(1).css({'float':'left','marginRight':'30px'});
  
  //직접 css를 주지 않고 html head부분에 style 태그를 만들어서 css를 적용시킬 수도 있다. 위에 제시된 것과 다른 방법!
  /* $('head').find('title').after('<style></style>')
  const style = $('style');
  style.text('#viewBox_04{position:relative;}') */
  
  
  // ----------------------------------------------------------------------------------------

  //생성된 버튼을 이용하여 좌우 슬라이드 기능 수행
  // btn.on('click',function(e){
  //   e.preventDefault();
  //   $(this).index() == 0;
  // });

  let num = 0;

 /*  // next 버튼 클릭 
  btn.eq(0).on('click',function(e){
    e.preventDefault();
    num ++;
    //조건문 ------------------------------
    if(num >= imglen-1){ 
      slideGuide.css({'left':'100%'});
      num=0;
    }
    // ----------------------------------
    slideGuide.stop().animate({'left':-100 * num + '%'},600);
  });


  // prev 버튼 클릭
  btn.eq(1).on('click',function(e){
    e.preventDefault();
    num --;
    slideGuide.stop().animate({'left':-100 * num + '%'},600,function(){
      if(num <= -1){
        num = imglen-2; //6개중에 4번째 자리에 위치해 있기 때문에 -2
        slideGuide.css({'left':-100 * num + '%'},600);
      };
    });
  }); */

  //next, prev 버튼을 하나로 구현
  btn.on('click',function(e){
    e.preventDefault();
    if($(this).index() == 0){//btn안에 eq(0)번째 라면(js에서는 숫자의 시작이 0,1...그러므로 next버튼이 0번째니까)
      num++ //num을 1씩 증가하고 (결국 이건 nextBtn)
      if(num >= imgLen-1){slideGuide.css({'left':'100%'});
         num=0;}
    }else{ //아니라면 
      num--; //num 1씩 감소해라 (결국 이건 prevBtn)
      }
    slideGuide.stop().animate({'left':-100 * num + '%'},600,function(){
      if(num <= -1){num = imglen-2; //만약 num의 숫자가 -1보다 작거나 같다면(현재 위치가 0번째에서 -1로, 그리고 -1에서 뒤로 또 넘어갈 때)
         slideGuide.css({'left':-100 * num + '%'},600);}
        });
  });
  
})(jQuery);
(function($){
  const wrap = $('#wrap');
  const myForm = wrap.find('.mouse_form');
  const myLocation = wrap.find('.mouse_location');

  let url='../../img/flower/';
  // myForm.css({backgroundImage:`url(${url}gear_01.png)`});
  let j = 0;
  for(let i=0; i < 50; i++){
    if(i < 9){ j= '0'+ (i+1);
    }else if(i < 100){j = (i+1);
    }else{ j = (i+1); }
    myForm.append(`<img src="${url}gear_${j}.png" alt="이미지 삽입">`);
  }
  const myImg = myForm.find('img');
  myImg.parent().css({position:'relative',overflow:'hidden'});
  myImg.css({position:'absolute',top:0,left:0});
  myImg.eq(0).siblings().hide();


  myLocation.on('mousemove',function(e){
    let mv = e.originalEvent.offsetX;
    let thisWidth = $(this).outerWidth();
    // console.log(mv)
    let myi = Math.floor(mv / thisWidth * 50); // 사진이 01부터 시작함으로 0부터 시작하는 js숫자를 바꾸기위해 +1를 넣어줌
    // 현재 마우스에 위치한 값 / 지정한 박스의 크기 값 / 넣을 사진 갯수 -> Math.floor는 정수값으로 변환하기 위해 넣어줌
    myImg.eq(myi).siblings('img').hide();
    myImg.eq(myi).show();

 
    
    myForm.css({backgroundImage:`url(${url}gear_${j}.png`});
    // myForm.css({backgroundImage:'url('+url+'gear_'+i+'.png'});
    //vw = 현재의 브라우저의 값 / 전체값 * 100
    

  })
  

})(jQuery);
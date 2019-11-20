(function($){
  /*
  let myarr = [];
  let mypush = [11,'aa',900];
  myarr.push(10); //배열요소에 어떤 것을 뒤에 추가하는 기능
  myarr.pop();   //배열요소 중 마지막 부분의 배열을 삭제하는 기능
  // myarr.shift(); //배열요소 중 앞 부분의 배열을 삭제하는 기능
  // myarr.unshift(); //배열요소 앞부분에 내용을 추가하는 기능
  let myarrPush = myarr.concat(mypush); //하나의 배열과 또다른 배열을(두개의 배열을 합친다) 합치는 기능
  console.log(myarrPush);
  */

 const htmlEl = $('html,body');
  const wrap = $('#wrap');
  const scrollEl = wrap.find('.scroll');
  
  $('html, body').scrollTop({myscrollTop:0}); //사이트 접속시 최초의 위치(맨 상단)
  let myscrollElTop = [];
  let scrollLen = scrollEl.length;
  let timed = 500;
  
  for(let i=0; i<scrollLen; i++){
    let scTop = scrollEl.eq(i).offset().top;
    myscrollElTop.push(scTop);
  } // 해당하는 엘리먼트들이 어느 위치에 있는지 파악하기 위해 하는 반복문
    // (미리 html에서 파악하고자 하는 엘리먼트에 같은 class('.scroll')를 부여한 상태)
  //console.log(myscrollElTop);

  
  let myStatus = true,n,useN=0;
  const ScrollMagic = function(){
    htmlEl.animate({scrollTop:myscrollElTop[useN]},timed,'easeInOutExpo',function(){myStatus=true;})};

  //--------------------------------------------------------------------------------------
  $(window).on('mousewheel DOMMouseScroll',function(e){
    // e.preventDefault(); 
    // console.log(e.detail);


    if(e.originalEvent.wheelDelta){
      n = e.originalEvent.wheelDelta * -1;
    }else{
      n = e.detail * 40;
    }

  
 
  //양수와 음수로 숫자를 파악하여 마우스 휠을 움직였을 때 값을 파악한다. 맥과 PC와는 다르기 때문에 맥으로 사용할 경우
  //위로가면 플러스 아래로가면 마이너스로 나타나게 되는 상황(PC는 위로가면 마이너스, 아래는 플러스로 변함)
  
  //--------------------------------------------------------------------------------------
  //최초의 스크롤 위치값 설정
  if(myStatus){
    myStatus = false;
    //상태를 강제적으로 바꾸기 위해 하는 명령문, 마우스 패드같은 경우에는 괜찮은데(?) 갑자기 밑으로 미친듯이 내려갈 수도 있기 때문
    
    if(n>0){
      useN++; 
      if(useN >= scrollLen){useN = scrollLen-1;} //최대, 최소값을 설정해줘야 계속 반복해서 스크롤 기능이 먹힘
      ScrollMagic();
    }else{
      useN--;
      if(useN<0){useN=0;}
      ScrollMagic();
    }
  }
}); //마우스 휠

  //--------------------------------------------------------------------------------------
  const gnb = $('#gnb');
  const gnbUl = gnb.find('ul');
  const gnbLi = gnbUl.find('li');
  const gnbLink = gnbLi.find('a');
  
  gnbLink.on('click',function(e){
    e.preventDefault();
    // let thisLink = $(this).attr('href'); //경로가 있어야 가능
    // let thisOffset = $(thisLink).offset().top;
    useN = $(this).parent('li').index();
    ScrollMagic();
  })
  
  //--------------------------------------------------------------------------------------
  // 트랙패드(터치패드) 사용시 (노트북 아랫단에 있는 마우스 대용으로 사용하는 것)
    let startP, endP;
    $(window).on('touchstart',function(e){ //터치패드에 손가락을 대는 순간 touch start
      startP = e.originalEvent.touches[0].pageY;
    }); //touchstart 
    
    $(window).on('touchmove',function(){
      htmlEl.animate({scrollTop:myscrollElTop[useN]},0);
    }); //손가락을 대고 드래그를 하는 순간
    
    $(window).on('touchend',function(e){ //터치패드에 손가락을 떼는 순간
      endP = e.originalEvent.changedTouches[0].pageY;

      if(myStatus){
        myStatus = false;
        //상태를 강제적으로 바꾸기 위해 하는 명령문, 마우스 패드같은 경우에는 괜찮은데(?) 갑자기 밑으로 미친듯이 내려갈 수도 있기 때문
        
        if(startP<endP){
          useN++; 
          if(useN >= scrollLen){useN = scrollLen-1;} //최대, 최소값을 설정해줘야 계속 반복해서 스크롤 기능이 먹힘
          ScrollMagic();
        }else{
          useN--;
          if(useN<0){useN=0;}
          ScrollMagic();
        }}
      
    }); //touchend


  /*   if(myStatus){
      myStatus = false;
      //상태를 강제적으로 바꾸기 위해 하는 명령문, 마우스 패드같은 경우에는 괜찮은데(?) 갑자기 밑으로 미친듯이 내려갈 수도 있기 때문
      
      if(endP<startP){
        useN++; 
        if(useN >= scrollLen){useN = scrollLen-1;} //최대, 최소값을 설정해줘야 계속 반복해서 스크롤 기능이 먹힘
        ScrollMagic();
      }else{
        useN--;
        if(useN<0){useN=0;}
        ScrollMagic();
      }
    } */
   
})(jQuery);
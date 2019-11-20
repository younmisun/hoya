//slideAll_viewBox.js

(function($){
  const viewBox = $('#viewBox'); //viewBox 변수생성
  const slideForm = viewBox.find('.slide_form'); //slideForm 변수생성
  const slideWrap = viewBox.find('.slide_wrap'); //slideWrap 변수생성
  let slideEach = slideWrap.children('div'); // slideEach 변수생성

  slideEach.eq(-1).clone(true).prependTo(slideWrap); //slideEach 마지막요소 복제(기능모두다)하고 이를 slideWrap 변수 뒤에 붙인다.
  slideEach = slideWrap.children('div'); //slideEach 재정의(앞전에 생성했던 것과 현재 재정의를 한 변수는 복제로 인해 갯수가 달라져 재정의를 내려야함)
  let slideLen = slideEach.length; // slideLen 임시변수지정 (slideLen은 slideEach의 길이다(갯수))
  //console.log(slideLen);

  slideWrap.css({width:100 * slideLen + '%', marginLeft:'-100%'}); // slideWrap에 css기능 부여
  slideEach.css({width:100 / slideLen + '%'}); //sldieEach에 css 기능부여
  slideForm.css({overflow:'hidden'}); //slideForm에 css 기능부여(화면상에 보여주고 싶은 것만 보여지도록 나머지부분은 hidden처리)


  // 버튼부 생성 =======================================================
  // 좌/우 버튼
  const slideBtn = function(rel){ //slideBtn 변수생성
    if(rel){
      slideForm.before('<div class="viewBtn">\
      <button type="button" class="next">\
      <i class="fas fa-skull"></i>\
      <span>다음내용보기</span>\
      </button>\
      <button type="button" class="prev">\
      <i class="fas fa-gifts"></i>\
      <span>이전내용보기</span>\
      </button>\
      </div>');}
    };
    
    slideBtn(true); //slideBtn 실행시키기
    
  // 인디케이터 생성 =======================================================
  
  slideForm.before('<ul class="indicator"></ul>'); //slideForm 이전에 ul(class="indicator") 생성
  const indi = viewBox.find('.indicator'); //indi 변수생성(앞전에 생성한 ul 속 모든 li)
  for(let i=0; i < slideLen-1; i++){
  //반복문, let i는 0, i가 slidenLen-1보다 작으면, for문안에 제시된 것들이 충족될 때까지 i는 1씩 증가한다.
  //slideLen에 -1을 붙인이유 : Line 9에 복제한 하나의 요소는 인디케이터가 필요 없기 때문
  indi.append('<li><a href="#"><span></span></a></li>');
  //indi안에 slideLen-1만큼 '<li><a href="#"><span></span></a></li>' 생성, indi 갯수가 추가되면 될수록 이 요소도 같이 생성된다
  let indiLi = indi.children('li').eq(i); //indiLi 변수 생성(indi속 각각의 li)
  indiLi.find('span').text( slideEach.eq(i+1).text() );
  //indiLi 속 'span' 속성을 찾아서 slideEach('div')에 있는 text 내용을 li에 넣어라
  //eq(i+1)인 이유 : 현재 slideEach에 마지막 div요소를 복제하고 앞에 배치했기 떄문에 eq(i)만 할 경우 그 복제한 요소안에 있는 텍스트가 보이게 됨
  indiLi.find('span').css({display:'block',width:0,height:0,overflow:'hidden'});
  //indiLi 속 'span' 속성을 찾아서 css를 부여하라
  //slideEach를 복제하였기 때문에 div속에 있는 텍스트가 보여지고 있기 때문에 overflow:hidden처리
}

const indiLi = indi.children('li');
// for문 안에서 지정한 변수일 경우 오직 for문에서만 사용이 가능하기 때문에 대부분 for문에서는 let으로 변수를 지정한다.
// 그러한 이유로 for문에서 지정되고 만들어진 요소들을 for문 밖에서 사용하고 싶을 경우 다시 재정의를 해주어야 다시 사용이 가능하다

indiLi.eq(0).addClass('action'); //indiLi의 첫번째 요소에 action이라는 클래스를 부여
// .action{width: 100px;} , 현재 인디케이터의 형태는 보여지는 광고영역부분이 가로로 100px 늘어나있고, 나머지 선택되지않은 부분이 원형으로 되어있음
// 첫번째 인디케이터는 버튼을 처음부터 클릭하지 않아도 보여져 있기 때문에 다른 인디케이터와 다르게 원형으로 되어있지 않고 늘어나져있어야하기때문에
// addClass('action')을 부여함

// --------------------------------------------------
// 좌우 버튼 클릭시 이동
let n = 0; // 'n은 0이다' 변수 생성
const viewBtn = viewBox.find('.viewBtn').find('button'); //viewBtn 변수생성
//(현재 만들어진 버튼의 갯수는 2가지, 각각 버튼의 클래스 이름은 'prev'와 'next')

viewBtn.on('click', function(e){ //viewBtn을 클릭했을 경우의 상황
  e.preventDefault(); //button은 기본적으로 이벤트가 있는 요소이기때문에 어떤 상황을 부여하고자 할 때 이전의 이벤트 요소를 제어해줘야함. 제어명령문
  let has = $(this).hasClass('next'); //viewBtn에서 가지고 있는 'next' 클래스를 has의 변수로 정의
  
  /* 버튼을 클릭했을 때의 상황, if의 상황 (n >= slideLen-1) 이 아닐 경우에는 if문을 지나쳐 86번째 줄을 행하는 것임 */
  if( has ){ // 다음 버튼 클릭 //if문, 만약 has일 경우(next버튼 일 경우)
    n++; // n을 1씩 증가시켜라(다음으로 넘어간다)

    if(n >= slideLen-1){ n = 0; // 만약 n이 slide ('div'갯수, 광고영역)갯수보다 크거나 같아질 경우 n의 갯수를 초기화 시키고(0),
      slideWrap.css({left: '100%'}); // slideWrap에 margin-left는 100%가 되게 하도록 한다
      //(초기 css에서 설정한 left 값은 slide에서 복제된 다섯번째 div때문에 -100%로 설정되어 있음)

    }    
  }else{// 이전 버튼 클릭 //has(nex버튼)이 아닐 경우
    n--; //n을 1씩 감소시켜라(이전으로 넘어간다)
  }  
  
  slideWrap.animate({left: -100 * n +'%'}, function(){ // viewBtn을 클릭했을 경우의 애니메이션효과로 왼쪽으로 100*n % 이동, 이때 
    if(n <= -1){ //만약 n의 크기가 -1보다 작거나 같게되면 (첫번째 화면에서 마지막화면으로 넘어가려고했을 경우(첫번째화면에서 이전버튼 클릭))
      n = slideLen-2; //n은 slideLen-2 위치로 가고(복제된 slide가 첫번째 상황(-1), 그보다 뒤로 가야하기 때문에(-1) = -2)
      slideWrap.css({left:-100 * n +'%'}); //그와 동시에 slide의 left 위치는 -100 * n으로 이동하여라
      //(slideLen-2=4), 마지막 광고 left 위치 '-400%' => 마지막 div위치로 이동
      //혹은 현재 우리가 가고 싶은(첫번째광고에서 마지막위치) 위치는 left : -400% 이기 때문에 현재 slide 갯수 - 2 를 하게 될 경우(6-2)
      //4의 값을 가지기 때문에 slideLen-2를 준다고 생각하면 됨
    }   
  });
  
  indiLi.eq(n).siblings().removeClass('action'); // 위와 동시에 선택된 indiLi n번째를 제외한 나머지 Li요소에는 action 클래스를 제거하고,
  indiLi.eq(n).addClass('action'); // 선택된 indiLi n번째 li 요소에는 action 클래스를 부여한다
  
}); // viewBtn.on('click')

// ----------------------------------------------
// 인디케이터 선택시
indiLi.children('a').on('focus' ,function(e){ //indiLi의 자식 'a'에 포커스가 맞춰질 경우
  e.preventDefault();
  n = $(this).parent('li').index(); // n은 'a'의 부모요소인 li의 내용
  
  slideWrap.animate({left: -100 * n +'%'}); //slideWrap은 애니메이션효과로 왼쪽으로 -100 * n % 크기만큼 이동하여라
  indiLi.eq(n).siblings().removeClass('action'); //그와 동시에 indiLi에서 선택된 n번째를 제외한 형제요소에 action 클래스를 제거하고
  indiLi.eq(n).addClass('action'); //indiLi에서 선택된 n번째에게는 action요소를 부여한다.
  
  // a 클릭시 해당하는 광고배너로 포커스처리하게 만들어라
  $(this).on('click', function(e){ //'a'를 클릭할 때
    e.preventDefault(); 
    slideEach.eq(n+1).find('a').focus(); //slideEach(div)에서 선택된 n번째+1요소에 있는 a에 포커스를 주어라?
  });
  
});// indiLi.children('a').on('focus')

  
  

})(jQuery);
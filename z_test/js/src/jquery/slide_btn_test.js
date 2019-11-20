(function($){

  const slide = $('#miniProduct');
  const product = $('.product');
  const productUl = product.find('ul');
  let productLi = productUl.find('li');
  
  //버튼생성

  slide.prepend(
    '<div class="btn">\
    <button type="button" class="next"><i class="far fa-hand-point-right"></i><span>다음내용보기</span></button>\
    <button type="button" class="prev"><i class="far fa-hand-point-left"></i><span>이전내용보기</span></button>\
    </div>');
  
  const btn = $('.btn').find('button');

  //혹은 let btnIn = '<div........ <-slide.prepend 안에 있는 내용을 넣고
  //slide.prened(btnIn) 해도 됨!

  

  //가로형 슬라이드 기능
  const HorizonSlide = function(){

  productLi.eq(-1).clone().prependTo(productUl);

  productLi = productUl.find('li');

  let productLen = productLi.length;
  productUl.css({'marginLeft':'-100%', 'width':100*productLen + '%','position':'relative','left':0});
  productLi.css({'width':100/productLen + '%'});


  let i = 0; //임의의 숫자가 버튼을 움직이게 만들게 만들어야함
  //--------------
  btn.on('click',function(e){
    e.preventDefault();

    let btnL = $(this).hasClass('next');
    if(btnL){ //다음버튼 | 만약 next 버튼이라면
      i++; // i는 증가하고
      if(i>=productLen-1){ //만약 마지막버튼에서 첫번째로 넘어가기위해 next 버튼을 누르게되면
        productUl.css({left:100+'%'}) // Ul은 복제되었던 클론 li로 이동하고
        i=0; // i의 값은 다시 초기값(0)이된다
      }
      productUl.animate({'left':-100 * i + '%'}); // 그와 동시에 다시 left -100%으로로 이동한다

    }else{ //이전버튼 | 이전버튼을 누르면
      i--; // i는 감소한다
      productUl.animate({left:-100 * i +'%'},function(){ 
        if(i<=-1){
          productUl.css({left:-100 * (productLen-2) +'%'});
          i = productLen-2;
        }
      });
    }
  });

  }; //HorizonSlide
  
  //세로형 슬라이드 기능
  const VerticalSlide = function(){

  productLi.eq(-1).clone().prependTo(productUl);
  productLi = productUl.find('li');

  let productH = product.outerHeight(); //outer를 추가할 경우 border를 포함한 height값
  let productLen = productLi.length;

  productUl.css({width:'100%',height:100*productLen+'%',
                 /* position:'absolute', marginTop:-produchH */
                 transform:`translateY(${-productH}px)`,
                 position:'relative',left:0,top:0});
  //marginTop을 쓸 경우 position처리하지 않은 요소는 부모값까지 따라 위로 올라감,
  //그리고 marginTop,bottom같은건 브라우저값을 기준으로 움직여서 사용을 권하지 않는다
  productLi.css({width:'100%',height:productH});

  let i = 0; //on('click',function...)에 넣게될 경우 버튼을 누를 때 마다 let이 0으로 계속 변환하기 때문에

  btn.on('click',function(e){

    e.preventDefault();
    let btnL = $(this).hasClass('next');

    
    if(btnL){ //next
      i++;
      if(i>=productLen-1){
        productUl.css({'top':productH+'px'});
        i=0;
      }
      productUl.stop().animate({'top':-productH*i+'px'});
    }else{ //prev
      i--;
      productUl.stop().animate({'top':-productH*i+'px'},function(){
        if(i<=-1){
          i=productLen-2;
          productUl.css({'top':-productH*i+'px'});
        }
      });
    }

    });
  }; //VerticalSlide
  
  
  //간단하게 화면만 바뀌는 기능
  const BasicSlide = function(){
    let productLen = productLi.length;
    let i = 0;

btn.on('click',function(){
  let btnL = $(this).hasClass('next');
  if(btnL){
    i++;
    if(i>=productLen){i=0};
  }else{
    i--;
    if(i<=-1){i=productLen-1};
  }
  productUl.css({marginLeft:-100*i+'%'});
})
  };

  //z-index기능을 통해 fadeIn 처리되게 만들기
  const ZindexSlide = function(){
  
  productUl.css({'position':'relative',width:'100%'});
  productLi.css({'position':'absolute',width:'100%'});

  productLi.eq(0).nextAll().hide(); //sibling해줘도 됨, 위에 css를 줬으니까 li들이 한 화면에 있어 겹치게 되기 때문에

  let i = 0; //값을 변경시키기위해 하나의 임의변수를 생성
  let productLen = productLi.length;

  btn.on('click',function(e){
    e.preventDefault();
    let btnL = $(this).hasClass('next');

    if(btnL){
      i++;

      if(i>=productLen){i=0;}  
    }else{
      i--;

      if(i < 0){ //i<=-1과 같은 의미임
        i=productLen-1}
    };

    productLi.eq(i).css({'zIndex':100});
    productLi.eq(i).fadeIn(function(){
      productLi.eq(i).css({'zIndex':0});
      //fadeOut에 값을 주어도 상관없음, fade In,Out이 동시에 일어나고 모든 z-index값은 0이 되기 때문에
    });
    productLi.eq(i).siblings().fadeOut();

  });

  };

product.css({overflow:'hidden'});

// ZindexSlide();

const slideList = {
  basic : BasicSlide,
  fade : ZindexSlide,
  horizon : HorizonSlide,
  vertical : VerticalSlide
};


  
})(jQuery); //$.fn.mySlide

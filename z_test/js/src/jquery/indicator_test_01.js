(function($){
  const miniProduct = $('#miniProduct');
  const indicator = miniProduct.children('.indicator');
  const indiLi = indicator.children('li');
  const indiLink = indiLi.children('a');
  let indiLiLen = indiLi.length;

  const adverBanner = miniProduct.find('.product').children('ul');
  const adverNth = adverBanner.children('li');

  adverNth.find('a').attr({'tabIndex':-1});

  indiLi.eq(0).addClass('active');
  
  let i = 0;
  indiLink.on('focus', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    adverBanner.animate({marginLeft:(-100*i)+'%'});

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');

    $(this).on('keyup',function(e){
      e.preventDefault();
      if(e.keyCode == 13){
      adverNth.eq(i).children('a').focus();
    }
    });
  });

  //  자동슬라이드

  let go, timed=1000;
  const slideGo = function(){
  go = setInterval(function(){
    i++
    if(i>=indiLiLen){i=0;}
    adverBanner.animate({marginLeft:(-100*i)+'%'});
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');

  },timed); //일정시간마다 
  };

  const slideStop = function(){
  clearInterval(go); //setInterval을 취소한다
  
} ;

slideGo();


miniProduct.on('mouseenter',function(){
  slideStop();
})
miniProduct.on('mouseleave',function(){
  slideGo();
})



//next prev 버튼 만들기

miniProduct.prepend('<div class="btn"></div>');
const btnArea = miniProduct.children('.btn');

btnArea.append('<button type="button" class="next"><i class="far fa-hand-point-right"></i></button>\
<button type="button" class="prev"><i class="far fa-hand-point-left"></i></button>');

const btn = btnArea.find('button');

let n = 0;

btn.on('click',function(){

  let has = $(this).hasClass('next');

  if(has){
    n++;
    if(n>=indiLiLen){ n=0;
     // adverBanner.css({left:'100%'});
    }

  }else{
    n--;
    //adverBanner.css({marginLeft:(-100*n)+'%'});
    if(n <= -1){n=indiLiLen-1;}
  }

  adverBanner.animate({marginLeft:(-100*n)+'%'});
  indiLi.eq(n).addClass('active');
  indiLi.eq(n).siblings('li').removeClass('active');

});

// up down 버튼 만들기 

miniProduct.clone(true).attr({'id':'miniProduct_02'}).appendTo('#wrap');











})(jQuery);
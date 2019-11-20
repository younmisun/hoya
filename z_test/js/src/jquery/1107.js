
(function($){

  const wrap = $('#wrap');
  wrap.append('<div id="miniProduct"></div>');
  const miniPro = wrap.children('#miniProduct');
  miniPro.append('<ul class="indicator"></ul>\
                  <div class="product_wrap"></div>');
  miniPro.prepend('<div class="btnArea"></div>');
  const indi = miniPro.children('.indicator');
  const proWrap = miniPro.children('.product_wrap');
  proWrap.append('<ul class="product"></ul>');
  const proInt = proWrap.children('.product');
  const btnArea = miniPro.children('.btnArea');
  btnArea.append('<button type="button" class="next"></button>\
                  <button type="button" class="prev"></button>');



  const imgSrc = '../../img/img_test/'
  
  const miniList = [{indiTitle:'제품01',proTitle:'상품설명01',Link:'#',img:'img_christmas_01.jpg'},
                    {indiTitle:'제품02',proTitle:'상품설명02',Link:'#',img:'img_christmas_02.jpg'},
                    {indiTitle:'제품03',proTitle:'상품설명03',Link:'#',img:'img_christmas_03.jpg'},
                    {indiTitle:'제품04',proTitle:'상품설명04',Link:'#',img:'img_christmas_04.jpg'},
                    {indiTitle:'제품05',proTitle:'상품설명05',Link:'#',img:'img_christmas_05.jpg'},
                    {indiTitle:'제품06',proTitle:'상품설명06',Link:'#',img:'img_christmas_06.jpg'},
                    {indiTitle:'제품07',proTitle:'상품설명07',Link:'#',img:'img_christmas_07.jpg'},
                    {indiTitle:'제품08',proTitle:'상품설명08',Link:'#',img:'img_christmas_08.jpg'},
                    {indiTitle:'제품09',proTitle:'상품설명09',Link:'#',img:'img_christmas_09.jpg'}];
  
  const listLen = miniList.length
  for(let i=0; i<listLen; i++){
    let liCount = '<li><a><span></span></a></li>';
    indi.append(liCount);
    proInt.append(liCount);
    indi.find('span').eq(i).append(miniList[i].indiTitle);
    indi.find('span').attr({'class':'hidden'});
    proInt.find('span').eq(i).append(miniList[i].proTitle);
    proInt.find('span').attr({'class':'hidden'});
    indi.find('a').attr({'href':'#'});
    proInt.find('a').attr({'href':'#'});
    let proLi = proInt.find('li');
    let imgList = imgSrc + miniList[i].img;
    proLi.eq(i).css({backgroundImage:'url('+ imgList +')',backgroundRepeat:'no-repeat',backgroundSize:'cover'});
  };


  const indiLi = indi.find('li');
  const indiLiLink = indiLi.find('a');
  const proLi = proInt.find('li');

  proLi.eq(-1).clone(true).prependTo(proInt);
  

  let i = 0;

  indiLiLink.on('focus',function(e){
    e.preventDefault();

    i = $(this).parent().index();
    proInt.animate({marginLeft: -100 * i + '%'});
    //css에서 position:realtive 후 left:-100%을 주었다면, js에서 움직일 시에는 marginLeft로 값을 주어야 움직이고,
    //position을 주지 않고 margin-left:-100%를 주었다면, js에서는 left:-100%을 주어야한다.
    
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings('li').removeClass('action');

  });

  const button = btnArea.find('button');

  button.on('click',function(e){

    e.preventDefault();
    let has = $(this).hasClass('next');

    if(has){
      i++;


    }else{
      i--;
    }

    proInt.animate({marginLeft: -100 * i + '%'});


  });


  




})(jQuery);
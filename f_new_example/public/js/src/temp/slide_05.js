// slide_05.js
(function($){

  const viewBox = $('#viewBox_05');
  viewBox.append('<div id="slide_form"></div>');
  const slideForm = viewBox.children('#slide_form');
  
  
  const url = "../img/";
  const slideList = [{title:'Tasty Autumn Fruits', content:'쌀쌀한 가을날씨에 잘 어울리는 향긋한 과일티 2종',
                      linkIcon:'DETAIL VIEW', link:'#', img:'img_01.jpeg'},
                     {title:'Cream & Cheese Muffin', content:'촉촉한 크림과 치즈, 다양한 토핑이 올라간 머핀',
                     linkIcon:'DETAIL VIEW', link:'#', img:'img_02.jpeg'},
                     {title:'BTS POP-UP HOUSE OF BTS', content:'방탄소년단 팝업스토어는 폴 바셋과 함께합니다',
                      linkIcon:'DETAIL VIEW', link:'#', img:'img_03.jpeg'}
                    ];

  for(let i=0; i<slideList.length; i++){
    slideForm.append(`<div class="slide_0${i+1}"><p></p><span></span><a><i></i></a></div>`);
    let slideSection = slideForm.children('div')
    let slideSectionTitle = slideSection.find('p');
    let slideSectionCon = slideSection.find('span');
    let slideSectionLink = slideSection.find('a');
    let slideSectionLinkTitle = slideSectionLink.children('i');

    slideSectionTitle.eq(i).text(slideList[i].title);
    slideSectionCon.eq(i).append(slideList[i].content);
    slideSectionLink.eq(i).attr({'href':slideList[i].link})
    slideSectionLinkTitle.eq(i).append(slideList[i].linkIcon);

    slideSection.eq(i).css({'backgroundImage':`url(${url+slideList[i].img})`});

  };



})(jQuery);
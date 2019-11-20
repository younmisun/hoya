
(function(){

  let conBox = $('#conBox');
  const conBtn = conBox.find('button');
  const bar = conBox.find('.bar');

  conBtn.on('click',function(e){
    e.preventDefault();
    bar.toggleClass('hideBar');
    //toggleclass() : 클래스 이름을 넣고 빼고 변환하는 기능
    let view = bar.hasClass('hideBar');
    //hasClass() : class이름의 존재유(true),무(flase) 판단
    if(view){
      bar.stop(true,false).animate({width:0});
    }else{
      bar.stop(true,false).animate({width:100 + '%'});
    }
  });
})(jQuery);

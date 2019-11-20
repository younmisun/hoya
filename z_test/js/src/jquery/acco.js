// acco.js

(function($){
  const body = $('body');
  const wrap = body.find('#wrap');
  wrap.append('<div id="accordion"></div>');
  const acco = wrap.children('#accordion');
  acco.append('<dl class="accor"></dl>')
  const acoTable = acco.children('dl');
  
  const acotext = [{title:'contentTitle(1)', 
                     text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                     Dolor voluptatum voluptatibus nesciunt est voluptas soluta dolorum cupiditate cum illo dignissimos aliquid aut eveniet beatae amet aliquam et ex, quas hic!'},
                    {title:'contentTitle(2)', 
                    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                    Dolor voluptatum voluptatibus nesciunt est voluptas soluta dolorum cupiditate cum illo dignissimos aliquid aut eveniet beatae amet aliquam et ex, quas hic!'},
                    {title:'contentTitle(3)', 
                     text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                     Dolor voluptatum voluptatibus nesciunt est voluptas soluta dolorum cupiditate cum illo dignissimos aliquid aut eveniet beatae amet aliquam et ex, quas hic!'},
                    {title:'contentTitle(4)', 
                    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                    Dolor voluptatum voluptatibus nesciunt est voluptas soluta dolorum cupiditate cum illo dignissimos aliquid aut eveniet beatae amet aliquam et ex, quas hic!'}];


  for(let i=0; i<acotext.length; i++){
    acoTable.append('<dt><a href="#"><span><i class="fas fa-arrow-alt-circle-down"></i></span></a></dt><dd></dd>');
    let acoDt = acoTable.children('dt');
    let acoDd = acoTable.find('dd');
    let acoDtLink = acoDt.find('a');

    acoDtLink.eq(i).prepend(acotext[i].title);
    acoDd.eq(i).append(acotext[i].text);
  }
  
  const acoDt = acoTable.children('dt');
  const acoDd = acoTable.find('dd');
  const acoDtLink = acoDt.find('a');
  const acoI = acoDtLink.find('i');
  acoDtLink.on('click',function(e){
    e.preventDefault();
    // acoDd.slideDown();
    $(this).parent('dt').next('dd').siblings('dd').stop().slideUp();
    //acoDtLink를 클릭하면 Link의 부모 dt의 다음인 dd를 제외한 나머지 dd는 올라가고,
    $(this).parent('dt').next('dd').stop().slideToggle();

    $(this).parent('dt').siblings('dt').find('i').removeClass('fa-arrow-alt-circle-up');
    $(this).parent('dt').siblings('dt').find('i').addClass('fa-arrow-alt-circle-down');
    
    $(this).find('i').toggleClass('fa-arrow-alt-circle-up');
    $(this).find('i').toggleClass('fa-arrow-alt-circle-down');
    

  });




})(jQuery);
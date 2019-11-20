(function($){

  const wrap = $('#wrap');
  const headBox = wrap.find('#headBox');
  const mainBox = wrap.find('#contentBox');

  //head영역

  const gnb = headBox.find('#gnb');
  gnb.append('<ul></ul>');
  const gnbUl = gnb.find('ul');

  const gnbMenu = [{title:'국가인재데이터베이스소개',titleLink:'##',
                    sub:[{subtitle:'국가인재데이터베이스',subLink:'###'},
                         {subtitle:'DB등록서식 다운로드',subLink:'###'},
                         {subtitle:'공인인증서 안내',subLink:'###'},
                         {subtitle:'사이트맵',subLink:'###'}]},
                   {title:'국민추천제',titleLink:'##',
                    sub:[{subtitle:'국민추천제',subLink:'###'}]},
                   {title:'알림마당',titleLink:'##',
                    sub:[{subtitle:'공지사항',subLink:'###'},
                         {subtitle:'자주하는 질문',subLink:'###'}]}]
  
  
  for(let i=0; i<gnbMenu.length; i++){
    gnbUl.append('<li><dl><dt><a href></dt><dd></dd></dl></li>');
    const gnbLi = gnbUl.find('li').eq(i);
    let gnbLiLink = gnbLi.find('dt').children('a');
    gnbLiLink.attr('href',gnbMenu[i].titleLink);
    gnbLiLink.text(gnbMenu[i].title);

    // let gnbMenuLen = gnbMenu[i].sub.length;
    // let subLen = gnbMenu[i].sub.length;

    for(let j=0; j<gnbMenu[i].sub.length; j++){
      let gnbDd = gnbLi.find('dd');
      gnbDd.append('<a></a>');
      let gnbDdLink = gnbDd.children('a').eq(j);
      gnbDdLink.text(gnbMenu[i].sub[j].subtitle);
      gnbDdLink.attr('href',gnbMenu[i].sub[j].subLink);
    };
  };
  



})(jQuery);
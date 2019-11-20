//deabang.js

(function($){

const wrap = $('#wrap');
const headBox = wrap.children('#headBox');
const gnb = headBox.children('#gnb')

gnb.append('<ul></ul>');
const gnbUl = gnb.children('ul');

const gnbMenu = [{title:'회사소개', titleLink:'#',
                  sub:[{subttitle:'회사개요',subLink:'#'},
                       {subttitle:'CEO인삿말',subLink:'#'},
                       {subttitle:'경영이념',subLink:'#'},
                       {subttitle:'연혁',subLink:'#'},
                       {subttitle:'조직',subLink:'#'},
                       {subtitle:'CI / BI 소개',subLink:'#'},
                       {subttitle:'오시는 길',subLink:'#'}]
                    },
                  {title:'사업영역', titleLink:'#',
                   sub:[{subtitle:'분양캘린더',titleLink:'#'},
                        {subtitle:'주택/분양사업',titleLink:'#'},
                        {subtitle:'수주사업',titleLink:'#'},
                        {subtitle:'개발사업',titleLink:'#'},
                        {subtitle:'기타사업',titleLink:'#'}]
                    },
                  {title:'홍보센터', titleLink:'#',
                   sub:[{subtitle:'뉴스',titleLink:'#'},
                        {subtitle:'언론속 대방',titleLink:'#'},
                        {subtitle:'분양광고',titleLink:'#'}]
                    },
                  {title:'인재채용', titleLink:'#',
                  sub:[{subtitle:'인재상',titleLink:'#'},
                       {subtitle:'인사제도',titleLink:'#'},
                       {subtitle:'채용절차',titleLink:'#'},
                       {subtitle:'공고 및 지원',titleLink:'#'}]
                   },
                  {title:'고객센터', titleLink:'#',
                  sub:[{subttitle:'고객지원 안내',subLink:'#'},
                       {subttitle:'마감재',subLink:'#'},
                       {subttitle:'FAQ',subLink:'#'},
                       {subttitle:'관심고객등록',subLink:'#'},
                       {subttitle:'고객문의',subLink:'#'},
                       {subtitle:'하자문의',subLink:'#'}]
                   }];
                
for(let i=0; i < gnbMenu.length; i++){
  gnbUl.append('<li><dl><dt><a href="#"></a></dt><dd><a href="#"></a></dd></dl></li>');
  const gnbLi = gnbUl.children('li').eq(i);
  let gnbLiLink = gnbLi.find('dt').children('a');
  const gnb

}


})(jQuery);
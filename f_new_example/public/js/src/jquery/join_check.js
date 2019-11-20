// join_check.js

(function($){

  //form 기능에서 사용하는 jQuery method

  // val(); => value 값을 가져오는 기능
  // hasClass() 클래스 이름의 유무 판단
  // is() 어떤 상황의 기능이 되었느냐 안되었느냐의 유무 판단 / ex : is(':checked') => 체크가 되어있다면
  // prop() => 속성의 상황을 묘사해 역할을 부여한다 (property) / ex : prop('checked', true) => checked가 ture라면

  // 전체 동의란 체크 클릭 => 전체가 선택되게 만들기


  const allCheck = $('#allCheck');
  const cbSel = $('.cb_sel');
  let ck;
  
  allCheck.on('click', function(e){

    ck = allCheck.is(':checked');
    // console.log(ck);
     
    if(ck){
      cbSel.prop('checked',true);
      cbSel.attr('checked',true);
      allCheck.prop('checked',true);
      allCheck.attr('checked',true);

    }else{
      cbSel.prop('checked',false);
      cbSel.attr('checked',false);
      allCheck.prop('checked',false);
      allCheck.attr('checked',false);
    };

  }); 

  cbSel.on('click',function(){
    let idCheck = $(this).attr('id');
    let idN = $('#'+idCheck);
    let idnIs = idN.is(':checked');
    (idnIs)?idN.attr('checked',true).prop('checked',true):
    idN.attr('checked',false).prop('checked',false);
    
    /*  
    ()?참:거짓; 삼항연산자, 속도 면에서는 연산자가 더 빠름(if문보다)
    if(idnIs){
      idN.attr('checked',true).prop('checked',true)
    }else{
      idN.attr('checked',false).prop('checked',false)
    };
    */
    
    for(let i=0; i<cbSel.length;i++){
      ck = cbSel.eq(i).is(':checked');
      console.log(ck);
      if(ck == false){
        allCheck.prop('checked',false);
        allCheck.attr('checked',false);
        break; 
        // break 멈추고 빠져나가기 | continue 건너뛰기
      }else{
        allCheck.prop('checked',true);
        allCheck.attr('checked',true);

      }
    }

    // cbSel.each(function(data){
    //   ck = $(this).is(':checked');
    //   if(ck == false){
    //     allCheck.prop('checked',false);
    //     allCheck.attr('checked',false);
    //   }
    //   console.log(ck);
    // });
  });




})(jQuery);


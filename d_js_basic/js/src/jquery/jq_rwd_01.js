// jq_rwd_01.js

(function($){
  //디바이스 정의
  let mob=480, tab=768, pc=1280, laptop=1366, pcfull
  //,pcfull > 랩탑이상이 넘어가면 pcfull이 되기 때문에 굳이 정의를 내리지않아도 된다.
  let mySet = ['mobile', 'tablet', 'pc', 'laptop', 'pcfull'];
  let myfile = ['mob', 'tab', 'pcbase', 'laptop', 'pcfull'];

  //반응형 크기에 따라 불러오는 파일 정의
  //mobile, tablet, pc, laptop, pcfull
  // 
   const Wrap = $('#wrap');
   let tempFile = './rwd_temp/'

  const LoadFile = function(w){
  
    switch(w){
      case mySet[0]:
        Wrap.load(tempFile+'mob.html'); break;
      case mySet[1]:
        Wrap.load(tempFile+'tab.html'); break;
      case mySet[2]:
        Wrap.load(tempFile+'pcbase.html'); break;
      case mySet[3]:
        Wrap.load(tempFile+'laptop.html'); break;
      case mySet[4]:
        Wrap.load(tempFile+'pcfull.html'); break;

    }

  }//LoadFile



  //현재 디바이스 크기 파악하여 어떠한 정의를 내린다

  let nowDevice = null;

  const DeviceCheck = function(w){
  if(w <= mob){nowDevice = mySet[0];}
  else if(w > mob && w <= tab){nowDevice = mySet[1];}
  else if(w > tab && w <= pc){nowDevice = mySet[2];}
  else if(w > pc && w <=laptop){nowDevice = mySet[3];}
  else{nowDevice = mySet[4];}
  return nowDevice;
  // console.log(nowDevice);
  }; //DeviceCheck();
  
  const win = $(window);
  let winW = win.outerWidth();
  // console.log(winW)
  console.log(winW);

  let beforeDevice = DeviceCheck(winW);
  LoadFile(beforeDevice);
  // console.log('beforeDevice',beforeDevice);

  win.on('resize',function(){
    let nowWinW = win.outerWidth();
    let afterDevice = DeviceCheck(nowWinW);

    // console.log(nowWinW);

    if(winW !== nowWinW && beforeDevice !== afterDevice){
    // console.log(afterDevice);
    location.reload();
    } //reload() 할 경우 가로 세로 모두가 변경될 때마다 새로고침이 되기 때문에 if 명령문을 넣어주어 가로값이 변경되었을 때만 변하도록 해준다.

  })

  
})(jQuery);
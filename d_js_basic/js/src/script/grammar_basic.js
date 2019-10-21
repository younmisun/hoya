// grammer_basic.js
// javascript 기초 이해하깅

/** 문법  
 * 조건문 : 특정한 조건을 이용하여 해당 조건이 참이면 수행하고, 거짓이면 수행하지 않도록 처리하게 만드는 것
 * 반복문 : 2번 이상의 반복 수행할 경우, 단순 반복하여 수행하게 하는 것이 아니라, 자동으로 수행하도록 처리
 */

//  조건문 - 단순분기(하나의 조건을 기준으로 참/거짓) if~else, 다수분기(다양한 조건 중에 하나) switch


// var myNum=function(par)){
// var i = par;
// var text;

// if(i < 10){
//   text="주어진 숫자는 10보다 작은 수 입니다.";}
//   else if(i===10){text="주어진 숫자는 10입니다.";}
//   else {text="주어진 숫자는 10보다 큰 수 입니다.";}


//   return console.long(text); };

// myNum(10);


/* var i = 10;
switch(i) {case 1:text = "숫자는 1입니다";
          break
          default:
          text="보다 큰 수 입니다";
          break;}

console.log(text); */

// switch case, break, default

/* var coffee = 'americano';
var text;
var menu = ['americano','latte','mocha']

switch(coffee){
  case menu[0]: text='아메리카노'; break;
  case menu[1]: text='라떼'; break;
  case menu[2]: text="모카"; break;
  default : text='주스'; break;
    }
console.log(text);
 */

var myMenu = function(){
let coffee, text, menu;
menu = ['americano','latte','mocha','vanilla','esspresso'];
coffee = prompt('원하시는 메뉴를 입력해주세요 \n 메뉴:'+menu);

switch(coffee){
  case menu[0]: text='아메리카노'; break;
  case menu[1]: text='라떼'; break;
  case menu[2]: text="모카"; break;
  case menu[3]: text="바닐라"; break;
  case menu[4]: text="에스프레소"; break;
  
  default : text='주스'; break;
    }

console.log(text);
let myP = document.getElementsByTagName('p')[0];
myP.innerHTML = text;
  };



var myBtn = document.getElementById('coffeeMenu');
myBtn.addEventListener ('click', function(){myMenu();});
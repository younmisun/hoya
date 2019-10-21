//data_type_02.js

//자료형 파악하기
var i = 0;
var myType = typeof(i);
console.log(i,myType);

var s = "myText";
var myType2 = typeof(s);
console.log(s, myType2);

var is = i+s;
var myT3 = typeof(is);
console.log(myT3);

let n = undefined;
let myT4 = typeof(n);
console.log(n);

//undefined 최초의 문서를 시작
//null 한번 썼던 문서를 다시 초기화한후시작..? 몰라..

let bool = !!!true;
let myT5 = typeof(bool);
console.log(myT5);

// ===========================

var arr = ['samsung', 'lg', 'apple']; //약간 li태그
var arrT = typeof(arr);
console.log(arr[0]);
console.log(arrT);
/*
 arr = {
   0:'samsung',
   1:'lg',
   2:'apple',
 }
*/

var obj = {'samsung':'gallaxy', 'lg':'v50s', 'apple':'iphone'};
var objT = typeof(obj);
console.log(obj['lg']);
console.log(objT);


// []배열형식 {}객체형식 -> console결과는 object타입이라고 나옴
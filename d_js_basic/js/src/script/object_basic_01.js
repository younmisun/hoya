//object_basic_01.js

//javascript에서는 배열과, 객체 모두 형 타입을 object로 보고 있다.

var mic = "microphone";
var arr = [1,5,'apple','mic'];

var fruits = ['durian', 'mango', 'starfruits', 'gyul', 'ggingg-gang'];
console.log(fruits);

console.log(fruits[2]);

var drink = [['에스프레소','아메리카노','라떼'],['applejuice','kiwijuice','tomatojuice'],['blackfirst','liptone']];
console.log(drink[0])
console.log(drink[2][0])

var mydrink=drink[0];
console.log(mydrink[0]);

// ============ 

var obj = {'korea':'이순신','usa':'캡틴아메리카','india':'gandy'};
console.log(obj.korea); //객체값은 순서를 가지고 있지 않음

// window.location = "?"
// var window = {location:"?"}
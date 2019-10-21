// grammar_basic_02.js

/* 반복문
최초 - 조건 - 수행 - 연산(연산뒤에는 조건으로 돌아가서 비교해서 참이면 다시 수행, 연산)
(조건이 불합리할 때까지 계속 계산한다) */


// ================================ while () {} 

/* 잘 사용하지 않음, 계산이 정확할 때만 사용함(계산이 불확실할 경우 계산하느라고 컴퓨터가 느려짐?)

var n = 0;
console.log(n);

while(n<=100){console.log(n); n++;}

조건문을 제시했을 때 이 조건문이 거짓이 될 떄까지 계속 함. 

var n = 0;
do{console.log(n); n++;} while(n<10)
console.log(n); */

// ================================ for () {}

/*
var n = 0;
for(;n<=10;){
  console.log(n);
  n++;
}


for(let n=0; n<=10; n++){console.log(n);}
for 최초의 값과 연산하는 값을 모두 한꺼번에 처리한다
token 에러가 뜰 경우 - 문법이 맞지 않습니다.

console.log(n);

바깥에서도 알고 싶으면??????

let n = 0;
for(;n<=10; n++){console.log(n);}
console.log(n);

var보다 let을 권장, var를 사용할 경우에는 명령문 안에 있는 내용을 바깥에서도 알 수 있기 때문이다.
*/

// ================================ for-in

/* let arr = ['사과','배','바나나','오렌지','키위'];
for(var i in arr) {console.log(arr[i]);} 배열 형식에는 in 명령문을 사용하지 않는다(느려짐)

//for(let i=0; i<5; i++){console.log(arr[i]);}

let obj = {"red":"사과","yellow":"바나나","orange":"오렌지","green":"키위","purple":"포도"};
for (let i in obj) { console.log(obj[i]); } //i는 임의변수

for(let i = 0; i<10; i++){} //일반형식, 배열
for(let i in obj){} //객체일 때 사용 */

// ================================ varfor-Each() | 함수일때 사용 | [].forEach( function(){} );

/* let myArr = ['빨강','파랑','노랑','녹색','보라'];
myArr.forEach(function(data){
  console.log(data);
});

 */

 // ============================ for 테스트
 
 // var product = document.getElementById('product');

let product = document.querySelector('#product'); //카멜케이스방식?
product.style.width = "100%";
product.style.height = "auto";
product.style.minHeight = "300px";
product.style.backgroundColor = "#f96";

let ul = document.createElement('ul');

product.appendChild(ul);
ul = document.querySelector('#product>ul'); //생성은 했찌만, 선택을 하지 않았음! 선택해주는거임 이건. 다시 재정의를 하는 것임!
ul.style.width = "90%";
ul.style.height = "auto";
ul.style.minHeight = "400px";
ul.style.backgroundColor = "#77f";

let ar = ['우유','쥬스','차','커피','슬러시','요거트','디저트'];
console.log(ar.length);

for(let i=0; i<ar.length; i++){
  let li = document.createElement('li'); 
  let myText = document.createTextNode(ar[i]);
  li.appendChild(myText);
  ul.appendChild(li);}
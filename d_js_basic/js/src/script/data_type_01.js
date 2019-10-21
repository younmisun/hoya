//data type_01.js//

/* 
var int;
console.log(int);

var 댕댕이;
console.log(댕댕이);

댕댕이 = "멍멍이";
console.log(댕댕이);

console.log(멍댕이); 

결과값을 참고하여
값이 undefined라면, 변수명은 선언했지만 값은 지정하지 않은 형태 
값이 not defined라면, 변수를 생성조차 하지 않은 것 *var(변수)*

var rel="10:01";
console.log(rel);

스크립트기반 또는 언어라고 불리우는 프로그래밍은 하나의 에러가 나면 이후의 내용은 동작하지 않는다. */

// let rel="10시 40분";
// console.log(rel);

// rel="40분";
// console.log(rel);

/*
var : 오래전부터 사용하던 변수 * HOIST현상이 생김(호출하기 이전에도 해당하는 변수가 존재하는 것처럼 인지)
let : ECMA2015(es6) 버전부터 생성된 변수,
      * HOIST현상이 생기지 않는다.(현재 많이 사용하는 변수)
const : ECMA2015(es6) 버전부터 생성된 변수, 
        * 변수로 불리지만, 한번 지정한 후에는 값을 변경할 수 없는 변수(상수 )
*/


// var card = 1000; /* '='는 대입하다, '='는 같다라는 뜻이 아님! */
// var chu = 500;
// card = card - chu;
// console.log(card);

// card += 5000; /* card = card+5000; */
// console.log(card);

// card -= 13000; /* card = card-13000; */

// if(card < 0){
//   console.log('잔액부족입니다.'); /* if() <-괄호안에는 내용을 증명하는 것(true, false) */
// }else{console.log(card);}
// // 혹은 
// (card < 0)?console.log('잔액부족입니다.'):console.log(card); /* if문법을 줄여서 연산자로 사용하는 경우 '?' <- '이거면?'(꼭 한줄로 써야한다) */
// // 조건 ? 조건이 참일 경우 : 조건이 거짓일 경우 ;

// console.log(card); /* console.log 결과값을 보고 싶으면 입력한다(내용확인), 결과값을 중간중간체크할 때 쓰려고 만든듯...! */


/*
* 사칙연산(+, -, *, /, %)
* +=, -=, *=, /= 대입연산자
* ++, -- 증감연산자
* ==, ===, !=, !== 
* <, >
*/

// 기본연산자 ================

// var int;
// int = 10;
// console.log(int);

// var rel = int + 10;
// int=int+10;
// int=int-5;
// int=int*4;
// int=int/10;

// int=int%4; //몫을 뽑아내는게 아닌 나머지를 값을 나타낸다
// console.log(int);

// var int2=10;
// int2 = int2%2; // 이렇게하면 결과값이 1로 나타나는데 %는 3을 나누고 남은 나머지 값을 나타냄
// console.log(int2);
// (int2 == 0)? console.log("짝수"):console.log("홀수"); /* == <-뜻:0이랑 일치하면 */

// var now = new Date();
// console.log(now);

// var i = 100;
// i = i+2019;
// console.log(i);

// var now_year_month_date = 20191004;
// now_year_month_date += 3; //now_year_month_date = now_year_month_date + 3 를 줄인것
// console.log(now_year_month_date);

// var a = 10+10; // a는 10+10의 값, 리터럴이라고 부름(연산자 결과의 값) 10 10(연산자는 오퍼레이터)

// var now = 1207;
// now += 1;
// console.log(now);
// now ++;
// console.log(now);
// now ++;
// console.log(now);

// now--;
// now--;
// now--;
// console.log(now);

// ++now;
// console.log(now);

// --now;
// --now;
// --now;
// --now;
// console.log(now);

// 증감연산자, 1씩 더하거나 뺴는 기능
// 1씩 더하거나, 빼는 기능
// 1씩 더하거나, 뺄대(++,--)는 앞(전치연산자) 또는 뒤(후치연산자)에 붙일 수 있다. 조건에 따라 전,후를 사용한다.
// 전치는 먼저 연산 후에 결과를 확인
// 후치는 먼저 결과를 도출 후에 연산

// var myi = 100;
// console.log(myi);
// console.log(++myi);
// console.log(++myi);
// console.log(--myi);
// console.log("결과",myi);
// console.log(myi++);
// console.log(myi++);
// console.log(myi++);
// console.log(myi++);
// console.log("결과2",myi);
// console.log(myi--);
// console.log(myi--);
// console.log(myi--);
// console.log(myi--);
// console.log("결과3",myi);
// console.log(++myi);
// console.log(myi++);
// console.log(myi--);
// console.log(myi++);
// console.log("결과4",myi);

var ls = 77;
var tx = "야호";
var myMv = ls+tx;

ls=55;
tx="번가";
var myMv = ls+tx;

console.log(myMv);

//0은 정수가 아님. 그래서 console에 표시가 안됨 0을 써도. 0을 쓰고 싶다면
ls = 10;
tx = "번가 5번지";
myMv = ls + tx;
(ls <= 10) ? (myMv = "0"+ls+tx) : (myMv = ls+tx);
console.log(myMv);

var myN = parseInt(myMv); //parseInt 강제로 변환한다라는 명령어?...
console.log(myN);

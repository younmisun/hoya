// data_type_02-1.html

/* javascript 기본형 내용 정리하기
 * 변수 var(오래도록 사용한 연수, hoist현상문제), let(hoist현상문제를 막기위해 생성된 변수),
   const(최초의 생성후 변경불가하도록 처리된 변수)
 *
 * 숫자(0), 문자('0'), 참(true), 거짓(false) 특수형 : null, undefined
 * array([]), object({})
 * --------------------------------
 * 연산자 : opperator, opperation, reteral
 * 
 * 
 *  
 */

 /* 변수관련
 var num = 100;
 console.log(typeof(num));

 var str = '100';
 console.log(typeof(str));

 var bool = true;
 console.log(typeof(bool));

 var myrel;
 console.log(typeof(myrel));

 console.log('==========================');
 var arr =[1,2,3]; //리스트와 동일하다
 console.log(typeof(arr));

 var obj = {"a":'pen', "b":'mouse', "c":"microphone"}
 console.log(typeof(obj));

 var reset = null;
 console.log(typeof(null));

 console.log(arr[2]);
 console.log(obj["c"]);
 console.log(obj.c);

 console.log(arr.constructor.name);
 console.log(obj.constructor.name);
 console.log(reset);
*/

//연산자관련
var i = 10+2;
i -= 6;// i = i - 6;
i *= 2;// i = i * 2;
i /= 4;// i = i / 4;
i %= 2;// i = i % 2; //% 값을 낸 후에 나머지값을 나타냄
i += 2;// i = i % 2; //% 값을 낸 후에 나머지값을 나타냄
console.log(i);

var n =10;
++n; //1을 더하다
++n; //1을 더하다
n++; //1을 더하다
console.log(n++);
console.log(n);

--n;
--n;
--n;
console.log(n--);
console.log(n);

for(var i=0; i<10; i++){
  console.log(i);
}
alert("Hi");

// Data type
// 1. Number
//    integer:1,2,3,4
//    Float:1.2 , 3.14
// 2.String: 처음부터 끝까지 문자로 구성되어 있음
console.log(2+1);
// String + String 는 두 문자열을 붙인다. 
console.log("Hello "+"World");
console.log('Hello World');
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
// 매우 불편 하다.  이때 필요한 개념이 변수(Variable)이다.
const a=5;
const b=2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// Const는 재선언 재할당이 불가능하다. let을 사용하면 재선언 불가 재할당이 가능하다.
let a1=5;
a1=10;
let b1=2;
console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);
// var은 재선언 재할당이 가능하다.
var a2=10;
var a2=100;
console.log(a2);

//Boolean: True or False
const amIFat=true;
const amIman=false;
console.log(amIFat);
console.log(amIman);
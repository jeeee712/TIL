// Number 객체

// toString(): 숫자형 데이터를 문자형 데이터로 반환해 주는 함수
let x = 123;
x.toString(); // 문자 타입 123
(123).toString(); // 문자 타입 123

// 실무 사례: 10월보다 작은 경우에만 앞에 '0'을 붙이는 조건문을 사용하게 된다. 이때 String 객체의 내장 함수인 padStart()를 사용하면 조건문 없이도 월에 해당하는 값이 2자리보다 작은 경우 자동으로 앞에 '0'을 붙이는 코드를 쉽게 작성할 수 있다.
let now = new Date();
let year = now.getFullYear(); // 현재 년도
let month = now.getMonth() + 1; // 현재 월
let day = now.getDate(); // 현재 일

console.log(
  year +
    "-" +
    month.toString().padStart(2, 0) +
    "-" +
    day.toString().padStart(2, 0)
); //오늘이 2021년 8월 1일인 경우 2021-08-01 출력

// toExponential(): 숫자를 지수형으로 반환해 주는 함수
let x = 10.656;
x.toExponential(2); //10.66e+0
x.toExponential(4); //10.65603+0
x.toExponential(6); //10.656000e+0

//toFixed(): 소수점 몇 번째 자리까지 보여 줄지를 결정함
let x = 10.656;
x.toFixed(0); //11
x.toFixed(2); //10.66

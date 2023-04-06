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
x.toFixed(4); //10.6560

// 실무 사례: 달러나 유로 같은 화폐를 다를 경우 소수점 이하 몇 번째 자리까지 화면에 보여 줄지 처리함

// toPrecision(): 정수와 소수를 포함해서 몇 번째 자리까지 보여 줄지를 결정하는 함수, 반올림값을 반환

let x = 10.656;
x.toPrecision(); //10.656
x.toPrecision(2); //11
x.toPrecision(4); //10.66

// parselnt(): 전역 함수로서 정수로 반환, 문자열의 시작이 숫자형이면 숫자형 데이터를 반환
parseInt("-10"); // -10
parseInt("-12.33"); // -12
parseInt("10"); // 10
parseInt("12.33"); //12
parseInt("10 20 30"); //10
parseInt("10 years"); //10
parseInt("years 10"); //NaN

// 실무 사례: HTML input type = "text"를 통해서 정수 값을 입력 받더라도 자바스크립트에서는 문자형으로 받아들이기 때문에 parseInt를 사용하여 정수형으로 변환

// parseFloat(): 전역 함수로서 부동소수점으로 반환
parseFloat("10"); // 10
parseFloat("12.33"); // 12.33
parseFloat("10 20 30"); // 10
parseFloat("10 years"); // 10
parseFloat("years 10"); // NaN

// 실무 사례: parseInt()와 동일

// Number 객체의 프로퍼티
Number.MAX_VALUE = "자바스크립트에서 다룰 수 있는 최대 수";
Number.MIN_VALUE = "자바스크립트에서 다룰 수 있는 가장 작은 수";
Number.POSITIVE_INFINITY = "Infinity";
Number.NEGATIVE_INFINITY = "-Infinity";
Number.NaN = "Not-a-Number";

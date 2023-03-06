// <Object>: Object는 키(key)-값(value) 쌍으로 데이터를 저장한다.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

person["age"] = 51; // 오브젝트명 + [ + "key" + ] 형태로 사용해서 데이터 변경
person.age = 51; //오브젝트명 + . + key 형태로 데이터에 접근해서 변경

// 데이터 가져오기
console.log(person["firstName"]); //오브젝트명 + [ + "key" + ]
console.log(person.firstName); //오브젝트명 + . + key

// <Array(배열)>
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); //Saab
console.log(cars[1]); //Volvo

cars[0] = "Hyundai"; // 배열의 첫 번째 요소의 값이 Hyundai로 변경
cars[1] = "Kia"; //배열의 두 번째 요소의 값이 Kia로 변경
console.log(cars[0]); //Hyundai
console.log(cars[1]); //Kia

// typeof 연산자를 이용해서 현재 변수의 데이터 타입을 알아낼 수 있다.
console.log(typeof "John"); //string
console.log(typeof 3.14); //number
console.log(typeof true); //boolean
console.log(typeof { x: 1, y: 1 }); //object
console.log(typeof [1, 2, 3]); //object
console.log(typeof undefined); //undefined
console.log(typeof null); //object

// 64비트 부동소수점
// 자바스크립트는 항상 64비트 부동소수점으로 숫자를 저장하기 때문에 Big.js, BigNumber.js, Decimal.js와 같은 라이브러리를 사용한다.

// switch 문은 상수값(숫자 혹은 문자 가능, 비교 구문 안 됨)에 해당하는 case절을 실행한다. default절이 있는 경우 모든 case절의 값과 일치하지 않을 경우 실행한다.
switch(상수 값) {
  case 상수값1:
    //실행할 코드
    break;
  case 상수값2:
    //실행할 코드
    break;
  case 상수값3:
    //실행할 코드
    break;
  default: //case절의 상수 값이 모두 일치하지 않는 경우
    //실행할 코드
    break
}

// switch문은 상수값만 올 수 있음. 비교 구문 안 됨.
// 상수-숫자 혹은 특정 문자
let d = new Date();
let day = d.getDay(); //일요일이면 0, 월요일이면 1, 토요일이면 6을 반환
let dayName = "";
switch (
  day //조건식에 상수값을 전달
) {
  case 0:
    dayName = "일요일";
    break;
  case 1:
    dayName = "월요일";
    break;
  default:
    dayName = "";
    break;
}

// if문과 switch문의 차이 
// if문은 조건식에 비교 연산을 사용할 수 있기에 switch문보다 훨씬 유용하고 자바스크립트 구현 시 가장 많이 사용된다.
// 하지만 switch문은 상수값을 판단하고 해당하는 case절로 바로 찾아가기 때문에 이럴 경우 if문보다 훨씬 효율적이다.
// 따라서 비교 연산이 필요 없고, 조건을 비교할 대상이 범위가 아닌 특정 상수값인 경우라면 if문보다 switch문을 사용하는 것이 좋다.

// 반복문
// for-loop
for (statement 1; statement 2; statement 3) {
  // 코드 블록
}
// statement 1 - 코드 블록이 실행되기 전에 한 번 실행됨
// statement 2 - 코드 블록을 실행시킬 조건 정의
// statement 3 - 코드 블록을 실행한 후 실행됨

for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

let outputList = []; // 고객이 구매할 수 있는 음료 목록을 저장할 새로운 배열
for (let i = 0; i < len; i++) {
  // productList의 모든 요소에 대한 접근
  if (productList[i].price <= inputCoin) {
    // 음료 가격이 고객이 투입한 금액보다 같거나 작으면
    outputList.push(productList[i]); //outputList에 추가
  }
}

// for-in Object에서도 사용할 수 있는 반복문
for (const key in object) {
  // 실행할 코드 블록
}

let person = { fname:"John", Iname: "Doe", age: 25};
for (cosnt key in person) {
  console.log(person[key]); // 오브젝트 key에 해당하는 데이터(값)을 출력
}

let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for (const brand in brands) {
  console.log(brand); // 배열의 인덱스 번호 출력
}

// for-of Array, Map, String 등 iterable(반복 가능한) 객체에서 사용 가능한 반복문이다.
for (const element of iterable) {
  //실행할 코드 목록
}

let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for (const brand of brands) {
  console.log(brand); // 배열의 각 요소 출력
}

// while 조건식이 true인 동안 코드 블록을 실행한다.
while (condition) {
  // 코드 블록
}

let i = 1;
while (i <= 10) {
  console.log("The number is " + i);
  i++;
}

let inputPrice = 7000; // 사용자가 넣은 지폐 금액
let coinUnit = 500; // 반환할 500원짜리 동전
let coinCount = 0; // 반환될 500원짜리 총 개수를 담을 변수
while (inputPrice >  0) { //사용자가 넣은 금액이 0이 될 때까지
  inputPrice = inputPrice - coinUnit; //inputPrice 금액이 500원씩 줄어듦
  coinCount++; // 반복문이 한 번 돌 때마다 반환되는 500원짜리 동전 수를 증가시킴
}
console.log(coinCount); //500원짜리 총 개수

// 함수
function calculator(x1, x2, operator) {
  if (operator === "+") {
    return x1 + x2;
  } else if (operator === "-") {
    return x1 - x2;
  } else if (operator === "*" ) {
    return x1 * x2;
  } else if (operator === "/") {
    return x1 / x2;
  }
}

let plus = calculator(5, 7, "+");
console.log(plus); //12

let minus = calculator(7, 5, "-");
console.log(minus); //2

let multiple calculator(5, 7, "*");
console.log(multiple); //35

let divide = calculator(10, 2, "/");
console.log(divide); //5
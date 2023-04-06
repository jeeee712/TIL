// 일반적으로 배열에 저장된 요소에 접근하기 위해서는 배열에 저장된 순서인 인덱스 번호를 사용하게 된다.
function getScores() {
  return [70, 80, 90];
}

let scores = getScores();

let x = scores[0]; // 배열의 인덱스 번호로 데이터 접근
let y = scores[1];
let z = scores[2];

// Array Destructuring은 배열에 저장된 요소를 분해해서 배열의 순서에 따라 변수를 정의해서 사용할 수 있게 해 준다.
// 선언 변수가 배열 문법처럼 보이지만, 배열이 아님. 배열 리턴 값을 순서대로 받기 위한 용도임
let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

// 실무에서 Array Destructuing을 가장 많이 사용했던 경우는 위도, 경도 데이터를 반환받아 사용할 때 자주 쓰임
// 다음 예제와 같이 데이터를 정상적으로 가져와도 위도, 경도라는 데이터의 의미가 coordinate[0], coordinate[1]로 할당되기 때문에
// 어느 것이 위도이고 어느 것이 경도인지 프로그램을 구현하다 보면 혼란이 올 때가 많다.
let coordinate = getCoordinates(); // getCoordinates() 함수는 위도, 경도 정보를 제공하는 외부 라이브러리라고 가정
console.log(coordinate[0]); // 경도
console.log(coordinate[1]); // 위도

// 이럴 경우 Array Destucturing을 사용하면 배열의 데이터를 내가 지정한 변수명으로 쉽게 바로 담을 수 있기에
// 프로그램 구현 시 변수명을 통해 어떤 데이터인지 쉽게 확인이 가능하다.
let [longitude, latitude] = getCoordinates(); // getCoordinates() 함수는 위도, 경도 정보를 제공하는 외부 라이브러리라고 가정
console.log(longitude); // 경도
console.log(latitude); // 위도

// 배열에 반환하는 데이터가 많을 경우 특정 요소는 바로 변수에 할당하고, 나머지 요소는 모두 배열에 할당하는 것도 가능하다.
let [x, y, ...args] = getScores(); // x, y는 변수로 할당, 나머지는 args라는 배열에 할당
console.log(x); // 70
console.log(y); // 80
console.log(args); //[90, 100];

// 배열 안에 배열이 있는 경우도 Array Destructuring을 사용해서 분해할 수 있다.
function getProfile() {
  return ["John", "Doe", ["Red", "Green", "Blue"]];
}

let = [firstName, lastName, [color1, color2, color3]] = getProfile();

console.log(color1, color2, color3); // Red Green Blue

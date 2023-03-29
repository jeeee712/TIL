// 자바스크립트의 기본 자료형

let person = {
  firstName: "Jeremy",
  lastName: "Go",
};
// firstName과 lastName을 합쳐서 Full Name을 가져오는 함수를 오브젝트에 추가
let person = {
  firstName: "Jeremy",
  lastName: "Go",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// 오브젝트에 있는 모든 key는 for-in문을 사용해서 가져올 수 있는데, 여기서는 firstName, lastName, getFullName 3개가 출력된다.
for (const key in person) {
  console.log(key); // firstName, lastName, getFullName 출력
}

console.log(person.getFullName()); // Jeremy Go
// 만약에 자바스크립트 버전이 업데이트되면서 우리가 추가한 함수인 getFullName이 오브젝트의 기본 내장함수로 추가된다면?
// 혹은 우리가 무심코 추가한 이런 key 값이 자바스크립트에서 사용하고 있는 내장된 key 값과 동일하면 어떻게 될까?
// 프로그램에서는 의도치 않은 충돌이 발생하고, 원하는 결과를 얻지 못하고 오류가 발생하게 된다.
// 여기서 Symbol의 중요성과 쓰임새를 알 수 있다.
// Symbol은 자바스크립트에서 절대 충돌이 일어나지 않는 유일한 key 값을 만들어 준다.
let person = {
  firstName: "Jeremy",
  lastName: "Go",
};
let getFullName = Symbol("getFullName"); // 유일한 key 생성
person[getFullName] = function () {
  return this.firstName + " " + this.lastName;
};
// Symbol을 사용하면 유일한 key를 생성할 수 있을 뿐만 아니라 Symbol로 추가한 key를 노출시키지 않고 감출 수 있다는 이점이 생김
for (const key in person) {
  console.log(key); // firstName, lastName 출력
}

console.log(person[getFullName]()); // Jeremy Go

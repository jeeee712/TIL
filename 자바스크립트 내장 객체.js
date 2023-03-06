// Object 객체
// 빈 객체 생성
let person = new Object();

//멤버 설정
person.firstName = "John";
person.lastName = "Doe";
person.age = 1200;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person.getFullName());

// String 객체
// length: 문자열 길이를 반환하는 함수
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;

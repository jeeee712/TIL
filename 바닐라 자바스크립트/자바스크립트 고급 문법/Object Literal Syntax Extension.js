// Object에서는 변수에 할당된 값을 키로 치환해서 사용할 수 없다.
let firstName = "John";
let lastName = "Doe";

let person = {
  firstName: firstName,
  lastName: lastName,
};

// 하지만 Object Literal Syntax Extension 문법을 사용하면 Object의 키로 변수에 할당된 문자열 값을 사용할 수 있게 된다.
// 이때 키를 대괄호([]) 안에 넣어 주면 이때의 키는 할당된 변수 값을 의미하게 된다.

let type = "student";

let score = {
  [type]: "John",
  score: 95,
};
// 이렇게 하면 Object 키를 동적으로 생성할 수 있기 때문에 코딩 시 훨씬 자유도가 높아진다.

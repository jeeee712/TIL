// 일반적으로 문자열을 병합하기 위해서는 더하기(+) 기호를 사용한다.
function hello(name) {
  console.log("Hello" + name + ". Welcome!"); // 문자열을 더하기 기호를 사용해서 하나의 문자열로 합침
}

hello("Jeremy");

// Template Literal는 변수에 할당된 문자열을 하나의 문자열로 병합할 때 더하기 기호를 사용하지 않고 하나의 문자열로 만들 수 있도록 해 준다.
// 백틱(`)을 사용하고 문자열 안에서 변수 값에 ${변수명}을 사용하면 더하기(+) 기호 없이 바로 적용할 수 있다.
function hello2(name) {
  let name2 = "John";
  console.log(`Hello ${name2}. Welcome! ${name}`); // ${변수명}을 사용하면 문자열 안에서 변수 값을 사용할 수 있게 해 줌
}
hello2("Jeremy");

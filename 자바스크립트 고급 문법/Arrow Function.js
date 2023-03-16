// 함수 선언식
function hello(name) {
  return "Hello" + name;
}

// 함수 표현식
const hello2 = function (name) {
  return "Hello" + name;
};

// Arrow Function(화살표 함수): 함수 선언식이나 함수 표현식에 비해 구문이 짧아진다는 이점이 있음. 화살표 함수 내의 this는 언제나 상위 스코프의 this를 가리킨다.
// 위의 일반적인 함수 표현은 아래 화살표 함수로 쓸 수 있다.
const hello3 = (name) => {
  return "Hello" + name;
};

// 파라미터가 하나만 있을 때는 주변 괄호를 생략할 수 있다.
const hello3 = (name) => {
  return "Hello" + name;
};

// 화살표 함수의 유일한 문장이 'return'일 때 'return'과 중괄호({})를 생략할 수 있다.
const hello4 = (name) => "Hello" + fullName;

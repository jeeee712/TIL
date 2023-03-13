// JSON 객체: 데이터를 저장하거나 전송할 때 많이 사용되는 경량의 DATA 교환 형식으로 데이터 포멧일 뿐이며 특정 통신 방법도, 프로그래밍 문법도 아닌 단순히 데이터를 표시하는 방법

// 서버와 클라이언트 간의 데이터 전송 시 많이 사용된다.
// 자바스크립트의 Object 객체 표기법과 매우 유사하다.
// JSON 데이터는 자바스크립트 JSON 객체의 parse() 함수를 이용하면 자바스크립트 Object 객체로 변환해서 사용할 수 있다.
// 프로그래밍 언어에 상관없이 사용할 수 있는 데이터 교환 형식이다.
// 대부분의 언어에서 JSON 데이터를 처리할 수 있는 라이브러리를 제공한다.

let data = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

let stringValue = JSON.stringify(data); // 객체를 문자열로 변환

let text =
  '{ "employees": [' +
  ' { "firstName": "John", "lastName": "Doe" }, ' +
  ' { "firstName": "Anna", "lastName": "Smith" }, ' +
  '{"firstName":"Peter", "lastName":Jones"} ]}';

let obj = JSON.parse(text); // 문자열 형태의 JSON

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
// 실무 사례: 비밀번호 자리수, 주민번호 자리수 등

// indexOf(): 문자열 안에 특정 문자열이 존재하는지를 찾고, 있다면 그 문자열이 시작되는 index를 반환하는 함수(발견하지 못하면 -1 반환)
let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate"); //7
// 실무 사례: 전화번호가 하이픈(-) 없이 입력되었는가?(그렇다면 -1 반환)

//lastIndexOf(): 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환하는 함수
let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate"); // 21

let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate", 15); // 15번째 index부터 찾기 시작
// indexOf() 함수와 lastIndexOf() 함수 모두 첫 번째 파라미터에는 찾고자 하는 문자열, 두 번째 파라미터에는 문자열을 찾기 시작할 위치 index를 줄 수 있다.

// slice(): 파라미터로 시작 위치와 종료 위치를 주면 문자열에서 해당 부분을 잘라내서 반환하는 함수
let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13); //Banana

//두 번째 파라미터인 종료 인덱스 번호를 생략하면 시작 위치에서 문자열의 마지막 위치까지 잘라내서 반환한다.
let str = "Apple, Banana, Kiwi";
let res = str.slice(7); // Banana, Kiwi

// 첫 번째 파라미터인 시작 위치 인덱스를 음수로 주면, 문자열의 끝에서부터 거꾸로 읽게 된다.
let str = "Apple, Banana, Kiwi";
let res = str.slice(-12); // Banana, Kiwi
// 실무 사례: 주민등록번호 성별 구분

// substring(): slice() 함수와 동일한 기능을 하지만 파라미터로 음수를 허용하지 않는다.
let str = "Apple, Banana, Kiwi";
let res = str.substring(7, 13); //Banana

// substr(): slice() 함수와 매우 유사하지만 두 번째 파라미터는 종료 인덱스가 아니라 첫 번째 파라미터인 시작 위치에서 잘라낼 문자의 길이임
let str = "Apple, Banana, Kiwi";
let res = str.substr(7, 6); //Banana

// replace(): 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수, 이때 바꾸려는 문자열이 하나 이상 있더라도 처음 발견된 문자열만 바꾸게 된다.
let str = "Please visit Seoul and Seoul!";
let n = str.replace("Seoul", "Jeju"); // Please visit Jeju and Seoul!

// 대소문자를 구분한다.
let str = "Please visit Seoul and Seoul!";
let n = str.replace("SEOUL", "Jeju"); // Please visit Seoul and Seoul!

// 대소문자 구분 없이 사용하려면 자바스크립트 정규식을 사용해야 한다.
// 자바스크립트 정규식- i는 대소문자를 구분하지 않겠다는 뜻.
let str = "Please visit Seoul and Seoul!";
let n = str.replace(/SEOUL/i, "Jeju"); //Please visit Jeju and Seoul!

// 자바스크립트 정규식- g는 일치하는 모든 문자열을 찾겠다는 뜻
let str = "Please visit Seoul and Seoul!";
let n = str.replace(/Seoul/g, "Jeju"); //Please visit Jeju and Jeju!

// 실무 사례: 데이터베이스의 데이터로 특정 부분을 바꾸는 프로그램의 경우 replace() 함수를 사용하게 된다.
// "년도-월-일" 형식을 "년도/월/일" 형식으로 보여 줘야 한다면 날짜.replace(/-/g, "/")를 이용한다.

// toUpperCase(), toLowerCase(): 문자열을 모두 대문자로 변경, 문자열을 모두 소문자로 변경
let text1 = "Hello, World!";
let text2 = text1.toUpperCase(); //HELLO WORLD!

let text1 = "Hello, World!";
let text2 = text1.toLowerCase(); //hello world!

// 실무 사례: 사용자가 영문 이름을 입력하면 toUpperCase() 함수를 이용해서 모두 대문자로 변경하여 서버로 데이터를 전송함

// concat(): 2개 이상의 문자열을 하나의 문자열로 합치는 함수
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
let text4 = "Hello" + " " + "World!";
let text5 = "Hello".concat(" ", "World!");

// 실무 사례: 서로 다른 변수에 저장된 이름을 하나로 합쳐서 보여 줄 수 있음

// trim(): 문자열의 앞, 뒤 공백을 모두 제거하는 함수
let str = "         Hello World!        ";
console.log(str.trim()); //Hello World!

// 실무 사례: 사용자로부터 입력을 받는 모든 필드에 입력된 데이터는 데이터베이스에 저장하기 전에 trim() 함수를 이용해서 앞뒤 공백을 제거해 줄 필요가 있다.

// padStart(), padEnd(): 문자열 앞에 지정된 문자를 지정된 길이만큼 추가하는 함수, 문자열 뒤에 지정된 문자를 지정된 길이만큼 추가하는 함수
let str = "5";
str = str.padStart(4, 0); // 0005

let str = "5";
str = str.padEnd(4, 0); // 5000

// 실무 사례: 학번 같은 순번 체계가 필요한 경우에 사용함, 사용자에게 보여 줘야 하는 날짜 포맷(월과 일 2자리)

// charAt(): 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
let str = "HELLO WORLD";
str.charAt(0); // H

// 실무 사례: 제품명의 제일 첫 번째 문자가 해당 제품의 모델을 의미하는 알파벳 문자를 사용하는 경우

// charCodeAt(): 문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드 값을 반환하는 함수
let str = "HELLO WORLD";
str.charCodeAt(0); //72

//split(): 문자열 내의 특정 구분자를 기준으로 문자열을 분리해서 배열로 반환하는 함수
let birthday = "1997-06-12";
let arr2 = birthday.split("-"); // 하이픈(-)을 기준으로 문자열을 분리해서 배열로 반환
console.log(arr2); //["1997", "06", "02"]

// 실무 사례: 포맷을 가지고 있는 날짜 데이터, SNS 태그처럼 데이터베이스에서 별도의 항목으로 저장되는 경우

// startsWith(), endsWith(): 문자열의 시작이 파라미터로 전달된 문자열로 시작되는지를 확인하는 함수, 문자열의 끝이 파라미터로 전달된 문자열로 종료되는지 확인하는 함수
let url = "http://website.com";
if (url.startsWith("http://") || url.startsWith("https://")) {
  // 올바른 형식의 웹사이트 url
} else {
  // 잘못된 형식의 웹사이트 url
}

let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  // pdf 파일
} else {
  // 다른 형식의 파일
}

// 실무 사례: 올바른 url 형식으로 입력되었는지 확인, 첨부파일 형식 확인

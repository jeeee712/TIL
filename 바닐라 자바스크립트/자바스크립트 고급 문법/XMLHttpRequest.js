// XMLHttpRequest(XHR) 객체는 서버와 상호작용하기 위해 사용된다. 전체 페이지를 새로 고침 하지 않아도 URL을 통해 데이터를 전송하거나 받아올 수 있다.
// XMLHttpRequest는 이름에 XML이 붙어서 XML 데이터 통신으로 오해할 수 있는데, 모든 종류의 데이터를 받아올 수 있다.

// [객체 생성]
// XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이기 때문에 브라우저 환경에서만 정상적으로 동작되며 node.js 환경에서는 제공되지 않는다.
// XMLHttpRequest 생성자 함수를 호출해서 생성한다.
const xhr = new XMLHttpRequest();

// [요청 전송]
// 클라이언트(브라우저)에서 서버로 요청을 보내기 위해서는 HTTP Method, 요청 URL을 정의하는 것부터 시작한다.
// XMLHttpRequest의 내장 함수인 open()을 이용한다.
xhr.open("GET", "/posts"); // HTTP Method, URL 정의, 비동기 여부(기본 값 ture)
// open() 함수에서 첫 번째 매개변수는 HTTP Method,  즉 HTTP 요청 방식이다.
xhr.open("GET", "/posts"); // 리소스 요청
xhr.open("POST", "/posts"); // 리소스 생성
xhr.open("PUT", "/posts"); // 리소스 수정
xhr.open("PATCH", "/posts"); // 리소스 일부 수정
xhr.open("DELETE", "/posts"); // 리소스 삭제
// open() 함수로 HTTP 요청 방식과 요청 URL을 정의했다고 해서 바로 실행이 되는 것은 아니다.
// 클라이언트에서 서버로 HTTP 요청을 하기 전에 요청에 맞는 헤더 값을 설정해야 한다.
// setRequestHeader() 함수를 통해서 요청 헤더 값을 설정할 수 있는데, 일반적으로 요청할 때 서버로 전송하는 데이터의 타입을 선언하기 위한 용도로 많이 사용한다.
// 헤더 값 중 content-type에 해당한다. content-type은 서버로 전송할 데이터의 MIME 타입 정보를 설정한다. 웹 개발 시 자주 사용하는 MIME 타입은 크게 3가지이다.
xhr.setRequestHeader("content-type", "application/json"); // json 데이터 전송
xhr.setRequestHeader("content-type", "text/plain"); // 텍스트 데이터 전송
xhr.setRequestHeader("content-type", "multipart/form-data"); // 파일 전송
// open() 함수와 setRequestHeader() 함수로 요청에 필요한 정의가 끝나면 최종적으로 send() 함수를 통해 요청을 보내게 된다.
// 이때 서버로 전송할 데이터가 있다면 send() 함수에 매개변수로 데이터를 전달하면 된다. 전달된 데이터는 request의 body에 담겨 전송된다.
// 단, HTTP 요청 방법이 GET인 경우는 send() 함수에 매개변수로 데이터를 전달해도 전달한 데이터는 실제로는 전송되지 않는다.
// HTTP 요청 방식 중 POST를 사용해서 데이터를 전송하는 예제이다.
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "/posts"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 중 content-type 정의

const data = {
  id: 2,
  title: "XMLHttpRequest",
  author: "Jeremy",
};

xhr.send(JSON.stringify(data)); // JSON.stringify를 통해 오브젝트 데이터를 문자열 형태로 변경해서 전송해야 함

// [응답 처리]
// 클라이언트로 서버로 요청(Request)을 전송하면, 서버는 요청한 결과를 응답(Response)하게 된다.
// XMLHttpRequest 객체가 발생시키는 이벤트를 통해서 서버가 전송한 응답을 처리할 수 있다.
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("GET", "/posts"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 중 content-type 정의
xhr.send(); // 요청 전송

xhr.onload = () => {
  if (xhr.status === 200) {
    // 정상적으로 응답되면 status가 200
    const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
    console.log(res);
  } else {
    // 에러 발생
    console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
  }
};

// [테스트]
// 다음과 같이 open() 함수의 URL에 "https://jsonplaceholder.typicode.com/posts"를 인수로 넘기면 100개의 데이터를 받아오게 된다.
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 중 content-type 정의
xhr.send(); // 요청 전송

xhr.onload = () => {
  if (xhr.status === 200) {
    // 정상적으로 응답되면 status가 200
    const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
    console.log(res); // 100개의 데이터를 받아옴
  } else {
    // 에러 발생
    console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
  }
};

// 전체 데이터 중 특정 id에 해당하는 데이터만 가져오고 싶다면 요청 URL을 "https://jsonplaceholder.typicode.com/posts/:id"처럼 작성하면 됨
// 만약에 id가 1번인 데이터를 가져오고 싶다면 https://jsonplaceholder.typicode.com/posts/1로 호출하며 됨

// 데이터 생성하기
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json;charset=UTF-8"); // 헤더 값 중 content-type 정의
xhr.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 })); // 요청 전송

xhr.onload = () => {
  if (xhr.status === 201) {
    // 201 상태 코드는 요청이 성공적으로 처리되었으며 자원이 생성되었음을 나타내는 성공상태 응답 코드이다. 일반적으로 POST 요청에 대한 응답 결과로 사용된다.
    const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수의 JSON 객체로 변경
    console.log(res); // 응답 데이터 출력
  } else {
    // 에러 발생
    console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
  }
};

// id가 1인 데이터를 수정
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json;charset=UTF-8"); // 헤더 값 중 content-type 정의
xhr.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 })); // 요청 전송

xhr.onload = () => {
  if (xhr.status === 200) {
    // PUT 요청이 정상적으로 완료되면 200
    const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수의 JSON 객체로 변경
    console.log(res); // 응답 데이터 출력
  } else {
    // 에러 발생
    console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
  }
};

// id가 1인 데이터를 삭제
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json;charset=UTF-8"); // 헤더 값 중 content-type 정의
xhr.send(); // 요청 전송

xhr.onload = () => {
  if (xhr.status === 200) {
    // PUT 요청이 정상적으로 완료되면 200
    const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수의 JSON 객체로 변경
    console.log(res); // 응답 데이터 출력
  } else {
    // 에러 발생
    console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
  }
};

// Fetch API는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있다.
// Fetch API를 사용해서 서버로부터 데이터를 받아오고, 반대로 서버로 데이터를 전송하는 부분을 구현해 보도록 함
// Fetch API와 XMLHttpRequest의 가장 큰 차이점은 Fetch API는 Promise 방식으로 구현되어 있다는 점이다.

// 다음은 데이터 조회(GET)이다. XMLHttpRequest에 비해 훨씬 코드가 간결하다.
// GET인 경우 따로 HTTP 요청 방법을 명시하지 않아도 된다.
// fetch() 함수를 통해서 데이터를 요청하고, 응답이 이루어지면 응답받은 결과는 then() 함수의 인수로 전달받게 된다.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
// fetch() 함수 호출 후에 then() 함수가 두 번 쓰였다.
// 첫 번째 then() 함수는 서버 요청에 대한 응답이 왔을 때 실행된다. 이때 응답받은 데이터는 문자열 형식이기 때문에 response.json() 함수를 호출해서 json 데이터로 변경을 실행한다.
// json 데이터로 변경이 완료되면 두 번째 then() 함수의 매개변수로 변경된 json 데이터를 전달한다.

// 다음은 데이터 생성(POST)이다.
// HTTP 요청 방법은 method에, 전송할 데이터는 body에, 헤더 값은 headers에 정의하면 된다.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // HTTP 요청 방법
  body: JSON.stringify({
    // 전송할 데이터
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    // 헤더 값 정의
    "content-type": "application/json; charset=UTF-8", // content-type 정의
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// 다음은 데이터 수정(PUT)이다.
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// 다음은 데이터 삭제(DELETE)이다.
fetch("https://jsonplaceholder.typicode.com/posts/1"),
  {
    method: "DELETE",
  };

// 파일을 업로드하는 경우는 다음과 같이 FormData 객체를 사용한다.
// FormData는 HTML의 form 태그에 해당하는 form 필드와 그 값을 나타내는 일련의 키 - 값 쌍을 쉽게 생성할 수 있게 해 주는 객체이다.
// 일반적인 텍스트 데이터뿐만 아니라 파일을 서버로 전송할 수 있게 해 준다.
let formData = new FormData(); // FormData 객체 생성. FormData는 파일을 포함한 데이터를 전송할 수 있도록 해 주는 객체이다.
let fileField = document.querySelector('input[type="file]'); // 사용자가 선택한 파일

formData.append("username", "abc123"); // 텍스트 데이터
formData.append("attachment", fileField.files[0]); // 파일

fetch("url", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .catch((error) => console.error("Error", error))
  .then((response) => console.log("Success:", JSON.stringify(response)));

// 2개 이상의 다중 파일도 다음과 같이 서버로 전송할 수 있다.
let formData = new FormData();
let photos = document.querySelector('input[type="file][multiple]'); // 다중 파일 선택 HTML 요소

formData.append("title", "My photos");
for (let i = 0; i < photos.files.length; i++) {
  //선택한 파일 수만큼 반복문을 사용해서 FormData에 삽입
  formData.append("photos", photos.files[i]);
}

fetch("url", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((response) => console.log("Success:", JSON.stringify(response)))
  .catch((error) => console.error("Error:", error));

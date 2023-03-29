// alert(): 윈도우 화면에 경고 메시지를 출력
alert("이것은 alert 창입니다.");

// confirm(): 진행할지, 종료할지에 대한 진행 여부를 확인하는 함수
if (confirm("정말 삭제하시겠습니까?")) {
  console.log("삭제 실행");
}

// prompt(): 문자열을 입력받을 수 있는 함수
let txt = prompt("비밀번호를 입력하세요.");

if (txt == null) {
  // 취소 버튼을 클릭했을 때
} else if (txt == "") {
  // 어떤 값도 입력하지 않고 확인 버튼을 클릭했을 때
} else if (txt != "") {
  // 값을 입력하고 확인 버튼을 클릭했을 때
}

// window.open(): 윈도우 새 창/새 탭으로 지정한 url을 오픈하는 함수
window.open("https://naver.com");

// setTimeout(), clearTimeout(): 두 번째 파라미터로 지정한 시간 간격 이후에 첫 번째 파라미터에 정의한 함수를 실행하는 함수
let myExec;

function myFunction() {
  myExec = setTimeout(function () {
    console.log("5초 후에 프로그램 실행");
  }, 5000);
}

function myStopFunction() {
  clearTimeout(myExec);
}

// setInterval(), clearInterval(): 두 번째 파라미터로 지정한 시간 간격마다 첫 번째 파라미터에 정의한 함수를 반복적으로 실행하는 함수
let i = 0;
let fnc = setInterval(function () {
  console.log("3초마다 프로그램 실행 - " + i);
  if (i == 3) {
    clearInterval(fnc);
  }
  i++;
}, 3000);

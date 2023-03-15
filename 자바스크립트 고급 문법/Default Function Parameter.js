// 함수 내에서는 함수를 호출할 때 파라미터에 값이 전달되었는지를 확인하는 코드를 구현해서 사용해야 함
function say(message) {
  if (message != undefined) {
    // 파라미터에 값이 전달되었는지 확인
    console.log(message);
  } else {
    console.log("파라미터가 넘어오지 않았어요.");
  }
}

say(); // 파라미터 값을 전달하지 않음

// Default Function Parameter는 함수 호출 시 파라미터가 전달되지 않았을 때 사용할 기본값을 설정하는 기능
function say(message = "파라미터가 넘어오지 않았어요.") {
  // 기본값이 파라미터에 선언되어 있어서 함수를 호출할 때 파라미터 값을 전달하지 않아도 사용할 수 있음
  console.log(message); // 파라미터 값이 전달되지 않으면, 기본값인 "파라미터가 넘어오지 않았어요."를 출력하게 됨
}

say(); // 파라미터 값을 전달하지 않음

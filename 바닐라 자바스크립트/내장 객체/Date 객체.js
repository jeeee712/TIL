// Date 객체란? 자바스크립트에서 날짜와 시간을 다루는 객체로 사용자 브라우저의 타임존을 기준으로 한다.

// Date 생성자

// new Date()
let now = new Date(); // 사용자 브라우저의 시간을 가져온다.
console.log(now); // Fri Jun 25 2021 05:16:49 GMT+0900 (대한민국 표준시)

// new Date(year, month, day, hours, minutes, seconds, millise conds)
let d = new Date(2021, 6, 24, 10, 33, 30, 0); // 특정 날짜 시간을 지정해서 Date 객체 생성
console.log(now); // Sat Jul 24 2021 10:33:30 GMT+0900 (대한민국 표준시)

// new Date(milliseconds)
let d2 = new Date(0); //1970년1월1일
let d3 = new Date(10000000000); // 1970년1월1일 + 100000000 = 대략 1973년3월3일

//new Date(date string)
let d4 = new Date("October 13, 2014 11:13:00"); // 날짜 문자열로 Date 객체 생성

// Get 함수
// getFullYear(): 3자리의 년도 정보를 가져온다.
// getMonth(): 0~11 사이의 월 정보를 가져온다. 1월은 0이고, 12월은 11이다.
// getDate(): 1~31 사이의 일 정보를 가져온다.
// getHours(): 0~23 사이의 시간 정보를 가져온다.
// getMinutes(): 0~59 사이의 분 정보를 가져온다.
// getSeconds(): 0~59 사이의 초 정보를 가져온다.
// getMilliseconds(): 0~999 사이의 밀리초 정보를 가져온다.
// getTime(): 1970년 1월 1일 이후에 해당하는 밀리초 정보를 가져온다.
// getDay(): 0~6 사이의 요일 정보를 가져온다. 일요일은 0이고, 월요일은 1이다.
// Date.now(): 현재를 기준으로 getTime() 함수에 해당하는 정보를 가져온다.

// Set 함수
// setFullYear(): 4자리의 년도 정보를 설정한다.
// setMonth(): 0~11 사이의 월 정보를 설정한다.
// setDate(): 1~31 사이의 일 정보를 설정한다.
// setHours(): 0~23 사이의 시간 정보를 설정한다.
// setMinutes(): 0~59 사이의 분 정보를 설정한다.
// setSeconds(): 0~59 사이의 초 정보를 설정한다.
// setMilliseconds(): 0~999 사이의 밀리초 정보를 설정한다.
// setTime(): 1970년 1월 1일 이후에 해당하는 밀리초 정보를 설정한다.

// 실습: 파라미터로 날짜 간격과 날짜 포맷에 해당하는 문자열을 입력받고 현재 날짜 기준으로 며칠 전, 혹은 며칠 후의 날짜를 계산하는 함수
function getIntervalDate(day) {
  let now = new Date();
  let dayMilliseconds = 60 * 60 * 24 * 1000;

  return new Date(now.getTime() + dayMilliseconds * day);
}

console.log(getIntervalDate(-9));

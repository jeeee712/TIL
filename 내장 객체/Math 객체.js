// Math.round(): 숫자에 대한 반올림 처리
Math.round(4.9); // returns 5
Math.round(4.7); // returns 5
Math.round(4.4); // returns 4
Math.round(4.2); // returns 4
Math.round(-4.2); // returns -4

// Math.ceil(): 숫자에 대한 무조건 올림 처리
Math.ceil(4.9); // returns 5
Math.ceil(4.7); // returns 5
Math.ceil(4.4); // returns 5
Math.ceil(4.2); // returns 5
Math.ceil(-4.2); // returns -4
// 실무 사례: 게시판처럼 페이징 처리가 필요한 곳에서 Math.ceil을 사용해서 총 페이지 수를 구별

// Math.floor(): 숫자에 대한 무조건 내림 처리
Math.floor(4.9); // returns 4
Math.floor(4.7); // returns 4
Math.floor(4.4); // returns 4
Math.floor(4.2); // returns 4
Math.floor(-4.2); // returns -5

// Math.trunc(): 소수 부분은 무조건 버리고 정수 부분만 반환
Math.trunc(4.9); // returns 4
Math.trunc(4.7); // returns 4
Math.trunc(4.4); // returns 4
Math.trunc(4.2); // returns 4
Math.trunc(-4.2); // returns -4

// Math.sign(): 숫자가 양수인지 음수인지 확인하는 용도로 사용되며 양수이면 1, 음수이면 -1, 0이면 0을 반환
Math.sign(-4); // returns -1
Math.sign(0); // returns 0
Math.sign(4); // returns 1

// Math.pow(): 제곱근 값 반환
Math.pow(8, 2); // returns 64

// Math.sqrt(): 루트 값 반환
Math.sqrt(64); // returns 8

// Math.abs(): 무조건 양수로 반환
Math.abs(-4.7); // returns 4.7

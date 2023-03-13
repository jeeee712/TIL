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

// Math.min(), Math.max(): 가장 작은 값을 반환, 가장 큰 값을 반환
Math.min(0, 150, 30, 20, -8, -200); // returns -200
Math.max(0, 150, 30, 20, -8, -200); // returns 150

// Math.random(): 0보다 크고 1보다 작은 숫자형 값을 반환
Math.random(); // 랜덤 숫자 반환

Math.floor(Math.random() * 10); // 0에서 9 사이의 정수
Math.floor(Math.random() * 101); // 0에서 100 사이의 정수
Math.floor(Math.random() * 10) + 1; // 1에서 10 사이의 정수

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 실습: 가위바위보 게임 만들기
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rspPlayer(userRsp) {
    const rsp = ["가위", "바위", "보"]
    const playerRsp = rsp[getRandomInteger(0, 2)]
}

if (userRsp== playerRsp) {
    retrun {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: 0,
    };
} else if (userRsp == "가위") {
    if (playerRsp == "보") {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: 0,
        };
    } else {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: -1,
        };
    }
} else if (userRsp == "바위") {
    if (playerRsp == "가위") {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: 1,
        };
    } else {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: -1,
        };
    }
} else if (userRsp == "보") {
    if (playerRsp == "바위") {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: 1,
        };
    } else {
        return {
            userRsp: userRsp,
            playerRsp: playerRsp,
            winner: -1,
        }
    }
}

function rspPlayer2(userRsp) {
    const rsp = ["가위", "바위", "보"];
    const playerRsp = rsp[getRandomInteger(0, 2)];
    const winValue = {
        가위: "보",
        바위: "가위",
        보: "바위",
    };
    
    return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner:
            userRsp= playerRsp ? 0 : winValue[userRsp] == playerRsp ? 1 : -1,
    };
}
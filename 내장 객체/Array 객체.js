// toString(): 배열 안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); // Banana,Orange,Apple,Mango

// join(): 배열 안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * "); // Banana * Orange * Apple * Mango

// 실무 사례: 문자열을 합쳐야 하는 경우
let userHtml = [];
for(const user of userList) {
    userHtml.push('<tr>');
    userHtml.push('<td>' + user.name + </td>);
    userHtml.push('<td>' + user.email + </td>);
    userHtml.push('</tr>');
}
document.getElementById('userTableTbody').innerHTML = userHtml.join('');

// pop(): 배열에서 마지막 데이터를 제거하고, 마지막 데이터를 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.pop(); // x = "Mango"
// 실무 사례: 스택 자료구조를 구현할 때 선입후출

// push(): 배열에 새로운 요소(데이터, 객체 등)를 추가함
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // "Kiwi"가 fruits 배열에 추가됨
// 실무 사례: 장바구니 추가 버튼

// shift(): 배열에서 첫 번째 요소를 제거하고 첫 번째 요소를 반환
let fruits = ["Banana", "Orange", "Apple","Mango"];
fruits.shift(); // "Banana"를 fruits 배열에서 제거하고 반환
// 실무 사례: 큐 자료구조를 구현

// unshift(): 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // "Lemon"을 fruits 배열 맨 앞에 추가하고 배열의 길이를 반환

// 실무 사례: HTML의 <select> 태그를 구현할 때
let cities = [ // 지역 목록
    {code: '02', title: '서울'},
    {code: '21', title: '부산'},
    {code: '064', title: '제주'},
];

cities.unshift({code: '', title: '지역을 선택하세요'}); // 배열의 첫 번째 요소로 추가

let options = [];
for(const city of cities) { // option 태그 구성
    options.push('<option value"'+ city.code + '">' + city.title + '</option>');
}

// 배열 요소 변경: 변경하고자 하는 배열 인덱스로 접근해서 새로운 요소를 할당
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"; // 배열에서 인덱스가 0인 요소인 "Banana"를 "Kiwi"로 변경

// splice(): 새로운 요소를 특정 위치에 추가, 추가 시에 기존 요소 삭제 가능
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // [Banana, Orange, Lemon, Kiwi, Apple, Mango]
// 첫 번째 파라미터 - 새로운 요소를 추가할 인덱스 번호
// 두 번째 파라미터 - 첫 번재 파라미터에 해당하는 인덱스에서 요소를 추가하기 전에 삭제할 요소 수
// 나머지 파라미터 - 추가할 요소
// 실무 사례: 테이블에서 특정 행을 선택하고 '행 추가' 버튼을 클릭했을 때, 현재 선택된 행의 인덱스 번호를 기준으로 새로운 행을 추가해야 할 때

// concat(): 2개 이상의 배열을 하나의 배열로 결합
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let myChildren = arr1.concat(arr2, arr3);

// slice(): 첫 번째 파라미터는 시작 인덱스, 두 번째 파라미터는 종료 인덱스 번호로 두 번째는 생략 가능하다. 생략하면 시작 인덱스에서 마지막 배열 요소까지 잘라내서 배열 형태로 반환한다.
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3); // [Apple, Mango]
let citrus2 = fruits.slice(1, 3); // [Orange, Lemon]

// sort(): 배열에 문자형 데이터가 있는 경우 오름차순으로 정렬
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

// 숫자값으로 정렬하려면 정렬 함수를 정의해서 사용해야 함
// 오름차순
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){return a - b});

//내림차순
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

// 정렬된 배열을 역순으로 정렬하려면 reverse() 함수 사용
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

// 실무
let persons = [{
    name: "유재석",
    point: 78
    city: "서울"
},
{
    name: "김종국"
    point: 92
    city: "서울"
},
{
    name: "양세찬",
    point: 76,
    city: "제주"
}
{
    name: "하하",
    point: 81,
    city: "서울"
}
];

persons.sort(function(a, b){
    return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});

// filter(): 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter(function(word){
    return word.length > 6; //단어의 길이가 6자리보다 큰 단어만 추출해서 새로운 배열 반환
});

let persons = [{
    name: "유재석",
    point: 78,
    city: "서울"
},
{
    name: "김종국",
    point: 92,
    city: "제주"
},
{
    name: "양세찬",
    point: 76,
    city: "제주"
},
{
    name: "하하",
    point: 81
    city: "서울"
}
];

let pass = persons.filter(funciton (person){ // potint가 80보다 큰 사람만 반환
    return person.point > 80;
});

// map(): 배열의 데이터가 Object형일 때, 배열에 담긴 Object를 새로운 형태의 Object로 변환해서 배열로 반환
let userList = [{
    firstName: "재석",
    lastName: "유",
    email: "yu@gmail.com"
},
{
    firstName: "종국"
    lastName: "김",
    email: "kim@gmail.com"
},
{
    firstName: "세찬",
    lastName: "양",
    email: "yang@gmail.com"
},
{
    firstName: "석진",
    lastName: "지",
    email: "ji@gmail.com"
}
];

let userList2 = userList.map(function (user){
    return {
        fullName: user.lastName + user.firstName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }
});

// reduce():배열에 담긴 데이터를 하나씩 순회하며 callback 함수의 실행값을 누적하여 결과값을 반환하는 함수
let points = [40, 100, 1, 5, 25, 10];
let sum = points.reduce(function (total, currentValue) {
    return total + currentValue;
}, 0);

console.log(sum);
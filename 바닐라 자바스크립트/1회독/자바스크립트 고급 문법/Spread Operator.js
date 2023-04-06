// Spread Operator는 배열, 문자열과 같이 iteration 형태의 데이터를 요소 하나하나로 모두 분해해서 사용할 수 있게 해 준다.
let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];
let arr3 = [...arr2, ...arr1]; // 배열의 데이터를 요소 하나하나로 모두 분해해서 새로운 배열에 요소로 할당
console.log(arr3); // [1, 2, 3, 4, 5, 6]

let cd = "CD";
let alphabet = ["A", "B", ...cd]; // 문자열을 캐릭터 한 글자씩 모두 분해해서 새로운 배열에 요소로 할당
console.log(alphabet); // ['A', 'B', 'C', 'D'])

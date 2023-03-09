// Set 객체: 데이터 타입에 상관없이 값을 추가할 수 있는 배열과 같은 집합이지만, 중복 값을 허용하지 않는다.

// Set 생성자
let mySet = new set();

// add(): 데이터 추가
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 이미 1이란 값이 저장되어 있기 때문에 추가되지 않음
mySet.size; //3, Set에 저장되어 있는 데이터의 수는 size 속성을 통해 쉽게 알 수 있다.

// has(): Set에 특정 데이터가 저장되어 있는지 확인
mySet.has(1); //true

// delete(): 저장되어 있는 특정 데이터를 삭제
mySet.delete(2);

// clear(): 저장되어 있는 모든 데이터를 한 번에 삭제
mySet.clear(); // 저장되어 있는 모든 데이터가 삭제됨

// forEach(): Set에 저장되는 모든 데이터를 읽을 때
mySet.forEach(function (item) {
  console.log(item);
});

// Map 객체: Object와 매우 유사함

// Map 생성자
let userMap = new Map();

// set()
let userMap = new Map();
userMap.set("name", "홍길동");
userMap.set("email", "abc@gmail.com");
userMap.set("phone", "000-0000-0000");
userMap.size; // 3

// get()
userMap.get("name"); // 홍길동

// has()
userMap.has("name"); // true

// delete()
userMap.delete("name"); // 파라미터로 키 전달

// clear()
userMap.clear(); // 저장되어 있는 모든 데이터가 삭제됨

// forEach(): 맵에 저장되는 모든 데이터를 읽을 때
userMap.forEach(function (item) {
  console.log(item);
});

// Object와 Map의 차이점
// Object의 경우 키로 문자열만 사용할 수 있지만, Map은 키로 어떤 타입이든 가능하다.
// Object는 몇 개의 데이터가 담겼는지는 수동적으로 계산해야 하지만, Map은 size 속성을 통해 크기를 쉽게 알 수 있다.
// Object는 저장된 데이터를 for-in 반복문으로 읽었을 때 데이터를 저장한 순서대로 읽는다고 보장할 수 없지만 Map은 데이터를 저장한 순서를 보장한다.

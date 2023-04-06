// Object Destructing은 Object에 저장된 데이터를 분해하여 필요한 데이터만 바로 추출해서 사용할 수 있도록 한다.
function getPerson() { // Object로 데이터를 반환하는 함수
    return {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "john@gmail.com",
        city: "New York",
        country: "USA"
    };
}

let ({firstName, lastName}) = getPerson(); // 사용하려는 데이터가 저장되어 있는 키 이름만 정의하면 Object에서 해당 키를 갖는 값을 바로 추출해서 사용할 수 있음
console.log(firstName); // John
console.log(lastName); // Doe

function displayFullName({firstName, lastName}) { // 전달받은 Object 데이터에서 필요한 데이터의 키만 정의해서 사용
    console.log(`${firstName} ${lastName}`); // John Doe
}

displayFullName(getPerson()); // 함수 호출 시 Object를 파라미터 값으로 전달
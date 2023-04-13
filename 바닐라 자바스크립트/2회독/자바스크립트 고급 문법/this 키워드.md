## this 키워드

this 키워드는 사용되는 위치에 따라 this 키워드에 바인드 된 객체가 달라진다.

## this에 window 객체가 바인딩 된 경우

script 태그 루트와 script 안에 선언된 함수 내에서 this는 window 객체가 된다.

## this에 DOM 요소가 바인딩 된 경우

HTML DOM 요소에서 onclick, onchange 등의 이벤트가 발생할 때 호출하는 함수의 파라미터로 this를 전달하면 이벤트가 발생한 HTML DOM 그 자체가 된다.

## this에 Object 객체가 바인딩 된 경우

함수를 정의할 때 함수 내에서 Object 내에 정의된 다른 키에 접근하려면 this 키워드를 통해 접근할 수 있다.

자세한 내용은 블로그 참조(https://jeeee712.tistory.com/52)

// package.json 안에 start 로 현폴더의 index.js를 설정해놓았다.
// -> npm run start

//ES모듈 사용시 import 
import {add, sub, multiply} from "./math.js";

console.log(add(10, 2));
console.log(sub(5, 1));
console.log(multiply(25, 4));

// export시 default로 하면 함수명 바꿔도 됨. 
import div from "./math.js";
console.log(div(100, 2));


//위처럼 한 모듈 안에서 가져오는 함수들을 가져오는 경우,
// import div, {add, sub, multiply} from "./math_esm.js"; 로 쓸 수 있다. 
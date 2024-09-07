// package.json 안에 start 로 현폴더의 index.js를 설정해놓았다.
// -> npm run start


// 다른 패키지(모듈)의 함수 가져오기.
const moduleData = require("./math");
console.log(moduleData.add(2, 1));
console.log(moduleData.sub(10, 3));

//혹은
const {add, sub} = require("./math");
console.log(add(10, 20));
console.log(sub(10, 5));

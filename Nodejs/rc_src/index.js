import randomColor from "randomcolor"; //라이브러리는 import시에 이름만 명시

const color = randomColor();
console.log(color);

/**
node_modules나 package-lock.json은 github에 올리지 않는다.
package.json의 dependencies에 기록만 있다면, npm install 명령어로 모두 복구 다운로드가 가능하다.

 */
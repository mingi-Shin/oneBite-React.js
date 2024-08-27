
window.onload = function(){ // HTML보다 JS가 먼저 실행되기때문에 작성
  let friend1 = "하츄핑";
  let friend2 = "시진핑";
  let friends = `${friend1}과 ${friend2}는 서로 친구일까에 대한 논의`;
  
  document.getElementById("put").innerHTML = friends;
}


// 형변환
let str2 = "30개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);
//parseInt()는 첫 문자가 숫자일경우에만 숫자만 변환
let str3 = "하츄핑 70개";
let strToNum3 = parseInt(str3);
console.log(strToNum3);


//null 병합 연산자
// -> 존재하는 값을 추출하는 기능
// -> null, undefiend가 아닌 값을 찾아냄
let userName = "신민기";
let userNickName;
let displayName = userName ?? userNickName;
console.log(displayName);



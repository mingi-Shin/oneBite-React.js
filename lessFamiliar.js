//잘 안써본 문법 기록

window.onload = function(){ // HTML보다 JS가 먼저 실행되기때문에 작성
  let friend1 = "하츄핑";
  let friend2 = "시진핑";
  
  let friends = `${friend1}과 ${friend2}는 서로 친구일까`;
  
  document.getElementById("put").innerHTML = friends;
  
  
}



// 단락 평가(Short-circuit Evaluation)
function returnFalse(){
  console.log("False 함수");
  return false;
}
function returnTrue(){
  console.log("True 함수");
  return true;
}
console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());


//단락 평가 활용 사례
let person = {
  name: "신민기",
  job: "Developer"
}
let person2;

function printName(person){
  if(!person){
    console.log("person에 값이 없음");
    return;
  }
  console.log(person.name);
}
printName(person);
printName(person2);

function printJop(person){
  const job = person && person.job; //
  console.log(job || "직업의 값이 없음");
}
printJop(person);
printJop(person2);

// 배열의 구조 분해 할당
let arr = ["서울", "경기", "경상도"];
let [인규, 민기, 상휘, 원하 = "수원", 인재] = arr;
console.log(인규, 민기, 상휘, 원하, 인재);


// 객체의 구조 분해 할당
let person = {
  name: "신민기",
  age: 34,
  job: "developer"
}

let {name, age, job: myJob, hobby} = person;
console.log(name, age, myJob, hobby);

// 객체 구조 분해 할당을 이용해서 함수의 매개변수로 받기 (프로퍼티 값 호출)
const func = ({name, age, job, hobby}) => {
  console.log(name, age, job, hobby);
}
func(person);

//연습
let person2 = {
  name: "장상휘",
  age: 34,
  job: "farmer"
}
func(person2);


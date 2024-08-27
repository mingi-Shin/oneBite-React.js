//콜백함수
function main(param){
  console.log("main is Operating.. " );
  param();
}
function sub01(){
  console.log("sub01 is Operating.. ");
}

main(sub01);
main( () => {
  console.log("익명함수 is Operating.. ");
})


//콜백함수의 활용 예시
function repeat(count){
  for(let i=1; i <=count; i++){
    console.log(i);
  }
}
repeat(5);
function doubleRepeat(count){
  for(let i = 1; i <= count; i++){
    console.log(i * 2);
  }
}
doubleRepeat(5);

console.log("repeat vs repeatUp");

function repeatUp(count, callback){
  for(let i=1; i<=count; i++){
    callback(i);
  }
}
repeatUp(5, function(num){
  console.log(num * 2);
})
repeatUp(5, (num) => {
  console.log(num * 3);
})


//객체 안에 함수 가능
const pserson ={
  name: "신민기",
  age: 34,
  introduce: function() {
    console.log("안녕 나의 이름은 "+ this.name + "이고 "+ this.age + "살이야");
  },
}
pserson.introduce();
//화살표함수는 this를 상위객체의 것을 가진다. 

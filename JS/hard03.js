// 1. Spread연산자
// 객체나 배열의 여러개의 값을 개별로 흩뿌려주는 역할 
let arr1 = [1, 2, 3];
let arr2 = ['a', arr1[0], arr1[1], arr1[2], 'b', 'c'];
console.log(arr2); // 위 방법은 복잡하다. 

// ...(): 흩날려라 배열앵 
let arr3 = ['A', ...arr1, 'B', 'C' ];
console.log(arr3);

// 객체 응용예시 
const worrior = {
  str: 20,
  dex: 10,
  wis: 5
}
let npc1 = {
  place: "naomi",
  name: "raphael",
  ...worrior,
}
console.log(npc1);

//이렇게 가져올 수도 있고.. 
function funcA(p1, p2, p3){
  console.log(p1, p2, p3);
}
funcA(arr1);


// 2. Rest매개변수
// Rest -> 나머지, 나머지 매개변수
function funcB(one, ...rest){ // 매개변수임(Rest자료형을 매개변수로 넣는다는 의미임)Spread연산자 아님!, one은 넣을수도 뺄수도 맘대로. 
  console.log(one, rest);
}
funcB(...arr1);

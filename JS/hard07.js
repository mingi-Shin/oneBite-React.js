//5가지 순회 & 탐색

// 1.forEach
let arr1 = [1, 2, 3, 4, 5, '6'];
let doubleArr = [];

arr1.forEach((item, idx, arr) => {
  doubleArr.push(item*2);
});
console.log(doubleArr);

// 2. includes: 배열에 특정 요소가 있는지 확인하는 메서드
let isInclude = arr1.includes(3);
console.log(isInclude);

// 3. indexOf: 인덱스 반환
let index = arr1.indexOf(3);
console.log(index);

// 4. findIndex: 모든 요소를 순회하면서 콜백함수를 처음 true하는 인덱스만 반환
let findIndex = doubleArr.findIndex(function(item){
  if(item % 2 === 0 && item > 5) return true;
});
  //간단표현식 
let findIndex2 = doubleArr.findIndex((item) => item % 4 === 0)

console.log(findIndex, doubleArr[findIndex]);
console.log(findIndex2, doubleArr[findIndex2]);


// 3 vs 4: 배열이 객체형일 경우! 
let object = [
  {name: "신민기", city: "용인"},
  {name: "전인규", city: "서울"},
  {name: "장상휘", city: "상주"},
  {name: "이주녕", city: "서울"},
  {name: "서상혁", city: "용인"},
  {name: "토마토", city: "상주"},
]
//3
console.log(
  object.indexOf({city:"상주"}) // -1 반환, 못찾음
);
//4
let idx = object.findIndex(
  (item) => item.city === "상주"
);
console.log(object[idx]);


// 5. find: 모든 요소를 순회하면서 콜백함수를 참하는 요소, 요소를 그대로 반환
let finded = object.find(
  (item)=> item.city === '서울'
);
console.log(finded);
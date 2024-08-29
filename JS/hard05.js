//for of 반복문 (향상된 반복문)
let arr = [1, 2, 3, 4, 5];
for(let item of arr){
  console.log(item);
}



//객체 순환 예제 
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

// object.keys 사용: key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(npc1); //키값만 뽑아 

for(let key of keys){
  const value = npc1[key];
  console.log(key, value); //키, 벨류 ;
}

// object.values 사용
let values = Object.values(npc1); //벨류만 뽑아 

for(let value of values){
  console.log(value);
}

// for in 사용(only 객체)
for(let key in npc1){
  let value = npc1[key];
  console.log(key, value);
}

//주의. 
// for.. of.. 는 배열에만
// for.. in.. 은 객체에만 사용 가능 
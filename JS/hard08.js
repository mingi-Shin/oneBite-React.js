// 배열 변형 메서드 5가지

// 1. filter: 기존 배열에서 조건을 만족하는 요소값 모두 반환
let object = [
  {name: "신민기", city: "용인"},
  {name: "전인규", city: "서울"},
  {name: "장상휘", city: "상주"},
  {name: "이주녕", city: "서울"},
  {name: "서상혁", city: "용인"},
  {name: "토마토", city: "상주"},
]

const seoulPeople = object.filter((item)=>item.city === '서울');
seoulPeople.forEach((item)=>console.log(item));


// 2. map: 배열을 순회하며 콜백실행하고 결과값을 모아서 새로운 배열을 만든다. (vs forEach)
let arr1 = [1, 2, 3, 4];
let doubleArr = [];

arr1.forEach((item, idx, arr) => {
  doubleArr.push(item * 2); //기존의 배열 변수에 push()해줘야 한다.
});
console.log(doubleArr);

let doubleArr2 = arr1.map((item, idx, arr)=> {
  return item * 2; //map()에 의해 return값이 해당 변수의 값이 된다.
})
console.log(doubleArr2);

// map 실용예시
  const yongyinPeople = object
  .filter((item) => item.city === '용인')
  .map((item) => item.name);

  console.log(yongyinPeople);



// 3. sort: 배열을 사전순으로 정렬하는 메서드 (원본배열 영향O)
const alphabet = ['z', 'h', 'c', 'a'];
alphabet.sort();
console.log(alphabet);

const numbs = [10, 3, 6, 1];
numbs.sort((a,b) => {
  //오름차순
  if (a > b){
    //b가 a 앞에 와라
    return 1;
  } else if (a < b){
    //a가 b 앞에 와라
    return -1;
  } else {
    //같다. 바꾸지 마라
  } return 0;
});
console.log('오름차순: ' + numbs);

numbs.sort((a,b) => {
  //내림차순
  if (a > b){
    //a가 b 앞에 와라
    return -1;
  } else if (a < b){
    //a가 b 뒤에 와라
    return 1;
  } else {
    //같다. 바꾸지 마라
  } return 0;
});
console.log('내림차순: ' + numbs);


// 4. toSorted: 원본배열 변환X, 새로운 배열을 반환
const alphabet2 = ['z', 'h', 'c', 'a'];
const toSorted = alphabet2.toSorted();

console.log(alphabet2); //toSorted()는 원본에 영향 없음 
console.log(toSorted);


// 5. join: 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let adj = ['행복한', '불행한', '찬란한'];
let nouns = ['신민기', '전인규', '장상휘'];
let verbs = ['밥을 먹다', '잠을 자다', '공부를 하다'];
let joined;
let joined2;
function mks(){

  // push() 사용
  let sentence = [];
  let adj1 = adj[Math.floor(Math.random() * adj.length)];
  let nouns1 = nouns[Math.floor(Math.random() * nouns.length)];
  let verbs1 = verbs[Math.floor(Math.random() * verbs.length)];
  sentence.push(adj1, nouns1, verbs1);

  console.log(sentence);
  joined = sentence.join("-");
  console.log('push: ' + joined);

  // map() 사용
  let sentence2 = [adj, nouns, verbs].map((array) => 
    array[Math.floor(Math.random() * array.length)]);

  console.log(sentence2);
  joined2 = sentence2.join("-");
  console.log('map: ' + joined2);
}
mks();
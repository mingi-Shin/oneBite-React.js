//배열 메서드: 요소 조작 (6)

//1. push: 배열의 맨 뒤에 요소 추가
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);


//2. pop: 배열의 맨 뒤에 요소 제거하며 반환
let arr2 = [1, 2, 3];
let poppedItem = arr2.pop();
console.log(poppedItem, arr2);


//3. shift: 배열의 맨 앞에 요소 제거하며 반환
let arr3 = ['a','b', 'c'];
let shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);


//4. unshift: 배열의 맨 앞에 요소를 추가
let arr4 = [1, 2, 3];
arr4.unshift('a', 'b', 'c');
console.log(arr4);

// push, pop 속도 > (un)shift 속도

//5. slice: 배열의 특정 범위를 잘라서(복사) 반환
let arr5 = [10, 20, 30, 40, 50, 60, 70];
let slice = arr5.slice(2, 4);
let slice2 = arr5.slice(-1 );
console.log(slice);
console.log(slice2);

//6. concat: 서로 다른 배열 이어붙이기
let arr6 = [1, 2, 3];
let arr7 = ['a', 'b', 'c'];
let concatArr = arr6.concat(arr7);
console.log(concatArr);

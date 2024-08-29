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


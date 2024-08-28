let ob1 = {
  origin: "origin name is Raphael",
  name: "Raphael",
  age: 100
};

let ob3 = {...ob1, description: "use ...()"}; //객체를 복사해서 ob1과 다른 참조값을 가짐 

let ob2 = ob1;
ob2.name = "Arthur"; //바꿈 
console.log(ob1);

console.log(ob3); //ob2에 의해 원본값이 바뀌었지만, 복제한 객체이기 때문에 영향X 

console.log(ob1 === ob2); //같은 객체
console.log(ob1 === ob3); //다른 객체 

console.log(JSON.stringify(ob1.age) === JSON.stringify(ob3.age));
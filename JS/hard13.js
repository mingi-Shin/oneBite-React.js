// async: 함수 앞에 붙이는 키워드, 비동기 함수로 만들어준다 -> 반환값이 Promise가 된다는 의미

function getData(){
  return {
    name: "신민기",
    id: "shinmingi",
  };
}

function getData_p(){
  return new Promise((resolve, rejct) => { //return값이 promise
    setTimeout(() => {
      resolve({
        name:"카리나",
        id: "karina"
      });
    }, 1500);
  });
}


async function getData_a(){
  return { //async덕에 return값이 promise
    name: "윈터",
    id: "winter"
  };
}




function printData(){
  getData_a().then((result) => { // getData_a()는 return값이 promise이므로 then()사용 가능 
    console.log(result);
  });
}
printData();

// await: async함수 내부에서만 사용 가능한 키워드, 비동기 함수가 다 처리되기를 기다리는 역할, then()쓸 필요가 없어짐 -> 코드 간결화 
async function printData2(){
  const data = await getData_p(); //결과값은 data에 넣어줌. 
  console.log(data);
}
printData2();

// async&await은 .then()보다 가독성 및 에러 처리 일관성, 순차적 비동기 작업의 효율성, 디버깅 편의성, 중첩 비동기 코드를 더 깔끔하게 처리할 수 있는 이점이 있다! 
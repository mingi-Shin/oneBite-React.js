const promise = new Promise((resolve, reject)=>{
  //executor: 비동기 작업 실행 함수

  setTimeout(() => {
    const num ='a';

    if(typeof num === "number"){
      resolve(num + 20); //비동기 작업 성공
    } else {
      reject("num이 숫자가 아닙니다"); //비동기 작업 실패
    }
  }, 2000);
});


// then(): 비동기 작업이 성공적으로 완료되었을 때(resolved)
// catch(): 비동기 작업이 실패했을 때(rejected)

// promise.catch((error) => {
//   console.log("실패결과: "+ error);
// });

// 아래와 같이 catch()를 뒤에 붙여쓸 수도 있다 -> promise chaining
promise
  .then((value) => {
  console.log("결과값은: "+ value);
}).catch((error) => {
  console.log("실패결과: " + error);
});





/** Promise chaining 실용 예제 */
function fetchUser(userId) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log(`fetched user ID: ${userId}`);
      resolve({userId, name: 'shinmingi'}); //반환값
    }, 1000);
  });
  return promise;
}

function fetchUserPosts(user){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched posts for suer: ${user.name}`);
      resolve(["post1", "post2", "post3"]); //반환
    }, 2000);
  });
}

function displayPosts(posts) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Displaying posts: ", posts);
      resolve("Posts displayed successfully"); //반환 -> message라는 매개변수가 될 예정. 
    }, 3000 );
  })
}

//promise chaining: 콜백지옥 해결법 
fetchUser("raphael0621")
  .then(user => fetchUserPosts(user))
  .then(posts => displayPosts(posts))
  .then(message => console.log(message))
  .catch(error => console.log("Error occurred: ", error));
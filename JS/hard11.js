function add(a, b){
  setTimeout(()=>{
    const sum = a + b;
    console.log(sum);
  }, 3000)
}
// add(4, 6);


//더 나아가서
function add2(a, b, callback){
  setTimeout(()=> {
    const sum = a + b;
    callback(sum);
  }, 3000);
}
// add2(2, 4, (value)=> {
//   console.log(value);
// });



//이제 실용 예제: 사용자 데이터 저장 및 이메일 전송
  
const user01 = {
  name: "신민기",
  job: "Dev",
  email: "shinmingi@gmail.com",
  membership: 0
}

function saveUserData(userData, callback){
  setTimeout(() => {
    console.log('User Data saved: ', userData);
    callback(null, {userId: 'raphael', ...userData});
  }, 3000); // 데이터저장3초
}

function sendEmail(email, callback){
  setTimeout(() => {
    console.log('Email sent to: ', email);
    callback(null, 'Email sent successfully');
  }, 2000); //메일전송2초
}

function tier(membership, callback){
  setTimeout(() => {
    console.log('Did he/she joined membership? :', membership);
    callback('A silver', 'The perfect Gold');
  }, 1000) //티어부여1초
}


//콜백 지옥 예제: 기능이 많아지면 indent가 깊어진다 -> 가독성x
function registerUser(userData){
  saveUserData(userData, (err, savedUser) => {
    if(err){
      console.error("Error saving user data: ", err);
      return;
    }

    //데이터 저장이 완료되면 이멜 보냄
    sendEmail(savedUser.email, (err, result) => {
      if(err){
        console.log("Error sending email: ", err);
        return;
      }
      console.log("Registration process complete: ", result);

      tier(savedUser.membership, (silver, gold ) => { //여기서는 sendEmail결과에 따른 함수가 와야 하지만 일단 패스.
        console.log("he/she's tier is: ", savedUser.membership? gold : silver);
      })

    })

  })
}

//사용자 등록 요청해봄
registerUser(user01);
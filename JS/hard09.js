// 1. Date 객체 생성
let date1 = new Date("1990-06-21/10:10:10");
console.log(date1);

// 2. 타임스탬프: 특정시간으로 1970.01.01 00시(UTC)부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);
console.log(date4); 

// 3. 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //JS의 month는 0부터 시작하기에 need to +1
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(0); // month의 index[0]= 1월, index[11]= 12월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(30);

// 5. 시간을 여러 포맷으로 출력
let date2 = new Date();
console.log(date2.toDateString()); //날짜만
console.log(date2.toLocaleDateString()); //날짜를 지역화된 문자열로
console.log(date2.toLocaleTimeString()); //시간을 지역화된 문자열로
console.log(date2.toLocaleString()); //날짜, 시간을 지역화된 문자열로



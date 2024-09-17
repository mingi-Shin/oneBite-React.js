import { useState, useRef } from "react";


//Ver.2.0: 객체로 묶어 속성 뽑아쓰기 (가독성Goat)
const Register = () => {

  // value는 현재 상태를 나타내며, 초기 값은 객체로 설정됨. 이 객체에는 name, birth, country, bio 네가지 키가 있음 
  const [value, setValue] = useState({
    name: "홍길동",
    birth: "",
    country: "선택",
    bio: ""
  });
  
  const inputRefs = {
    name: useRef(null),
    birth: useRef(null),
    country: useRef(null),
    bio: useRef(null)
  }

  /**
    e.target은 이벤트가 발생한 HTML 요소
    e.target.name은 해당 입력 필드의 name 속성을 참조
    현재의 value 객체를 복사한 후(유지), e.target.name에 해당하는 키를 e.target.value로 업데이트하여 새로운 상태를 설정;
   */
  const onChange = (e) => {
    setValue({
      ...value, // 객체를 복사하지 않으면 키들이 유지되지 않고 새로운 객체로 덮어씌워진다. 그럼 undefined가 된다. 
      [e.target.name] : e.target.value // 키 : 값
    });
  }
  
  const onSubmit = () => {
    alert("제출합니다.");
    let error =[];
    for (let key in value){ //key값 뽑아
      let val = value[key]; //값 초기화 
      if(val === null || val === '' || val === '선택'){ //값이 null이면 
        console.log('값이 없는 키: ' + key);
        error.push(key);
        inputRefs[key].current.focus(); //focus()는 한번에 하나의 요소에만 가능.. 다른 방법 찾기 
      };
    }
    console.log(error);
    alert('모든 값을 입력해 주세요 \n : ' + error);
  }

  return (
    <>
      <div>
        <h1>Register 페이지</h1>
      </div>
      <div>
        <input ref={inputRefs.name} name="name" onChange={onChange} value={value.name} placeholder={value.name} /> 값: {value.name}
      </div>
      <div>
        <input ref={inputRefs.birth}  name="birth" onChange={onChange} value={value.birth} type="date" />값: {value.birth}
      </div>
      <div>
        <select ref={inputRefs.country} name="country" onChange={onChange} value={value.country}>
          <option disabled>선택</option>
          <option value="KOR">한국</option>
          <option value="US">미국</option>
          <option value={"CN"}>중국</option>
        </select>
        값: {value.country}  --&gt;  option태그의 value값이 넘어감
      </div>
      <div>
        <textarea ref={inputRefs.bio} name="bio" onChange={onChange} value={value.bio} style={{whiteSpace:"pre-wrap"}} placeholder="내용" rows={7}></textarea>
        값: {value.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </>
  );
}

export default Register;

/**
  onChange함수로 입력값을 매개변수로 받아서 useState의 value 로 저장 -> input태그의 value={??}에 따라 고정 

  임의의 태그 안에 속성 ref={inputRef} 코드에 따라, 해당 코드가 쓰여진 태그(,input)의 DOM이 inputRef변수에 저장된다
  예로, 위에서 name태그의 DOM, <input name={name}>을 inputRef변수로 호출 가능

 */
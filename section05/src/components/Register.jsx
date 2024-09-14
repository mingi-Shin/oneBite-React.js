import { useState, useRef, useReducer } from "react";

//Ver.2.0: 객체로 묶어 속성 뽑아쓰기 (가독성Goat)
const Register = () => {

  // value는 현재 상태를 나타내며, 초기 값은 객체로 설정됨. 이 객체에는 name, birth, country, bio 네가지 키가 있음 
  const [value, setValue] = useState({
    name: "홍길동",
    birth: "",
    country: "선택",
    bio: ""
  });
  
  const inputRef = useRef();

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
    if(value.name === ""){
      //이름을 입력하는 DOM 요소에 포커스 하기
      console.log("해당 DOM 요소: ", inputRef.current);
      inputRef.current.focus();
    }
  }




  return (
    <>
      <div>
        <h1>Register 페이지</h1>
      </div>
      <div>
        <input ref={inputRef} name="name" onChange={onChange} value={value.name} placeholder={value.name} /> 값: {value.name}
      </div>
      <div>
        <input name="birth" onChange={onChange} value={value.birth} type="date" />값: {value.birth}
      </div>
      <div>
        <select name="country" onChange={onChange} value={value.country}>
          <option disabled>선택</option>
          <option value="KOR">한국</option>
          <option value="US">미국</option>
          <option value={"CN"}>중국</option>
        </select>
        값: {value.country}  --&gt;  option태그의 value값이 넘어감
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={value.bio} style={{whiteSpace:"pre-wrap"}} placeholder="내용" rows={7}></textarea>
        값: {value.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </>
  );
}

export default Register;

/**
  onChange함수로 입력값을 매개변수로 받아서 useState의 value 로 저장 -> input태그의 value={??}에 따라 고정 

  ref={inputRef} 코드에 따라, 해당 코드가 쓰여진 태그(input)의 DOM이 inputRef변수에 저장된다
  예로, 위에서 name태그의 DOM은 inputRef변수로 호출 가능

 */
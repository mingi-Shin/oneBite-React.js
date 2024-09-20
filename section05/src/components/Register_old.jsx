import { useState } from "react";

//Ver.1.0: useState 여러개 생성 
const Register = () => {

  const [name, setName] = useState("홍길동");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("선택"); //기본값을 주면 option에서 selected를 쓸 필요가 없음
  const [bio, setBio] = useState("");

  //입력된 값(e) 매개변수로 사용, useState로 입력된 e값을 저장
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Register 페이지</h1>
      </div>
      <div>
        <input onChange={onChangeName} value={name} placeholder={name} /> 값: {name}
      </div>
      <div>
        <input onChange={onChangeBirth} value={birth} type="date" /> 값: {birth}
      </div>
      <div>
        <select onChange={onChangeCountry} value={country}>
          <option disabled>선택</option>
          <option value="KOR">한국</option>
          <option value="US">미국</option>
          <option value={"CN"}>중국</option>
        </select>
        값: {country}  --&gt;  option태그의 value값이 넘어감
      </div>
      <div>
        <textarea onChange={onChangeBio} value={bio} style={{whiteSpace:"pre-wrap"}} placeholder="내용" rows={7}></textarea>
        값: {bio}
      </div>
    </>
  );
}

export default Register;

/**
  onChange함수로 입력값을 매개변수로 받아서 useState의 value 로 저장 -> input태그의 value={??}에 따라 고정 
 */
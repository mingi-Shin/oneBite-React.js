import useCustomHook from "./../hooks/useInput"


// 3가지 훅 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능해요 
// 2. 조건부, 반복문에는 호출될 수 없어 
// 3. 나만의 훅을 만들 수 있음 (접두사 use붙이면 커스텀훅)

// const state = useState(); 함수 컴포넌트 밖에서 호출 불가 
const HookExam = () => {

  const {input, setInput} = useCustomHook;
  const {input2, setInput2} = useCustomHook;

  return (
    <div>
      <input value={input} onChange={setInput} />
      <input value={input2} onChange={setInput2} />

    </div>
  );
}

export default HookExam;
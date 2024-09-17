import { useState } from "react";

//function MyCustomHook() { 커스텀 훅은 접두사로 use사용 

function useCustomHook() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useCustomHook
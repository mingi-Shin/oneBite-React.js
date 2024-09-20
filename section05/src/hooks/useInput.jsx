import { useState } from "react";

//function MyCustomHook() { 커스텀 훅은 접두사로 use사용해야 함 

function useMyCustomHook() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useMyCustomHook
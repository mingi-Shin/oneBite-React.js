import { useState } from "react";

//자식컴퍼넌트 
const PlusCount = () => {
  const [stateValue, setStateF] = useState(0); // 두개의 요소를 담은 배열 반환: 첫번째 요소는 새롭게 생성된 state값(0), 두번째 요소는 상태변화함수(state값을 변경)
  console.log(stateValue);

  return (
    
      <div>
          <h1>버튼 누르면 state값을 1씩 증가</h1>
          <span> 
            {stateValue} 
            <button onClick={()=>{
              setStateF(stateValue+1);
              console.log('stateValue값이 1증가하여 현재 ' + stateValue + '입니다.');
            }}> +버튼
            </button>
          </span>
      </div>
  );
};

export default PlusCount
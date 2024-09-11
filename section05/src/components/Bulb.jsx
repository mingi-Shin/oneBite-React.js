import { useState } from "react";

//자식컴퍼넌트 Bulb

const Bulb = () => {
  const [light, setLight] = useState("off"); //state값이 바뀌면 DOM 자동 랜더링 
  console.log(light);

  return(
      <>
        <div>
        {light === "on" ?
          (<h1 style={{ backgroundColor: "yellow" }}>on</h1>) :
          (<h1 style={{ backgroundColor: "gray" }}>off</h1>)}
        </div>
        <div>
          <button onClick={() => {
            setLight(light === 'off' ? 'on' : 'off');
          }}>
            {light === 'on' ? '불 끄기' : '불 켜기'}
          </button>
        </div>
      </>
  );
};

export default Bulb
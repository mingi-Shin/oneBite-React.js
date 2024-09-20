import './App.css'
import Bulb from './components/Bulb'
import PlusCount from './components/Pluscount';'./components/Pluscount'
import Register from './components/Register'
import HookExam from './components/HookExam';

// useState는 상태가 변경될 때, 컴포넌트가 자동으로 리렌더링되로록 해줌.(React가 알아서 DOM을 다시 그려준다.)
// 반면 JS는 DOM을 수동으로 업데이트 해줘야하기에, 상태변경 후 DOM을 조작하는 추가 코드가 필요하다.(예, --.textContent = count )

function App(){

  return (
    <>
      <HookExam/>
    </>
  );
}

export default App

/**
  부모컴퍼넌트가 렌더링 되면 자식 컴퍼넌트도 자동으로 렌더링 된다 -> App()이 렌더링 될 때 마다 App안의 useState들의 영향을 받는 많은 자식컴퍼넌트(Bulb, ... 등)도 동시에 자동랜더링
  -> 성능 하락 

  해결: App()에 있는 state들을 밖으로 빼내어 각각의 컴퍼넌트.jsx로 구성하고, import하여 App()에서 호출
 */
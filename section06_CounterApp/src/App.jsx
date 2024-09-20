import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'

function App() {

  const [value, setValue] = useState(0);

  const onClickButton = (number) => {
    setValue(value + number);
  }

  const reset = () => {
    setValue(0);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={value} />
        <p>App.jsx: 객체의 구조분해 할당으로 count라는 이름의 변수에 value값을 대입하고 Viewer에 매개변수로 전달(=파라미터)</p>
      </section>

      <section>
        <Controller onClickButton = {onClickButton} resetButton = {reset} />
      </section>
    </div>
  )
}

export default App


// section 을 지정해준 이유는 css를 쉽게 적용하기 위해 
// count라는 변수에 value값을 넣어 Viewer에 전달 
// onClickButton이라는 변수에 onClickButton함수 전달
// resetButton이라는 변수에 reset함수 전달 
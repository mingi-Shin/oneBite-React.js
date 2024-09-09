import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

// 컴퍼넌트는 첫글자가 대문자: 리액트는 JSX코드를 해석할 때, 태그가 소문자로 시작하면 이를 기본 HTML태그로 인식하고, 대문자로 시작하면 사용자 정의 컴포넌트로 인식한다.  
// App컴퍼넌트 안에 Button컴퍼넌트를 집어넣었어 (App: 부모컴퍼넌트, Button: 자식컴퍼넌트)
// Button의 속성과 값은 자식컴퍼넌트의 매개변수로 제공된다. children요소로 다른 컴퍼넌트, 다른 태그문도 된다.
function App() {
  
  //객체로 묶어서 return에 스프레드연산자...로 집어넣을 수도 있다.
  const buttonProps = {
    text: "카페",
    color: "green",
    a: 1,
    b: 2
  }

  return (
    <>
      <Button text={"메일"} color={"red"} />  
      <Button {...buttonProps} />
      <Button text={"블로그"} >
        <Header />
        <div>자식요소2</div>
      </Button>
    </>
  )
}

export default App

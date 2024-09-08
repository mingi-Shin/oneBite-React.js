import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

//컴퍼넌트는 첫글자가 대문자: 리액트는 JSX코드를 해석할 때, 태그가 소문자로 시작하면 이를 기본 HTML태그로 인식하고, 대문자로 시작하면 사용자 정의 컴포넌트로 인식한다.  
// App컴퍼넌트 안에 Header컴퍼넌트를 집어넣었어 (App: 부모컴퍼넌트, Header: 자식컴퍼넌트)
function App() {

  return (
    <>
      <h1>Wellcome to Raact World!</h1>
      <Header />  
      <Main />    
      <Footer />
    </>
  )
}

export default App

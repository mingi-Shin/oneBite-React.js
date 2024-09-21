const Viewer = ({count}) => {

  return (
    <div>
      <div>현재 카운트: </div>
        <h1>{count}</h1>
        <p>Viewer.jsx: 객체의 구조분해 할당으로 App에서 넘겨받은 count를 매개변수로 받아서 값을 표시</p>

    </div>
  )
}

export default Viewer;
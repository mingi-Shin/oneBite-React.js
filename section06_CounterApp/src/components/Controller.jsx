
const Controller = ({onClickButton, resetButton}) => {
  return (
    <div>
      <button onClick={ () => {
        onClickButton (-1);
      }}>-1</button>
      <button onClick={ ()=> {
        onClickButton(-10);
      }}>-10</button>
      <button onClick={ ()=> {
        onClickButton(-100);
      }}>-100</button>
      <button onClick={ ()=> {
        onClickButton(+100);
      }}>+100</button>
      <button onClick={ ()=> {
        onClickButton(+10);
      }}>+10</button>
      <button onClick={ ()=> {
        onClickButton(+1);
      }}>+1</button>
      <button onClick={ () => {
        resetButton();
      }}>초기화 </button>
    </div>
  );
};

export default Controller;
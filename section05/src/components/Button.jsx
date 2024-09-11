// props 객체로 받지않고, {text, color, children}로 속성만 받아서 쓸 수도 있다. 
const ButtonComponent = (props) => {
  //이벤트 객체 e
  const onClickButton = (e) => {
    console.log('props.text값: ' + props.text);
    console.log(e); //SyntheticBaseEvent= 합성 이벤트 객체
    alert(props.text);
  }
  const onMouseEnter = () => {
    console.log('마우스 위치: ' + props.text + '버튼');
  }

  return (
    <button 
      onClick={onClickButton}
      onMouseEnter={onMouseEnter}
      style={{color: props.color}}
    >
      {props.text} -{props.color.toUpperCase()} - {props.children}
    </button>
  );
};

//Button 컴퍼넌트의 기본 Props설정: 부모 컴퍼넌트에서 따로 명시한 color 속성이 없는 경우엔 black으로 기본값 설정  
ButtonComponent.defaultProps = {
  color : "black",
}

export default ButtonComponent;

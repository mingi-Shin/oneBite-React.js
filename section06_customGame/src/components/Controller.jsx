const Controller = ({hpAttackButton, mpAttackButton, hellFire}) => {

  return (
    <div>
      <div>
        <span>
          <button onClick={()=>{
            hpAttackButton(-10)
          }}>몸통박치기</button>
          <button onClick={()=>{
            hpAttackButton(-20)
          }}>지구던지기</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={()=>{
            mpAttackButton(-3)
          }}>욕설공격</button>
          <button onClick={()=>{
            hellFire()
          }}>원기옥</button>
        </span>
      </div>
    </div>
  );
}

export default Controller;
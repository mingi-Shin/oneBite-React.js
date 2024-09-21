
const Monster = ({status}) => {

  return (
    <div>
      <div>
        이미지
      </div>
      <div>
        {status.HP}/100
      </div>
      <div>
        {status.MP}/20
      </div>
    </div>
  );
}

export default Monster;
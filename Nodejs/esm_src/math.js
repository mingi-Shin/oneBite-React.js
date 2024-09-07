//math 모듈

function add(a, b){
  return a+b;
}

function sub(a, b){
  return a-b;
}

// ES모듈시스템(비동기적 로딩) 
export { 
  add, 
  sub
}

//바로 export를 붙여도 가능
export function multiply(a, b){
  return a * b;
}

//default 적용시, import할 때 마음대로 이름 설정 가능, 또 {} 불필요. 
export default function division(a, b){
  return a / b;
}
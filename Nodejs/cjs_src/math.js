//math 모듈

function add(a, b){
  return a+b;
}

function sub(a, b){
  return a-b;
}

// Common JS 사용(동기적 로딩) 
module.exports = {
  add : add,
  sub : sub,
};


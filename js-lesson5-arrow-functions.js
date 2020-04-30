function funDeclaration () {
  console.log('inside function declaration');

  return 'funDeclaration';
}

const funStatement = function () {
  console.log('inside function statement');

  return 'funStatement';
}
 
funDeclaration();
funStatement();
 
const arrowFun = () => {
  console.log('inside arrow function');

  return 'arrowFun';
}

const shortArrowFun = () => 'arrowFun';
 
arrowFun();
shortArrowFun();

const arrowFunLogicalOperators = () => funDeclaration() && funStatement() && arrowFun();

console.log('short arrow function operators', arrowFunLogicalOperators());

const registerUser = (user) => {
  console.log('user registered', user)
}

const registerUserAndPerformAction = (user, action) => {
  if (!user) {
    console.log('boomer')
  }

  registerUser(user);

  action(user);
}

registerUserAndPerformAction({
  name: 'Grzesiek'
}, (user) => {
  console.log('hello from callback', user)
})
/* 
const createAdd = (baseNumber) => 
  (addNumber) => 
    baseNumber + addNumber 

function createAdd(baseNumber) {
  return function (addNumber) {
    return baseNumber + addNumber
  }
}
 */
function createLinearFunction (a, b) {
  return function (x) {
    console.log('inside create liner function', a, b, x)
    return a * x + b;
  }
}

console.log('before defining functions')
const linearFunction1 = createLinearFunction(2, 1)
const linearFunction2 = createLinearFunction(1, 2)
console.log('after defining functions')

console.log(
  linearFunction1(-1), 
  linearFunction2(-1)
)

console.log('after calling functions')
  
/* 
console.log(createLinearFunction === createLinearFunction)
console.log(createLinearFunction(1, 1) === createLinearFunction(1, 1))
 */

function returnMePlease () {
  console.log('inside returnMePlease')
}

function returnReturnMePlease () {
  return function () {
    console.log('inside returnMePlease')
  };
}
/* 
console.log(returnMePlease === returnMePlease)
console.log(returnReturnMePlease() === returnReturnMePlease())
console.log(returnReturnMePlease() === returnMePlease) 
*/

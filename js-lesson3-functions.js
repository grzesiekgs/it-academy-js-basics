function sumNumbers (x1, x2) {
  var sum = x1 + x2; 
  console.log('somthing inside', something);
  return sum;
}

function substractNumbers (x1, x2) {
  var substraction = x1 - x2; 
  console.log('somthing inside', something);
  return substraction; 
}

function sumAndSubscract (x1, x2, x3) {
  return sumNumbers(sumNumbers(x1, x2), x3);
}

function sumTwoActions (action1, action2, x1, x2) {
  return action1(x1, x2) + action2(x1, x2)
}


const something = 'something global';

const sumResult = sumNumbers(3, 5)
const subResult = substractNumbers(3, 5)
const sumAndSubResult = sumAndSubscract(1, 2, 3)

console.log(
  'two actions', 
  sumTwoActions(
    function (x1, x2) {
      return x1 * x2
    }, 
    sumNumbers,
    2,
    3
  )
)

// console.log(sumResult, subResult, sumAndSubResult)



// f(x) = a*x + b
// f(x1, x2) = x1 + x2  

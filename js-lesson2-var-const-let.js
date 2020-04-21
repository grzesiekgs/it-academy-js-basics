 
{
/* console.log('TRYING TO LOG BEFORE')
console.log(varVariable)
 */
// var - hoisting | let, const - Temporaily Dead Zone -> TDZ
var varVariable = 'var1'
let letVariable = 'let1'
const constVariable = 'const1'

console.log('TRYING TO LOG AFTER')
console.log(varVariable, letVariable, constVariable)
/* 
console.log('TRYING TO MODIFY')
varVariable = 'var2'
letVariable = 'let2'
constVariable = 'const2'

console.log('TRYING TO LOG AFTER MODIFY')
console.log(varVariable, letVariable, constVariable)
 */
if (true) {
  var varBlock = 'block var'
  let letBlock = 'block let'
  const constBlock = 'block const'
  
  console.log('INSIDE BLOCK')
  console.log(varBlock, letBlock, constBlock)

  console.log('ACCESS LET AND CONST INSIDE OF BLOCK', letVariable, constVariable)  
}

console.log('OUTSIDE BLOCK')
console.log(varBlock)
}
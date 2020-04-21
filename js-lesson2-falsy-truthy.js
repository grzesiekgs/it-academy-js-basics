const falsyString = ''
const falsyNumber = 0
const falsyBool = false

const truthyString = 'anything'
const truthyNumber = 123
const truthyBool = true

console.log('Falsy values casted to boolean:')
console.log(falsyString, Boolean(falsyString))
console.log(falsyNumber, Boolean(falsyNumber))
console.log(falsyBool, Boolean(falsyBool))

console.log('Truthy values casted to boolean:')
console.log(truthyString, Boolean(truthyString))
console.log(truthyNumber, Boolean(truthyNumber))
console.log(truthyBool, Boolean(falsyBool))
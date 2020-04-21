
const str = 'some text'
const num = 5
const bool = true

console.log('Before conversions')
console.log('str', str, typeof str)
console.log('num', num, typeof num)
console.log('bool', bool, typeof bool)

console.log('Convert to strings', String(str), String(num), String(bool))

console.log('Convert to numbers', Number(str), Number(num), Number(bool))

console.log('Convert to booleans', Boolean(str), Boolean(num), Boolean(bool))
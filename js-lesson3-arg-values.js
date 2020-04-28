function logString (str = 'hey you forgot the string') {
  console.log('so the string is: ', str)
}

function logMoreStuff (str = 'this is string', num = 1, num2 = 2) {
  console.log('loggin stuff', str, num, num2)
}

let somethingNotDefined;

logMoreStuff('something', somethingNotDefined)
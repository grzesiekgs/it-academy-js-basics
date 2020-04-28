function strigifyObject(object) {
  return JSON.stringify(object, null, 2);
}

const person = {
  name: 'Grzesiek',
  lastName: 'Dunin-Ślęczek',
  age: 29,
  eyeColor: 'blue'
};

person.age = 30;

function registerUser (personToRegister) {
  console.log(`Registered user: ${strigifyObject(personToRegister)}`);

  console.log(`User name: ${personToRegister.name}`);

  // some more stuff out there
}

registerUser(person);


const numberOrginal = 5;
const stringOrginal = 'hello';
const objectOrginal = {
 something: 'bkabkka'
};

console.log('Orginal values:', numberOrginal, stringOrginal, objectOrginal);

let numberCopy = numberOrginal;
let stringCopy = stringOrginal;
let objectCopy = objectOrginal; 

console.log('Copy values before:', numberCopy, stringCopy, objectCopy);

numberCopy++;
stringCopy += ' world';
objectCopy.attr = 'value';

console.log('---------------------------');

console.log('Copy values after:', numberCopy, stringCopy, objectCopy);
console.log('Orginal values (again):', numberOrginal, stringOrginal, objectOrginal);

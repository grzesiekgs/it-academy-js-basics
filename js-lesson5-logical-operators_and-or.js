/*
function returnTrue () {
  console.log('returning true');

  return true;
}

function returnFalse () {
  console.log('returning false');
  
  return false;
}

console.log('OR operator');
const orResult = returnFalse() || returnTrue() || returnFalse();
console.log('OR result', orResult);

console.log('AND operator');
const andResult = returnFalse() && returnTrue() && returnTrue();
console.log('AND result', andResult);

console.log('COMBINED operators');
const combinedResult = returnTrue() && returnFalse() && returnTrue();
console.log('COMBINED result', combinedResult);

*/

const maleKid = {
  name: 'Andrzej',
  age: 12,
  sex: 'male',
  disabled: true
};

const femaleKid = {
  name: 'Grażyna',
  age: 14,
  sex: 'female',
  disabled: false
};

const maleGrownUp = {
  name: 'Leszek',
  age: 30,
  sex: 'male',
  disabled: false
}

const femaleGrownUp = {
  name: 'Mariola',
  age: 35,
  sex: 'female',
  disabled: true
}

function estabilishTicketPriceForPerson (person) {
  console.log('ticket price for ', person.name);

  if (person.age < 18 || person.disabled) {
    console.log('discount for kids and disabled!');

    return 10;
  }
  
  if (person.age < 18 && person.disabled) {
    console.log('discount for disabled kids!');

    return 5;
  } 
  
  return 15;
}

console.log(estabilishTicketPriceForPerson(maleKid));
console.log(estabilishTicketPriceForPerson(femaleKid));
console.log(estabilishTicketPriceForPerson(maleGrownUp));
console.log(estabilishTicketPriceForPerson(femaleGrownUp));

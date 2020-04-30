
function showNegations (value, name) {
  console.log('\n', name);

  console.log('negation :', !value);
  console.log('double negation :', !!value);
}

const truthyString = 'hello';
const truthyNumber = 3;
const truthyBoolean = true;

const falsyString = '';
const falsyNumber = 0;
const falsyBoolean = false;

const emptyObject = {};
const emptyArray = [];

showNegations(truthyString, 'truthyString');
showNegations(truthyNumber, 'truthyNumber');
showNegations(truthyBoolean, 'truthyBoolean');

showNegations(falsyString, 'falsyString');
showNegations(falsyString, 'falsyString');
showNegations(falsyBoolean, 'falsyBoolean');

showNegations(emptyObject, 'emptyObject');
showNegations(emptyArray, 'emptyArray');

/* 
function registerUser (user) {
  console.log('User: ', user);

  if (!user) {
    console.log('User was not provided!');

    return;
  }

  console.log('Registering user!');
}

registerUser();
registerUser({ name: 'Grzesiek' }); 
*/
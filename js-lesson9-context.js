/*
function logThis () {
  console.log('"this" in function: ', this);
}

const obj = {
  testProp: 'testVal',
  log: logThis
};
 
console.log('in global scope');
logThis();
console.log('in object');
obj.log();

const obj2 = {
  testProp: 'testVal',
  log: function () {
    console.log('"this" inside object function: ', this);
  } 
}

const logObjectThis = obj2.log;
logObjectThis();
obj2.log(); 
*/
/* 
const arrowLogThis = () => {
  console.log('"this" in arrow function: ', this);
};
 
const objArrow = {
  testProp: 'testVal',
  logArrow: arrowLogThis,
  log: logThis,
};
 
console.log('arrow in global scope');
arrowLogThis();
console.log('log in object');
objArrow.log();
console.log('log arrow in object');
objArrow.logArrow(); 
*/
/* 
const objDefineArrow = {
  testProp: 'testVal',
  createLog: function () {
    console.log('"this" while createLog :', this);
    return function () {
      console.log('"this" in created function: ', this);
    }
  },
  createArrowLog: () => {
    console.log('"this" while createArrowLog :', this);
    return () => {
      console.log('"this" in created arrow function: ', this);
    }
  },
  createHybridLog: function () {
    console.log('"this" while createHybridLog :', this);
    return () => {
      console.log('"this" in created hybrid arrow function: ', this);
    }
  }
};

// console.log('define arrow in object');
const createdLog = objDefineArrow.createLog();
const createdArrowLog = objDefineArrow.createArrowLog();
const createdHybridLog = objDefineArrow.createHybridLog();

*/
/* 
console.log('createLog');
const objA = {
  b: 'asd',
  a: createdLog
}

createdLog(); // global
objA.a();


console.log('createArrowLog');
const objB = {
  b: 'asdBBB',
  a: createdArrowLog
}

createdArrowLog(); // global
objB.a(); 
*/

/* 
console.log('createdHybridLog');
const objC = {
  b: 'asdCCC',
  a: createdHybridLog
}

createdHybridLog(); // global
objC.a();

const obj1 = {
  a: 'aaaa',
  b: 'bbbb',
  createLog: objDefineArrow.createHybridLog
}


const obj2 = {
  x: 'xxxx',
  y: 'yyyy',
  createLog: objDefineArrow.createHybridLog
}

obj1.createLog()();
obj2.createLog()(); 
*/
/* 
function logThisUser (arg1, arg2) {
  console.log('name', this.name);
  console.log('lastName', this.lastName);
  console.log('log function', this.log);
  console.log('arg1', arg1);
  console.log('arg2', arg2);
}

const user = {
  name: 'Grzesiek',
  lastName: 'Dunin-Ślęczek'
};

const userWithLog = {
  name: 'Grzesiek',
  lastName: 'Dunin-Ślęczek',
  log: logThisUser
};

userWithLog.log();

logThisUser.call({ name: 'qwe' });
logThisUser.apply(user, [123, 991]);
logThisUser.call(user, 123, 991); 
*/

function logThis () {
  console.log('"this" in function: ', this);
}

const user = {
  name: 'Grzesiek',
  lastName: 'Dunin-Ślęczek',
  log: logThis
};

const user2 = {
  name: 'Jan',
  lastName: 'Kowalski',
  log: logThis.bind(user)
};
console.log('user');
user.log();
console.log('user2');
user2.log();

console.log('comapare functions', user.log === logThis) // true
console.log('comapare users functions', user.log === user2.log) // false

user.log.apply({ a: 'b' });
user.log.call({ b: 'a' });
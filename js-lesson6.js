const SEX_FEMALE = 'female';
const SEX_MALE = 'male';
const DETAILED_USERS_DATA = [
  {
    name: 'Wiktoria',
    lastName: 'Donald',
    sex: SEX_FEMALE,
    height: 170,
    weight: 70,
  },
  {
    name: 'Kimberly',
    lastName: 'Coffey',
    sex: SEX_FEMALE,
    height: 160,
    weight: 55,
  },
  {
    name: 'Ben',
    lastName: 'Swift',
    sex: SEX_MALE,
    height: 180,
    weight: 80,
  },
  {
    name: 'Dylan',
    lastName: 'Barlow',
    sex: SEX_MALE,
    height: 170,
    weight: 75,
  },
  {
    name: 'Max',
    lastName: 'Bowen',
    sex: SEX_MALE,
    height: 190,
    weight: 90,
  },
  {
    name: 'Sam',
    lastName: 'Frost',
    sex: SEX_MALE,
    height: 200,
    weight: 110,
  },
];

// helpers
const logList = (list) => console.table(list);

const getUserBmiParams = (user) => ({
  weight: user.weight,
  height: user.height,
});

const compareUserSex = (sex) => (user) => user.sex === sex;

const calculateBmi = (user) => user.weight / Math.pow(user.height / 100, 2);
/*
// forEach
const listUsersFullNames = (users) =>
  users.forEach((user) => console.log(`${user.name} ${user.lastName}`));

logList(DETAILED_USERS_DATA);
listUsersFullNames(DETAILED_USERS_DATA);

// map
console.log('getUsersFullNames');
const getUsersFullNames = (users) => users.map((user) => `${user.name} ${user.lastName}`);
logList(getUsersFullNames(DETAILED_USERS_DATA));

console.log('getUsersBmiParams');
const getUsersBmiParams = (users) => users.map(getUserBmiParams);
logList(getUsersBmiParams(DETAILED_USERS_DATA));

console.log('getAnonymousBmiData');
const getAnonymousBmiData = (users) => users.map(calculateBmi);
logList(getAnonymousBmiData(DETAILED_USERS_DATA));


// filter
console.log('getSexAnonymousBmiData');
const getSexAnonymousBmiData = (users, sex) =>
  users.filter((user) => user.sex === sex).map(calculateBmi);
logList(getSexAnonymousBmiData(DETAILED_USERS_DATA, 'female'));
logList(getSexAnonymousBmiData(DETAILED_USERS_DATA, 'male'));


// every and some
const usersHaveSameSex = (users, sex) => users.every(compareUserSex(sex));
const someUsersHaveSex = (users, sex) => users.some(compareUserSex(sex));

console.log('usersHaveSameSex', usersHaveSameSex(DETAILED_USERS_DATA, 'male'));
console.log('someUsersHaveSex', someUsersHaveSex(DETAILED_USERS_DATA, 'female'));


// sort
console.log('sortUsersByHeight');
const sortUsersByHeight = (users) =>
  users.sort((prevUser, currUser) => prevUser.height - currUser.height);
logList(sortUsersByHeight(DETAILED_USERS_DATA));
*/
/* 
let age = 100;

if (age < 18) {
  console.log('child');
} else if (age < 40) {
  console.log('grown up');
} else if (age < 60) {
  console.log('middle age');
} else if (age < 100) {
  console.log('old');
} else {
  console.log('dead');
}
 */
/* const lifeTime = 'child';

if (lifeTime === 'child') {
  console.log('1 - 18');
} else if (lifeTime === 'grown up') {
  console.log('18 - 40');
} else if (lifeTime === 'middle age') {
  console.log('40 - 60');
} else if (lifeTime === 'old') {
  console.log('60 - 100');
} else {
  console.log('100+');
}

let agePeriod = '??';

switch (lifeTime) {
  case 'child': {
    agePeriod = '1 - 18';
  }
  case 'grown up': {
    agePeriod = '18 - 40';
  }
  case 'middle age': {
    agePeriod = '40 - 60';
    break;
  }
  case 'old': {
    agePeriod = '60 - 100';
    break;
  }
  default: {
    agePeriod = '100 +';
  }
}

console.log('agePeriod', agePeriod);
 */
const currentOperationStep = 4;

switch (currentOperationStep) {
  case 1: {
    console.log('first step');
  }
  case 2: {
    console.log('second step');
  }
  case 3: {
    console.log('third step');
  }
  case 4: {
    console.log('fourh step');
    break;
  }
  case 5: {
    console.log('fifth step');
  }
  case 6: {
    console.log('sixth step');
  }
  case 7: {
    console.log('seventh step');
  }
  default: {
    console.log('finished');
  }
}

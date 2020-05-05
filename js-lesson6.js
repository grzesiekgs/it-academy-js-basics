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
/* 
// helpers
const logList = (list) => console.table(list);

const getUserBmiParams = (user) => ({
  weight: user.weight,
  height: user.height,
});

const compareUserSex = (sex) => (user) => user.sex === sex;

const calculateBmi = ({ weight, height }) => weight / Math.pow(height / 100, 2);

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

// DOM find element and add child
const rowsList = document.querySelector('.rows-list');
const userRow = document.createElement('div');

userRow.classList.add('row');

rowsList.appendChild(userRow);
 */

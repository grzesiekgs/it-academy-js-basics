// PRIMITIVE TYPES
const stringVar = '1' + '5';
const numberVar = 5;
const nullExample = null;
const lightsOn = true;

let copyOfNumber = numberVar;

copyOfNumber = copyOfNumber + 1;

// OBJECT TYPES
const currentDate = new Date('01/01/2020');
const copyOfDate = currentDate;

copyOfDate.setHours(10);

console.log(currentDate);
console.log(copyOfDate);
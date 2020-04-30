const numArray = [6, 5, 12, 19, 20];

function sumArrayFor (array) {
  const length = array.length;
  let sum = 0;

  for (let i = 0 ; i < length ; i++) {
    sum = sum + array[i];
  }

  return sum;
}

function sumArrayWhile (array) {
  const length = array.length;
  let i = 0;
  let sum = 0;

  while (i < length) {
    sum = sum + array[i];

    i++;
  }

  return sum;
}

console.log('sumArrayFor', sumArrayFor(numArray));
console.log('sumArrayWhile', sumArrayWhile(numArray));

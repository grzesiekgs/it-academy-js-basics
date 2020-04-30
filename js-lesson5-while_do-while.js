function logSomethingWhile (n) {
  let i = 0;

  while (i < n) {
    console.log('SOMETHING while');

    i++;
  }
}

function logSomethingDoWhile (n) {
  let i = 0;

  do {
    console.log('SOMETHING do-while');

    i++;
  } while (i < n);
}

const amount = 0;
logSomethingWhile(amount)
logSomethingDoWhile(amount);
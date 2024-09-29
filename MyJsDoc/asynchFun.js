function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is old`);
    }
  });
}

const numberChecked = 8;
checkNumber(numberChecked)
  .then((message) => {
    console.log(`${message}`);
  })
  .catch((error) => {
    console.log(`${error}`);
  });

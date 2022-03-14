function sumPrimes(num: number) {
  return findPrimes(num).reduce((prev,curr) => prev+curr,0);
}

function findPrimes(num: number) {
  const result = [];
  let temp = [];

  let i = 2;
  let j = 1;

  while (i <= num) {
    if (i % j === 0) {
      temp.push(i / j);
    }

    j++;

    if (j > i) {
      if (temp.length === 2) {
        result.push(i);
        temp = [];
      }
      j = 1;
      i++;
      temp = [];
    }
  }
  return result;
}

console.log(sumPrimes(10));

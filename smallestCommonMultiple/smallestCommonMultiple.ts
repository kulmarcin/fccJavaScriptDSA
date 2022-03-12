function smallestCommons(array: number[]) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  let found = false;
  let number = max;
  let i = arr.length - 2;

  while (!found) {
    if (number % arr[i] === 0) {
      i--;
    } else if (i < 0) {
      found = true;
      return number;
    } else {
      number += max;
      i = arr.length - 2;
    }
  }
}

type array = Array<string | number>;

function destroyer(...args: any): array {
  const [array, ...other]: [array, ...array] = args;

  let i = 0;
  let j = 0;

  while (i < other.length) {
    if (array[j] === other[i]) {
      array.splice(j, 1);
    } else if (j > array.length) {
      j = 0;
      i++;
    } else {
      j++;
    }
  }

  return array;
}

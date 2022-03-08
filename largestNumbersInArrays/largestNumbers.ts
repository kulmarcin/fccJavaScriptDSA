function largestOfFour(arr: number[][]): number[] {
  let i = 0;
  let j = 0;

  let result = [];
  let temp = -Infinity;

  while (i < arr.length) {
    if (arr[i][j] > temp) {
      temp = arr[i][j];
    } else if (j > arr[i].length) {
      result.push(temp);
      temp = -Infinity;
      j = 0;
      i++;
    } else {
      j++;
    }
  }
  return result;
}

function getIndexToIns(arr: number[], num: number): number {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    } else if (num > arr[i] && num < arr[i + 1]) {
      return i + 1;
    }
  }

  return arr.length;
}

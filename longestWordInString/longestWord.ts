function findLongestWordLength(str: string): number {
  const arr = str.split(' ');
  let length = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      length = arr[i].length;
    }
  }
  return length;
}

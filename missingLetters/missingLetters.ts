function fearNotLetter(str: string) {
  const arr = str.split('');

  let i = 0;

  while (i < arr.length) {
    if (
      i < arr.length - 1 &&
      arr[i + 1].charCodeAt(0) !== arr[i].charCodeAt(0) + 1
    ) {
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
    i++;
  }
  return undefined;
}

console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));

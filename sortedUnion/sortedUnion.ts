function uniteUnique(...args: Array<number[]>) {
  const mySet = new Set();

  let i = 0;
  let j = 0;
  
  while (i < args.length) {
    if (j === args[i].length) {
      i++;
      j = 0;
    } else {
      mySet.add(args[i][j]);
      j++;
    }
  }

  return [...mySet];
}

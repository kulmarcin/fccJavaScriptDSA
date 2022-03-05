function dropElements(arr: number[], func: (n: number) => boolean) {
  let i = 0;
  while (!func(arr[i])) {
    arr.splice(0, 1);
  }

  return arr;
}

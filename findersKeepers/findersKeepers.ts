function findElement(
  arr: number[],
  func: (num: number) => boolean
): number | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

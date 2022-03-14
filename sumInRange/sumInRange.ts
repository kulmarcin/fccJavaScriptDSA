function sumAll(arr: number[]): number {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let result = 0;

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

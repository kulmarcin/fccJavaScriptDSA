function frankenSplice(arr1: number[], arr2: number[], n: number): number[] {
  let result = [...arr2];
  result.splice(n, 0, ...arr1);
  return result;
}

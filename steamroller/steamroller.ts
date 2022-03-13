function steamrollArray(arr: any) {
  const flattened: number[] = [];

  function flatten(a: any) {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        flatten(a[i]);
      } else {
        flattened.push(a[i]);
      }
    }
    return flattened;
  }

  return flatten(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

function chunkArrayInGroups(arr: string[], size: number) {
  const result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }

  return result;
}

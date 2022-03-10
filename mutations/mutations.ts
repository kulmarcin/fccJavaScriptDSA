function mutation(arr: string[]): boolean {
  const string1 = arr[0].toLowerCase();
  const string2 = arr[1].toLowerCase();

  for (let i = 0; i < string2.length; i++) {
    if (!string1.includes(string2[i])) {
      return false;
    }
  }

  return true;
}

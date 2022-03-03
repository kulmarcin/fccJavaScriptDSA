function confirmEnding(str: string, target: string): boolean {
  const string = str.split('').reverse();
  const t = target.split('').reverse();

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== string[i]) {
      return false;
    }
  }

  return true;
}

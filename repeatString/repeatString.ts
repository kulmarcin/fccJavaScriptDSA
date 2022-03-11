function repeatStringNumTimes(str: string, num: number): string {
  let string = '';

  for (let i = 0; i < num; i++) {
    string += str;
  }

  return string;
}

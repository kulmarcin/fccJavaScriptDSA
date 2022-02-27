function palindrome(str: string): boolean {
  str = str.toUpperCase();

  const regex = /[^A-Z\d]/g; // is not a letter or digit
  str = str.replace(regex, ''); //delete all non-alphanumeric elements

  let i = 0;
  let j = str.length - 1; // two-pointer technique

  const result1 = [];
  const result2 = [];

  while (i < str.length && j >= 0) {
    result1.push(str[i]);
    result2.push(str[j]);
    i++;
    j--;
  }
  return result1.join('') === result2.join('');
}

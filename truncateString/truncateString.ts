function truncateString(str: string, num: number) {
  if (num >= str.length) return str;

  const arr = str.split('');

  arr.splice(num);
  arr.push('...');

  return arr.join('');
}

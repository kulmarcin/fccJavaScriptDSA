function myReplace(str: string, before: string, after: string) {
  const regex = /[A-Z]/;

  if (regex.test(before[0])) {
    const arr = after.split('');
    arr[0] = arr[0].toUpperCase();
    after = arr.join('');
  } else {
    after = after.toLowerCase();
  }

  const arr = str.split(' ');

  const index = arr.indexOf(before);
  arr[index] = after;
  return arr.join(' ');
}

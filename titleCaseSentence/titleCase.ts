function titleCase(str: string): string {
  str = str.toLowerCase();
  const arr = str.split('');

  arr[0] = arr[0].toUpperCase();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === ' ') {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join('');
}

titleCase("I'm a little tea pot");

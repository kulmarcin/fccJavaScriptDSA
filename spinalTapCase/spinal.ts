function spinalCase(str: string) {
  const regex = /\s|_/g; // regex for replacing whitespace (or _) with -
  const regex2 = /([a-z])([A-Z])/g; // regex for pushing whitespace between letters

  str = str.replace(regex2, '$1 $2');
  str = str.replace(regex, '-');

  return str.toLowerCase();
}

console.log(spinalCase('ThisIsSpinalTap'));

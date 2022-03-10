function translatePigLatin(str: string) {
  let regex = /[aeiou]/; // vowels

  if (regex.test(str[0])) {
    return (str += 'way');
  } else {
    const arr = str.split('');
    const consonants = [];

    for (let i = 0; i < arr.length; i++) {
      if (!regex.test(arr[i])) {
        consonants.push(...arr.splice(i, 1));
        i--;
      } else {
        break;
      }
    }
    return arr.join('') + consonants.join('') + 'ay';
  }
}

console.log(translatePigLatin('schwartz'));

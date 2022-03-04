function convertToRoman(num: number): string {
  let number = num.toString().split('');
  let result = '';

  if (number.length === 1) {
    result += helperOne(+num);
  } else if (number.length === 2) {
    result += helperTens(+number[0]);
    result += helperOne(+number[1]);
  } else if (number.length === 3) {
    result += helperHundreds(+number[0]);
    result += helperTens(+number[1]);
    result += helperOne(+number[2]);
  } else {
    result += helperTousands(+number[0]);
    result += helperHundreds(+number[1]);
    result += helperTens(+number[2]);
    result += helperOne(+number[3]);
  }

  return result;
}

function helperOne(num: number): string {
  let result = [];
  if (num === 0) return '';
  if (num < 4) {
    for (let i = 0; i < num; i++) {
      result.push('I');
    }
  } else if (num === 4) {
    return 'IV';
  } else if (num === 5) {
    return 'V';
  } else if (num < 9) {
    result.push('V');
    num = num - 5;
    for (let i = 0; i < num; i++) {
      result.push('I');
    }
  } else if (num === 9) {
    return 'IX';
  }

  return result.join('');
}

function helperTens(num: number): string {
  let result = [];
  if (num === 0) return '';
  if (num < 4) {
    for (let i = 0; i < num; i++) {
      result.push('X');
    }
  } else if (num === 4) {
    return 'XL';
  } else if (num === 5) {
    return 'L';
  } else if (num < 9) {
    result.push('L');
    num = num - 5;
    for (let i = 0; i < num; i++) {
      result.push('X');
    }
  } else if (num === 9) {
    return 'XC';
  }

  return result.join('');
}

function helperHundreds(num: number): string {
  let result = [];
  if (num === 0) return '';
  if (num < 4) {
    for (let i = 0; i < num; i++) {
      result.push('C');
    }
  } else if (num === 4) {
    return 'CD';
  } else if (num === 5) {
    return 'D';
  } else if (num < 9) {
    result.push('D');
    num = num - 5;
    for (let i = 0; i < num; i++) {
      result.push('C');
    }
  } else if (num === 9) {
    return 'CM';
  }

  return result.join('');
}

function helperTousands(num: number): string {
  let result = [];
  if (num === 0) return '';
  for (let i = 0; i < num; i++) {
    result.push('M');
  }

  return result.join('');
}

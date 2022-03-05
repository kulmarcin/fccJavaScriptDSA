type myArr = Array<string | number>;

function diffArray(arr1: myArr, arr2: myArr): myArr {
  return [...check(arr1, arr2), ...check(arr2, arr1)];
}

function check(arr1: myArr, arr2: myArr): myArr {
  const result: myArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

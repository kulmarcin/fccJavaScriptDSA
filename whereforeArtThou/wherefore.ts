interface myObj {
  [key: string]: string | null | number;
}

function whatIsInAName(collection: Array<myObj>, source: myObj) {
  let arr = [];
  const keys = Object.keys(source);

  arr = collection.filter(el => {
    for (const item of keys) {
      if (!el.hasOwnProperty(item) || el[item] !== source[item]) {
        return false;
      }
    }
    return true;
  });

  return arr;
}

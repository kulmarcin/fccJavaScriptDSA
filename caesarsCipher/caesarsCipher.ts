const map: Map<string,string> = new Map();

map.set('A', 'N');
map.set('B', 'O');
map.set('C', 'P');
map.set('D', 'Q');
map.set('E', 'R');
map.set('F', 'S');
map.set('G', 'T');
map.set('H', 'U');
map.set('I', 'V');
map.set('J', 'W');
map.set('K', 'X');
map.set('L', 'Y');
map.set('M', 'Z');

//helper function - get key by value 
function getByValue(searchMap:Map<string,string>, searchValue:string):string {
  let result = '';
  
  searchMap.forEach((value, key) => {
    if (value === searchValue) {
      result = key;
    }
  });

  return result;
}

function rot13(str: string):string {
  const result = [];
  const arr = str.split('');

  for (let el of arr) {
    if (el === '!' || el === '.' || el === '?') {
      result.push(el);
    } else if (el === ' ') {
      result.push(' ');
    } else if (map.has(el)) {
      result.push(map.get(el));
    } else {
      result.push(getByValue(map, el));
    }
  }
  return result.join('');
}

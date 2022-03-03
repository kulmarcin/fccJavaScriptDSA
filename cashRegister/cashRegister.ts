interface returnObj {
  status: string;
  change: Array<[string, number]>;
}

function getByValue( // helper function to find proper face value
  searchMap: Map<string, number>,
  searchValue: number
): string {
  let result = '';

  searchMap.forEach((value, key) => {
    if (value <= searchValue) {
      result = key;
    }
  });

  return result;
}

let map: Map<string, number> = new Map();

map.set('PENNY', 0.01);
map.set('NICKEL', 0.05);
map.set('DIME', 0.1);
map.set('QUARTER', 0.25);
map.set('ONE', 1);
map.set('FIVE', 5);
map.set('TEN', 10);
map.set('TWENTY', 20);
map.set('ONE HUNDRED', 100); // map object set for getting values

function checkCashRegister(
  price: number,
  cash: number,
  cid: Array<[string, number]>
): returnObj {
  let total = 0;

  for (const el of cid) {
    // calculating total money in cash register
    total += el[1];
  }

  total = +total.toFixed(2); // toFixed because of the floating-point

  let change = cash - price;

  if (change > total) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (change === total) {
    return { status: 'CLOSED', change: [...cid] };
  } else {
    let lookingFor = getByValue(map, change);

    let index = cid.findIndex(arr => arr.includes(lookingFor)); // index in array of cid

    const result: [string, number][] = [];
    let temp: [string, number] = [lookingFor, 0];
    while (change > 0) {
      if (cid[index][1] === 0 || (map.get(lookingFor) as number) > change) {
        // if we deplete current face value -  we go down to lower value
        if (temp[1] === 0) {
          index -= 1;
          lookingFor = cid[index][0];
          temp = [lookingFor, 0];
        } else {
          result.push(temp);
          index -= 1;

          if (index < 0) { // if we go outside of an array - break the loop
            break;
          }

          lookingFor = cid[index][0];
          temp = [lookingFor, 0];
        }
      } else if (change === 0) {
        result.push(temp);
        break;
      } else {
        change -= map.get(lookingFor) as number;
        change = +change.toFixed(2);
        cid[index][1] -= map.get(lookingFor) as number;
        temp[1] += map.get(lookingFor) as number;
      }
    }

    if (change === 0) {
      result.push(temp);
      return { status: 'OPEN', change: [...result] };
    } else {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }
  }
}

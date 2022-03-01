type output = number | undefined;

function addTogether(...args: any[]): output | ((val2: any) => output) {
  if (typeof args[0] !== 'number') {
    return undefined;
  } else if (typeof args[1] === 'undefined') {
    return (val2: any) => {
      if (typeof val2 !== 'number') {
        return undefined;
      } else {
        return args[0] + val2;
      }
    };
  } else if (typeof args[1] !== 'number') {
    return undefined;
  } else {
    return args[0] + args[1];
  }
}

interface obj {
    [key: string]: string | number
}

function truthCheck(collection: Array<obj>, pre: string) {
  for(let i=0;i<collection.length;i++) {
      if(!(pre in collection[i]) || !collection[i][pre]) {
          return false
      }
  }
  return true
}

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' }
  ],
  'sex'
);

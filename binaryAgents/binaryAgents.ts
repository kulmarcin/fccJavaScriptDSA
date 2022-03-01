function binaryAgent(str: string) {
    const arr = str.split(' ')
  return arr.map(el => String.fromCharCode(parseInt(el, 2))).join('')
}

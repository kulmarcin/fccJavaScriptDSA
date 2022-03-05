function pairElement(str: string): Array<string[]> {
  const result: Array<string[]> = [];

  const arr = str.split('');

  for (const el of arr) {
    switch (el) {
      case 'A':
        result.push(['A', 'T']);
        break;

      case 'T':
        result.push(['T', 'A']);
        break;

      case 'C':
        result.push(['C', 'G']);
        break;

      case 'G':
        result.push(['G', 'C']);
        break;

      default:
        return [];
    }
  }
  return result;
}

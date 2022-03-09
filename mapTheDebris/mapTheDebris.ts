function orbitalPeriod(arr: Array<{ name: string; avgAlt: number }>) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const pi = 2 * Math.PI;

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push({
      name: arr[i].name,
      orbitalPeriod: Math.round(
        pi * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM)
      )
    });
  }

  return result
}

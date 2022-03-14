function sumFibs(num: number) {
  const fibos = [1, 1];

  for (let i = 1; fibos[fibos.length - 1] <= num; i++) {
    if (fibos[i - 1] + fibos[i] > num) {
      break;
    }
    fibos.push(fibos[i - 1] + fibos[i]);
  }

  const result = fibos.filter(el => el % 2 !== 0);
  
  return result.reduce((prev, curr) => prev + curr, 0);
}

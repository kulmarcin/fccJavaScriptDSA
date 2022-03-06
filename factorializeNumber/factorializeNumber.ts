function factorialize(num:number):number {
    if(num <=1) return 1
    return factorialize(num-1) * num;
  }
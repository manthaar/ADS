function howm(n) {
  let memo = {
    0: 1,
    1: 1
  }
  
  function helper(a, mem) {
    if(mem[a]) return mem[a];
    mem[a] = 0;
    
    for(let i=1; i <= a; i++) {
      let l = helper(i-1, mem);
      let r = helper(a-i, mem);
      mem[a] += l*r;
    }
    
    return mem[a];
  }
  
  return helper(n, memo);
}

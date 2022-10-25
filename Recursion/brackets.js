function bts(n) {
  let res = [];
  
  function helper(o, c, slate) {
    if(o === n && n === c) {
      res.push(slate+'');
      return;
    }
    
    if(o < n) helper(o+1, c, slate+'(');
    if(o > c) helper(o, c+1, slate+')');
  }
  
  helper(1, 0, '(');
  return res;
}

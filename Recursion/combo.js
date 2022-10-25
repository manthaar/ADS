function combo(n, k) {
  let res = [];
  
  function helper(a,b,i,slate) {
    if(slate.length === b) {
      res.push([...slate]);
      return;
    }
    
    if(i === a+1) return;
    
    slate.push(i);
    helper(a,b,i+1,slate);
    slate.pop();
    
    helper(a,b,i+1,slate);
  }
  
  helper(n,k,1,[]);
  return res;
}

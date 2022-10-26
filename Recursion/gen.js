function gen(arr, tar) {
  let res = [];
  
  function helper(a, ind, ps, tar, slate) {
    if(ps > tar) return;
    
    if(ind === a.length) {
      if(ps === tar) res.push([...slate]);
      return;
    }
    
    slate.push(a[ind]);
    helper(a, ind+1, ps+a[ind], tar, slate);
    slate.pop();
    
    helper(a, ind+1, ps, tar, slate);
  }
  
  helper(arr,0,0,tar,[]);
  
  let rset = new Set(res.map(JSON.stringify));
  let r = Array.from(rset).map(JSON.parse);
  return r;
}

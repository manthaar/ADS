function permute(arr) {
  let res = [];
  
  function helper(a, ind) {
    if(ind === a.length) {
      res.push([...a]);
      return;
    }
    
    for(let i=ind; i < a.length; i++) {
      [a[i], a[ind]] = [a[ind], a[i]];
      helper(a, ind+1);
      [a[i], a[ind]] = [a[ind], a[i]];
    }
  }
  
  helper(arr, 0);
  return res;
}

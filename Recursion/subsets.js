function subsets(str) {
  let res = [];
  let arr = Array.from(str);
  
  function helper(a, ind, slate) {
    if(ind === a.length) {
      res.push([...slate].join(''));
      return;
    }
    
    slate.push(a[ind]);
    helper(a, ind+1, slate);
    slate.pop();
    
    helper(a, ind+1, slate);
  }
  
  helper(arr, 0, []);
  return res;
}

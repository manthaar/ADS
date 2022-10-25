function lettercase(str) {
  let res = [];
  let arr = Array.from(str);
  
  function helper(a, ind, slate) {
    if(ind === a.length) {
      res.push([...slate].join(''));
      return;
    }
    
    if(!isNaN(a[ind])) {
      slate.push(a[ind]);
      helper(a, ind+1, slate);
      slate.pop();
    }else {
      slate.push(a[ind].toUpperCase());
      helper(a, ind+1, slate);
      slate.pop();
      
      slate.push(a[ind].toLowerCase());
      helper(a, ind+1, slate);
      slate.pop();
    }
  }
  
  helper(arr, 0, []);
  return res;
}

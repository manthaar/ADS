function subDup(str) {
  let res = [];
  helper(str, 0, '', res, null);
  return res;
}

function helper(a, ind, ps, res, ex) {
    if(ind === a.length) {
      res.push(ps);
      return;
    }
    
    let curr = a.charAt(ind);
    helper(a, ind+1, ps, res, curr);
    
    if(curr == ex) return;
    
    helper(a, ind+1, ps+a[ind], res, null);
}

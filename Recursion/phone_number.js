function phoner(str) {
  let res = [];
  let letters = {
    0: [''],
    1: [''],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  }
  
  function helper(ds, ind, slate) {
    if(ind === ds.length) {
      let s = slate.join('');
      if(s) res.push(s);
      return;
    }
    
    let curr = ds[ind];
    
    for(let i=0; i < letters[curr].length; i++) {
      slate.push(letters[curr][i]);
      helper(ds, ind+1, slate);
      slate.pop();
    }
  }
  
  helper(str, 0, []);
  return res;
}

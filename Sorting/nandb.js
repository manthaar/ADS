function nandb(nuts, bolts) {
  let n = nuts.length;
  let nab = new Map();
  
  for(let i=0; i < n; i++) {
    nab.set(nuts[i], i);
  }
  
  for(let i=0; i < bolts.length; i++) {
    if(nab.has(bolts[i])) nuts[i] = bolts[i];
  }
  
  console.log(nuts + ' ' + bolts);
}

//Time: O(n)
//Space: O(n)

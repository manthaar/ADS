function mergesort(arr) {
  if(arr.length < 2) return arr;
  
  let mid = parseInt(arr.length/2);
  let left = arr.splice(0, mid);
  
  return merge(mergesort(left), mergesort(arr));
}

function merge(a, b) {
  let res = [];
  let i=0, j=0;
  
  while(i < a.length && j < b.length) {
    if(a[i] <= b[j]) {
      res.push(a[i++]);
    }else {
      res.push(b[j++]);
    }
  }
  
  while(i < a.length) {
    res.push(a[i++]);
  }
  
  while(j < b.length) {
    res.push(b[j++]);
  }
  
  return res;
}

//Time: n*log(n)
//Space: n (aux.)
//Stable

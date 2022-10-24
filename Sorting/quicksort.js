function quicksort(array) {
  let start = 0;
  let end = array.length - 1;
  
  array = subArray(array, start, end);
  
  function subArray(arr, low, high) {
    if(low < high) {
      let pivot = helper(arr, low, high);
      subArray(arr, low, pivot-1);
      subArray(arr, pivot+1, high);
    }
    
    return arr;
  }
  
  function helper(a, lo, hi) {
    let pInd = lo + Math.floor((hi-lo)/2);
    [a[lo], a[pInd]] = [a[pInd], a[lo]];
    
    var smaller = lo;
    for(let i=lo+1; i <= hi; i++) {
      if(a[i] < a[lo]) {
        smaller++;
        [a[i], a[smaller]] = [a[smaller], a[i]];
      }
    }
    [a[lo], a[smaller]] = [a[smaller], a[lo]];
    
    return smaller;
  }
  
  return array;
}

//Time: O(n*log(n))
//Space: O(1)
//Unstable

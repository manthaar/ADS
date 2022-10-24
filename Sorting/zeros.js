function zeros(arr) {
  let zero = 0;
  
  for(let i=0; i < arr.length; i++) {
    if(arr[i] !== 0) {
      [arr[i], arr[zero]] = [arr[zero], arr[i]];
      zero++;
    }
  }
  return arr;
}

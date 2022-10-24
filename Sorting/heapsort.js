function maxHeap(arr, len, i) {
  let largest = i;
  let l = 2*i + 1;
  let r = 2*i + 2;
  
  if(l < len && arr[l] > arr[largest]) largest = l;
  if(r < len && arr[r] > arr[largest]) largest = r;
  
  if(largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeap(arr, len, largest);
  }
}

function heapsort(arr) {
  let size = arr.length;
  for(let i = parseInt(size/2 - 1); i >= 0; i--) {
    maxHeap(arr, size, i);
  }
  
  for(let i = size-1; i >= 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    maxHeap(arr, i, 0);
  }
  
  return arr;
}

//TIme: O(n*log(n))
//Space: O(n)
//Unstable

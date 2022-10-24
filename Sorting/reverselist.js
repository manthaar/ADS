class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function rev(node) {
  let curr = node;
  let next = null;
  let prev = null;
  
  while(curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  node = prev;
  return node;
}

//Time: O(n)
//Space: O(1)

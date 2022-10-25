class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function atb(head) {
  let arr = [];
  
  while(head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  
  function helper(a,s,e) {
    if(s > e) return null;
    let mid = Math.floor((e-s)/2) + s;
    let root = new TreeNode(a[mid]);
    
    root.left = helper(a, s, mid-1);
    root.right = helper(a, mid+1, e);
    
    return root;
  }
  
  return helper(arr, 0, arr.length-1);
}

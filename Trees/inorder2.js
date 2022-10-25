class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorder(root) {
  let stack = [];
  let res = [];
  let curr = root;
  if(root === null) return [];
  
  while(curr !== null || stack.length > 0) {
    while(curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    
    curr = stack.pop();
    res.push(curr.val);
    
    curr= curr.right;
  }
  
  return res;
}

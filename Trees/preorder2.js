class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preorder(root) {
  let res = [];
  if(root === null) return [];
  let stack = [root];
  
  while(stack.length > 0) {
    let node = stack.pop();
    
    res.push(node.val);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  
  return res;
}

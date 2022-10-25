class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function postorder(root) {
  let res = [];
  if(root === null) return [];
  let stack = [root];
  
  while(stack.length > 0) {
    let node = stack.pop();
    
    if(node.left) stack.push(node.left);
    if(node.right) stack.push(node.right);
    res.push(node.val);
  }
  
  return res.reverse();
}

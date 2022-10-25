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
  
  function dfs(node) {
    res.push(node.val);
    if(node.left) dfs(node.left);
    if(node.right) dfs(node.right);
  }
  
  dfs(root);
  return res;
}

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
    if(node.left) dfs(node.left);
    if(node.right) dfs(node.right);
    res.push(node.val);
  }
  
  dfs(root);
  return res;
}

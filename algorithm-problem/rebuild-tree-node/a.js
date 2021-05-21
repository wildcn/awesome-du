function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin) {
  // write code here
  if (!Array.isArray(pre) || pre.length === 0) {
    return null;
  }
  if (!Array.isArray(vin) || vin.length === 0) {
    return null;
  }

  const root = pre[0];
  const node = new TreeNode(root);

  let i = vin.indexOf(root);
  node.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
  node.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));
  return node;
}
module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};

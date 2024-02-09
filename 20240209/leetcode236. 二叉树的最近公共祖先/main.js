/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res = root;
  const dfs = (node) => {
    if (!node) return false;
    const resL = dfs(node.left);
    const resR = dfs(node.right);
    if (node === p) {
      if (resR || resL) res = node;
      return true;
    }
    if (node === q) {
      if (resR || resL) res = node;
      return true;
    }
    if (resL && resR) {
      res = node;
    }
    return resL || resR;
  };
  dfs(root);
  return res;
};

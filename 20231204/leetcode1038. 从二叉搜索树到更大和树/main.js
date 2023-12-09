// 给定一个二叉搜索树 root (BST)，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。

// 提醒一下， 二叉搜索树 满足下列约束条件：

// 节点的左子树仅包含键 小于 节点键的节点。
// 节点的右子树仅包含键 大于 节点键的节点。
// 左右子树也必须是二叉搜索树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  const dfs = (node, sum) => {
    if (!node) return 0;
    const right = dfs(node.right, sum);
    const left = dfs(node.left, sum + right + node.val);
    const res = node.val + left + right;
    node.val += right + sum;
    return res;
  };
  dfs(root, 0);
  return root;
};

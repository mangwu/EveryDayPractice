// 给你一个有根节点 root 的二叉树，返回它 最深的叶节点的最近公共祖先 。

// 回想一下：

// 叶节点 是二叉树中没有子节点的节点
// 树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
// 如果我们假定 A 是一组节点 S 的 最近公共祖先，S 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。

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
var lcaDeepestLeaves = function (root) {
  const dfs = (node, h) => {
    // node是叶子节点
    if (!node.left && !node.right) return [node, h];
    if (!node.left) return dfs(node.right, h + 1);
    if (!node.right) return dfs(node.left, h + 1);
    const leftAns = dfs(node.left, h + 1);
    const rightAns = dfs(node.right, h + 1);
    if (leftAns[1] === rightAns[1]) return [node, leftAns[1]];
    else if (leftAns[1] > rightAns[1]) return leftAns;
    else return rightAns;
  };
  const ans = dfs(root, 0);
  return ans[0];
};

// 给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「伪回文」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。

// 请你返回从根到叶子节点的所有路径中 伪回文 路径的数目。

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
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  // 存在回文路径：相同的两个值，或者010
  const path = new Array(10).fill(0);
  const hasPalindromic = () => {
    let diff = 0;
    for (let i = 1; i <= 9; i++) {
      if (path[i] % 2 === 1) diff++;
    }
    return diff <= 1;
  };
  let ans = 0;
  const dfs = (node) => {
    if (!node) return;
    if (!node.left && !node.right) {
      // 一个叶子节点
      path[node.val]++;
      if (hasPalindromic()) ans++;
      path[node.val]--;
      return;
    }
    path[node.val]++;

    dfs(node.left);
    path[node.val]--;

    path[node.val]++;

    dfs(node.right);
    path[node.val]--;
  };
  dfs(root);
  return ans;
};

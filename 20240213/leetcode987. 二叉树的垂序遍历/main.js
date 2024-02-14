// 给你二叉树的根结点 root ，请你设计算法计算二叉树的 垂序遍历 序列。

// 对位于 (row, col) 的每个结点而言，其左右子结点分别位于 (row + 1, col - 1) 和 (row + 1, col + 1) 。树的根结点位于 (0, 0) 。

// 二叉树的 垂序遍历 从最左边的列开始直到最右边的列结束，按列索引每一列上的所有结点，形成一个按出现位置从上到下排序的有序列表。如果同行同列上有多个结点，则按结点的值从小到大进行排序。

// 返回二叉树的 垂序遍历 序列。

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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const res = new Map();
  const dfs = (node, row, col) => {
    if (!node) return;
    if (res.has(col)) {
      res.get(col).push([node.val, row]);
    } else {
      res.set(col, [[node.val, row]]);
    }
    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  };
  dfs(root, 0, 0);
  const ans = [...res]
    .sort((a, b) => a[0] - b[0])
    .map((v) =>
      v[1]
        .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]))
        .map((v2) => v2[0])
    );
  return ans;
};

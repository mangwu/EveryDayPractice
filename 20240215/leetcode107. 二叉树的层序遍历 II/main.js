// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

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
var levelOrderBottom = function (root) {
  if (!root) return [];
  const ans = [];
  let queue = [root];
  while (queue.length) {
    const nxt = [];
    const values = [];
    queue.forEach((v) => {
      values.push(v.val);
      if (v.left) nxt.push(v.left);
      if (v.right) nxt.push(v.right);
    });
    ans.push(values);
    queue = nxt;
  }
  return ans.reverse();
};

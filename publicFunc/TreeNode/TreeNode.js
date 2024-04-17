/**
 * @description 树节点
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

module.exports = { TreeNode };

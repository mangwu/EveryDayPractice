/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { TreeNode } = require("../../publicFunc/TreeNode/TreeNode");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const ans = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      ans.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return ans;
};

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // morris算法
  const ans = [];
  let prodecessor = null;
  while (root) {
    if (root.left) {
      // 有左节点
      prodecessor = root.left;
      while (prodecessor && prodecessor.right && prodecessor.right !== root) {
        prodecessor = prodecessor.right;
      }
      if (prodecessor.right) {
        // 已经遍历过了
        root = root.right;
        prodecessor.right = null;
      } else {
        // 还没遍历过
        ans.push(root.val);
        prodecessor.right = root;
        root = root.left;
      }
    } else {
      // 没有左节点
      ans.push(root.val);
      root = root.right;
    }
  }
  return ans;
};

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
var postorderTraversal = function (root) {
  const stack = [];
  const ans = [];
  let prev = null; // 记录当前节点的右子树节点，用于判断是否遍历完成
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!root.right || root.right === prev) {
      // 如果root没有右子树或者右子树已经被遍历完了，才可以获取当前节点的值
      ans.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root); // 这里push(root)是为了root在遍历完成后被pop()并被prev记录
      root = root.right;
    }
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
var postorderTraversal = function (root) {
  const ans = [];
  let prodecessor = null;
  let node = root;
  while (node) {
    if (node.left) {
      // 有左节点
      prodecessor = node.left;
      while (prodecessor && prodecessor.right && prodecessor.right !== node) {
        prodecessor = prodecessor.right;
      }
      if (prodecessor.right) {
        // 有左节点，当前左子树已被遍历
        prodecessor.right = null;
        addPath(ans, node.left); // 将 left添加到ans中
        // 需要遍历右子树
      } else {
        // 没有被遍历过
        prodecessor.right = node;
        node = node.left;
        continue;
      }
    }
    // 没有左节点，需要遍历右节点
    node = node.right;
  }
  addPath(ans, root);
  return ans;
};

/**
 * @description 添加node到path中
 * @param {number[]} path
 * @param {TreeNode} node
 */
var addPath = function (path, node) {
  let count = 0;
  while (node) {
    count++;
    path.push(node.val);
    node = node.right;
  }
  let left = path.length - count;
  let right = path.length - 1;
  while (left < right) {
    [path[left], path[right]] = [path[right], path[left]];
    left++;
    right--;
  }
};

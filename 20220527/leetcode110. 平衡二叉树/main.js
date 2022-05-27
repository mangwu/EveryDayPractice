/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-27 09:20:58                                                  *
 * @LastModifiedDate: 2022-05-27 10:19:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let ans = true;
  // 比较左右两个端点的高度即可
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    let leftHeight = dfs(node.left);
    let rightHeight = dfs(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = false;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };
  dfs(root);
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 比较左右两个端点的高度即可
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    let leftHeight = dfs(node.left);
    let rightHeight = dfs(node.right);
    // 如果遇到-1，可以提前中止，没必要遍历完真个子树
    if (
      leftHeight == -1 ||
      rightHeight == -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };

  return dfs(root) >= 0;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-02 15:46:43                                                  *
 * @LastModifiedDate: 2022-08-02 16:29:09                                      *
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
  const getHeight = (node) => {
    if (!node) {
      return 0;
    }
    let leftHeight = getHeight(node.left) + 1;
    let rightHeight = getHeight(node.right) + 1;
    return Math.max(leftHeight, rightHeight);
  };

  const dfs = (node) => {
    if (!node) {
      return true;
    }
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    if (leftHeight > rightHeight + 1 || rightHeight > leftHeight + 1) {
      return false;
    }
    return dfs(node.left) && dfs(node.right);
  };
  return dfs(root);
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
  // 在获取高度时就进行判断
  const getHeight = (node) => {
    if (!node) {
      return 0;
    }
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);
    if (
      leftHeight == -1 ||
      rightHeight == -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };
  return getHeight(root) >= 0;
};

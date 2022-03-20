/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-20 02:56:29                                                  *
 * @LastModifiedDate: 2022-03-20 03:21:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

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
  if (!root) {
    return [];
  }
  return postorderTraversal(root.left)
    .concat(postorderTraversal(root.right))
    .concat(root.val);
};

// 迭代写法

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const stack = [];
  const ans = [];
  let prev = null;
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right == null || root.right == prev) {
      // 当这个节点没有右节点，就可以直接入队
      ans.push(root.val);
      prev = right;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return ans;
};

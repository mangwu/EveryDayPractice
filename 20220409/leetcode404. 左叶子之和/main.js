/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-09 23:41:28                                                  *
 * @LastModifiedDate: 2022-04-09 23:46:27                                      *
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // bfs
  if (!root) {
    return 0;
  }
  let ans = 0;
  if (root.left && !root.left.left && !root.left.right) {
    ans += root.left.val;
  }
  return ans + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

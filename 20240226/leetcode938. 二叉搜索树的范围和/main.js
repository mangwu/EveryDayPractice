/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-26 08:56:55                                                  *
 * @LastModifiedDate: 2024-02-26 09:00:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let ans = 0;
  const dfs = (node) => {
    if (!node) return;
    if (node.val >= low && node.val <= high) {
      ans += node.val;
      dfs(node.left);
      dfs(node.right);
    } else if (node.val < low) dfs(node.right);
    else if (node.val > high) dfs(node.left);
  };
  dfs(root);
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-21 09:00:21                                                  *
 * @LastModifiedDate: 2022-07-21 09:14:10                                      *
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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  //
  const dfs = (node) => {
    if (!node) {
      return null;
    }
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    if (node.val == 0 && !node.left && !node.right) {
      return null;
    }
    return node;
  };
  return dfs(root);
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-02 09:00:45                                                  *
 * @LastModifiedDate: 2022-09-02 09:56:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉树的 root ，返回 最长的路径的长度 ，这个路径中的 每个节点具有相同值 。
// 这条路径可以经过也可以不经过根节点。

// 两个节点之间的路径长度 由它们之间的边数表示。

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
var longestUnivaluePath = function (root) {
  if (!root) {
    return 0;
  }
  let ans = 0;
  // 即同值路径
  const dfs = (node, val) => {
    if (!node) {
      return -1;
    }
    if (node.val !== val) {
      dfs(node, node.val);
      return -1;
    }
    const left = dfs(node.left, val);
    const right = dfs(node.right, val);
    ans = Math.max(left + right + 2, ans);
    return Math.max(left, right) + 1;
  };
  dfs(root, root.val);
  return ans;
};

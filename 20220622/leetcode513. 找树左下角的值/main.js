/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-22 09:02:02                                                  *
 * @LastModifiedDate: 2022-06-22 09:06:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

// 假设二叉树中至少有一个节点。

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
var findBottomLeftValue = function (root) {
  let h = 0;
  let ans = root.val;
  const dfs = (root, height) => {
    if (!root) {
      return;
    }
    if (height > h) {
      h = height;
      if (!root.left && !root.right) {
        ans = root.val;
      }
    }
    dfs(root.left, height + 1);
    dfs(root.right, height + 1);
  };
  dfs(root, 0);
  return ans;
};

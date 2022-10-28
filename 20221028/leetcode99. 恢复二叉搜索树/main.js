/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-28 10:20:28                                                  *
 * @LastModifiedDate: 2022-10-28 10:27:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // dfs遍历
  const arr = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    arr.push(node);
    dfs(node.right);
  };
  dfs(root)
  const nums = arr.map((v) => v.val);
  const sortedNums = nums.slice().sort((a, b) => a - b);
  const idxs = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortedNums[i]) {
      idxs.push(i);
    }
  }
  let temp = arr[idxs[0]].val;
  arr[idxs[0]].val = arr[idxs[1]].val;
  arr[idxs[1]].val = temp;
};

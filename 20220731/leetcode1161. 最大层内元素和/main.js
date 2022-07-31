/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-31 00:14:22                                                  *
 * @LastModifiedDate: 2022-07-31 00:18:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。

// 请返回层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。

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
var maxLevelSum = function (root) {
  let queue = [root];
  let ans = 1;
  // 层数
  let idx = 1;
  let max = root.val;
  while (queue.length) {
    const nxt = [];
    let sum = 0;
    for (const q of queue) {
      sum += q.val;
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    if (sum > max) {
      ans = idx;
      max = sum;
    }
    queue = nxt;
  }
  return ans;
};

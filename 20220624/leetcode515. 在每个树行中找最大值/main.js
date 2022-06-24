/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-24 09:17:08                                                  *
 * @LastModifiedDate: 2022-06-24 09:19:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

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
var largestValues = function (root) {
  // bfs
  if (!root) {
    return [];
  }
  let queue = [root];
  let ans = [];
  while (queue.length > 0) {
    const nxt = [];
    let max = -Infinity;
    for (const q of queue) {
      max = Math.max(max, q.val);
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    queue = nxt;
    ans.push(max);
  }
  return ans;
};

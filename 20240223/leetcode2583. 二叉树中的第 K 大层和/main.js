/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-23 23:26:20                                                  *
 * @LastModifiedDate: 2024-02-23 23:29:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵二叉树的根节点 root 和一个正整数 k 。

// 树中的 层和 是指 同一层 上节点值的总和。

// 返回树中第 k 大的层和（不一定不同）。如果树少于 k 层，则返回 -1 。

// 注意，如果两个节点与根节点的距离相同，则认为它们在同一层。

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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  if (!root) return -1;
  let queue = [root];
  const sum = [];
  while (queue.length) {
    const nxt = [];
    let curSum = 0;
    for (const q of queue) {
      curSum += q.val;
      if (q.left) nxt.push(q.left);
      if (q.right) nxt.push(q.right);
    }
    queue = nxt;
    sum.push(curSum);
  }
  sum.sort((a, b) => b - a);
  if (k > sum.length) return -1;
  return sum[k - 1];
};

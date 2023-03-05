/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-05 10:55:44                                                  *
 * @LastModifiedDate: 2023-03-05 10:59:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  let queue = [root];
  let layerSums = [];
  while (queue.length) {
    const nxt = [];
    let curSum = 0;
    for (const q of queue) {
      curSum += q.val;
      if (q.left) nxt.push(q.left);
      if (q.right) nxt.push(q.right);
    }
    layerSums.push(curSum);
    queue = nxt;
  }
  layerSums.sort((a, b) => b - a);
  return k <= layerSums.length ? layerSums[k - 1] : -1;
};

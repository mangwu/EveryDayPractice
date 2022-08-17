/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-17 08:57:33                                                  *
 * @LastModifiedDate: 2022-08-17 09:11:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和

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
var deepestLeavesSum = function (root) {
  // bfs
  let queue = [root];
  let ans = 0;
  while (queue.length > 0) {
    const nxt = [];
    let sum = 0;
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
      sum += q.val;
    }
    ans = sum;
    queue = nxt;
  }
  return ans;
};

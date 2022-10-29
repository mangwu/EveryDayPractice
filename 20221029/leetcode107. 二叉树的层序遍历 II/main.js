/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-29 14:24:12                                                  *
 * @LastModifiedDate: 2022-10-29 14:25:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let ans = [[root.val]];
  let queue = [root];

  while (queue.length) {
    let nxt = [];
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    if (nxt.length) {
      ans.push(nxt.map((v) => v.val));
    }
    queue = nxt;
  }
  return ans.reverse();
};

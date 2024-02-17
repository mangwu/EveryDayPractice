/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-16 19:14:21                                                  *
 * @LastModifiedDate: 2024-02-16 19:18:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

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
var zigzagLevelOrder = function (root) {
  const ans = [];
  if (!root) return ans;
  let queue = [root];
  while (queue.length) {
    const nxt = [];
    const cur = [];
    queue.forEach((v) => {
      cur.push(v.val);
      if (v.left) nxt.push(v.left);
      if (v.right) nxt.push(v.right);
    });
    queue = nxt;
    if (ans.length % 2 === 1) cur.reverse();
    ans.push(cur);
  }
  return ans;
};

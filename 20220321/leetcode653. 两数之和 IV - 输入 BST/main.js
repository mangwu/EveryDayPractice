/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-21 19:13:21                                                  *
 * @LastModifiedDate: 2022-03-21 19:17:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 遍历root的同时使用hash记录每个的值
  const queue = [root];
  const hash = new Set();
  while (queue.length > 0) {
    // 层序遍历
    let nxt = [];
    for (const q of queue) {
      const val = q.val;
      const sub = k - val;
      if (hash.has(sub)) {
        return true;
      }
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
      hash.add(val);
    }
    queue = nxt;
  }
  return false;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-21 19:36:33                                                  *
 * @LastModifiedDate: 2022-03-21 19:47:28                                      *
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 层序遍历
  let queue = [root];
  while (queue.length > 0) {
    const nxt = [];
    for (let i = 0; i < queue.length / 2; i++) {
      const left = queue[i];
      const right = queue[queue.length - 1 - i];
      if (left.val !== right.val) {
        return false;
      }
      // 保证节点对称
      if (left.left) {
        if (!right.right) {
          return false;
        }
      }
      if (!left.left) {
        if (right.right) {
          return false;
        }
      }
      if (left.right) {
        if (!right.left) {
          return false;
        }
      }
      if (!left.right) {
        if (right.left) {
          return false;
        }
      }
    }
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    queue = nxt;
  }
  return true;
};

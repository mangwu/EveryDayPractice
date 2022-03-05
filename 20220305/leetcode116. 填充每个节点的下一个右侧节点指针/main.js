/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-05 23:33:18                                                  *
 * @LastModifiedDate: 2022-03-05 23:52:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root) {
    root.next = null;
    let queue = [root];
    while (queue.length > 0) {
      const nxt = [];
      for (let i = 0; i < queue.length; i++) {
        if (queue[i] && queue[i].left) {
          nxt.push(queue[i].left);
          nxt.push(queue[i].right);
        }
        if (i + 1 < queue.length) {
          queue[i].next = queue[i + 1];
        } else {
          queue[i].next = null;
        }
      }
      console.log(nxt.length);
      queue = nxt;
    }
  }
  return root;
  // bfs
};

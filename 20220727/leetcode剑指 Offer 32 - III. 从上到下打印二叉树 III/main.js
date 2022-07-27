/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-27 16:06:40                                                  *
 * @LastModifiedDate: 2022-07-27 16:14:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
// 第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];
  if (!root) {
    return ans;
  }
  let queue = [root];
  // 当前行是否从左到右
  let isLeft = true;
  while (queue.length > 0) {
    const nxt = [];
    const vals = [];
    queue.reverse();
    if (isLeft) {
      for (const q of queue) {
        vals.push(q.val);
        if (q.left) {
          nxt.push(q.left);
        }
        if (q.right) {
          nxt.push(q.right);
        }
      }
    } else {
      // 从右到左
      for (const q of queue) {
        vals.push(q.val);
        if (q.right) {
          nxt.push(q.right);
        }
        if (q.left) {
          nxt.push(q.left);
        }
      }
    }
    if (vals.length > 0) {
      ans.push(vals);
    }
    isLeft = isLeft ? false : true;
    queue = nxt;
  }
};

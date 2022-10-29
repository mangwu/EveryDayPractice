/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-29 13:22:43                                                  *
 * @LastModifiedDate: 2022-10-29 13:49:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。
// （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

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
  if (!root) {
    return [];
  }
  let ans = [[root.val]];
  let queue = [root];
  // 控制倒叙和还是正序
  let flag = true;
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
    if (flag && nxt.length) {
      ans.push(nxt.map((v) => v.val).reverse());
    } else if (nxt.length) {
      ans.push(nxt.map((v) => v.val));
    }
    flag = !flag;
    queue = nxt;
  }
  return ans;
};

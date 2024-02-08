/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-07 23:30:31                                                  *
 * @LastModifiedDate: 2024-02-07 23:42:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵二叉树的根 root ，请你将每个节点的值替换成该节点的所有 堂兄弟节点值的和 。

// 如果两个节点在树中有相同的深度且它们的父节点不同，那么它们互为 堂兄弟 。

// 请你返回修改值之后，树的根 root 。

// 注意，一个节点的深度指的是从树根节点到这个节点经过的边数。

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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  // bfs
  if (!root) return null;
  let queue = [root, null];
  while (queue.length) {
    const nxt = [];
    let sum = queue.reduce((pre, cur) => pre + (cur ? cur.val : 0), 0);
    const n = queue.length;
    for (let i = 0; i < n; i += 2) {
      const left = queue[i];
      const right = queue[i + 1];
      if (left && right) {
        let temp = left.val;
        left.val = sum - temp - right.val;
        right.val = sum - temp - right.val;
      } else if (left) {
        left.val = sum - left.val;
      } else if (right) {
        right.val = sum - right.val;
      }
      if (left && (left.left || left.right)) {
        nxt.push(left.left, left.right);
      }
      if (right && (right.left || right.right)) {
        nxt.push(right.left, right.right);
      }
    }
    queue = nxt;
  }
  return root;
};

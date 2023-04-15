/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-15 22:38:37                                                  *
 * @LastModifiedDate: 2023-04-15 22:50:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  let queue = [root];
  root.val = 0;
  while (queue.length) {
    const nxt = [];
    const binaryArr = [];
    let sum = 0; // 下一层的和值
    for (const q of queue) {
      binaryArr.push(q.left, q.right);
      if (q.left) {
        nxt.push(q.left);
        sum += q.left.val;
      }
      if (q.right) {
        nxt.push(q.right);
        sum += q.right.val;
      }
    }
    queue = nxt;
    if (nxt.length > 0) {
      const n = binaryArr.length;
      for (let i = 0; i < n; i += 2) {
        let first = binaryArr[i] ? binaryArr[i].val : 0;
        let second = binaryArr[i + 1] ? binaryArr[i + 1].val : 0;
        if (binaryArr[i]) binaryArr[i].val = sum - first - second;
        if (binaryArr[i + 1]) binaryArr[i + 1].val = sum - first - second;
      }
    }
  }
  return root;
};

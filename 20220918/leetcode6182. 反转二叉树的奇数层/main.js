/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-18 10:41:30                                                  *
 * @LastModifiedDate: 2022-09-18 10:50:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵 完美 二叉树的根节点 root ，请你反转这棵树中每个 奇数 层的节点值。

// 例如，假设第 3 层的节点值是 [2,1,3,4,7,11,29,18] ，
// 那么反转后它应该变成 [18,29,11,7,4,3,1,2] 。
// 反转后，返回树的根节点。

// 完美 二叉树需满足：二叉树的所有父节点都有两个子节点，
// 且所有叶子节点都在同一层。

// 节点的 层数 等于该节点到根节点之间的边数。

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
var reverseOddLevels = function (root) {
  let queue = [root];
  let level = 1;
  while (queue.length) {
    let nxt = [];
    let vals = [];
    for (const q of queue) {
      if (q.left) {
        nxt.push(q.left);
        vals.push(q.left.val);
        nxt.push(q.right);
        vals.push(q.right.val);
      }
    }
    if (level % 2 == 1) {
      vals.reverse();
      const n = vals.length;
      for (let i = 0; i < n; i++) {
        nxt[i].val = vals[i];
      }
    }
    level++;
    queue = nxt;
  }
  return root;
};

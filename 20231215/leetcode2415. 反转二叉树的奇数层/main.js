/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-15 09:19:03                                                  *
 * @LastModifiedDate: 2023-12-15 09:34:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一棵 完美 二叉树的根节点 root ，请你反转这棵树中每个 奇数 层的节点值。

// 例如，假设第 3 层的节点值是 [2,1,3,4,7,11,29,18] ，那么反转后它应该变成 [18,29,11,7,4,3,1,2] 。
// 反转后，返回树的根节点。

// 完美 二叉树需满足：二叉树的所有父节点都有两个子节点，且所有叶子节点都在同一层。

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
  if (!root) return root;
  let queue = [root];
  let level = 0;
  while (queue.length) {
    const nxt = [];
    for (const q of queue) {
      if (q.left) nxt.push(q.left);
      if (q.right) nxt.push(q.right);
    }
    level++;
    if (level % 2 === 1) {
      const m = nxt.length;
      for (let i = 0; i < m / 2; i++) {
        [nxt[i].val, nxt[m - i - 1].val] = [nxt[m - i - 1].val, nxt[i].val];
      }
    }
    queue = nxt;
  }
  return root;
};

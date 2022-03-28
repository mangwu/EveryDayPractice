/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-28 20:58:29                                                  *
 * @LastModifiedDate: 2022-03-28 21:10:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let ans = 1;
  if (root.left && root.right) {
    ans = 1 + Math.min(minDepth(root.left), minDepth(root.right));
    return ans;
  }
  if (root.left) {
    ans = 1 + minDepth(root.left);
    return ans;
  }
  if (root.right) {
    ans = 1 + minDepth(root.right);
    return ans;
  }
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let ans = 1;
  let queue = [root];
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      if (!q.left && !q.right) {
        return ans;
      }
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
    }
    queue = nxt;
    ans++;
  }
  return ans;
};

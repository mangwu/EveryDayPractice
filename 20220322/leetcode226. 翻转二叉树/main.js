/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-22 14:42:13                                                  *
 * @LastModifiedDate: 2022-03-22 15:09:19                                      *
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 就是将左右节点翻转
  if (!root) {
    return null;
  }
  let node = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(node);
  return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 迭代写法
  if (!root) {
    return null;
  }
  let queue = [root];
  while (queue.length > 0) {
    const nxt = [];
    for (const q of queue) {
      // 交换节点
      const left = q.left;
      const right = q.right;
      q.left = right;
      q.right = left;
      if (right) {
        nxt.push(right);
      }
      if (left) {
        nxt.push(left);
      }
    }
    queue = nxt;
  }
  return root;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 10:43:23                                                  *
 * @LastModifiedDate: 2022-03-24 15:02:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 遍历root的同时使用hash记录每个的值
  let queue = [root];
  const hash = new Set();
  while (queue.length > 0) {
    // 层序遍历
    let nxt = [];
    for (const q of queue) {
      const val = q.val;
      const sub = k - val;
      if (hash.has(sub)) {
        return true;
      }
      if (q.left) {
        nxt.push(q.left);
      }
      if (q.right) {
        nxt.push(q.right);
      }
      hash.add(val);
    }
    queue = nxt;
  }
  return false;
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 递归 仍然需要使用hash表
  const hash = new Set();
  const helper = (root, k) => {
    if (!root) {
      return false;
    }
    if (hash.has(k - root.val)) {
      return true;
    }
    hash.add(root.val);
    return helper(root.left, k) || helper(root.right, k);
  };
  return helper(root, k);
};

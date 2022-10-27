/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-27 09:00:43                                                  *
 * @LastModifiedDate: 2022-10-27 20:04:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，
// 请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 1) {
    return [new TreeNode(1)];
  }
  const preRes = generateTrees(n - 1);
  const ans = [];
  for (let item of preRes) {
    const copy = new TreeNode(n, copyTree(item));
    ans.push(copy);
    let pre = item;
    // item作为原始副本
    while (pre) {
      // 构造新树
      let res = new TreeNode(n);
      let right = pre.right;
      res.left = right;
      pre.right = res;
      const copy = copyTree(item);
      ans.push(copy);
      // 还原
      pre.right = res.left;
      res.left = null;
      // 继续
      pre = pre.right;
    }
  }
  return ans;
};

/**
 * @description 复制树
 * @param {TreeNode} root 根节点
 * @returns {TreeNode}
 */
var copyTree = function (root) {
  if (!root) {
    return null;
  }
  const ans = new TreeNode(root.val);
  ans.left = copyTree(root.left);
  ans.right = copyTree(root.right);
  return ans;
};

// 1 2 3
// 1 3 2
// 2 1 3
// 3 2 1
// 3 1 2

// 3   3 + 1

// []

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-05 11:00:01                                                  *
 * @LastModifiedDate: 2025-03-05 11:06:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：

// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。

// 叶节点 是指没有子节点的节点。

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
var sumNumbers = function (root) {
  let res = 0;
  const dfs = (node, pre) => {
    // 是否是叶子节点
    if (!node.left && !node.right) {
      res += pre * 10 + node.val;
      return;
    }
    if (node.left) dfs(node.left, pre * 10 + node.val);
    if (node.right) dfs(node.right, pre * 10 + node.val);
  };
  dfs(root, 0);
  return res;
};

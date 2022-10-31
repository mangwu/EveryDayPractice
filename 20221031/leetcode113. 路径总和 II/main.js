/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-31 10:44:12                                                  *
 * @LastModifiedDate: 2022-10-31 10:55:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，
// 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return [];
  }
  // dfs加回溯
  // 需要注意节点值可能为负数，所以不能提前回溯
  const path = [root.val];
  const ans = [];
  let sum = root.val;
  const dfs = (node) => {
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        ans.push(path.slice());
      }
    }
    if (node.left) {
      sum += node.left.val;
      path.push(node.left.val);
      dfs(node.left);
      sum -= node.left.val;
      path.pop();
    }
    if (node.right) {
      sum += node.right.val;
      path.push(node.right.val);
      dfs(node.right);
      sum -= node.right.val;
      path.pop();
    }
  };
  dfs(root);
  return ans;
};

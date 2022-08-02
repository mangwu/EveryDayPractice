/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-02 16:30:42                                                  *
 * @LastModifiedDate: 2022-08-02 17:20:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点
//  路径总和等于给定目标和的路径。

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const getSum = (node) => {
    if (!node) {
      return [];
    }
    if (!node.left && !node.right) {
      // 叶子节点
      return [[node.val]];
    }
    const left = getSum(node.left);
    const right = getSum(node.right);
    for (const item of left) {
      item.unshift(node.val);
    }
    for (const item of right) {
      item.unshift(node.val);
    }
    return left.concat(right);
  };
  const sums = getSum(root);
  let ans = [];
  for (const item of sums) {
    let sum = 0;
    for (const val of item) {
      sum += val;
    }
    if (sum == target) {
      ans.push(item);
    }
  }
  return ans;
};

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  let ans = [];
  // dfs+回溯
  const dfs = (node, sum, pre) => {
    if (!node) {
      return;
    }
    // 叶子节点
    if (!node.left && !node.right) {
      sum += node.val;
      if (sum == target) {
        pre.push(node.val);
        ans.push(pre.slice());
        pre.pop();
      }
      return;
    }
    pre.push(node.val);
    dfs(node.left, sum + node.val, pre);
    pre.pop(node.val);
    pre.push(node.val);
    dfs(node.right, sum + node.val, pre);
    pre.pop(node.val);
  };
  dfs(root, 0, []);
  return ans;
};

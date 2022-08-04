/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-04 09:24:46                                                  *
 * @LastModifiedDate: 2022-08-04 09:34:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let ans = 0;
  const dfs = (node, sums) => {
    if (!node) {
      return;
    }
    let newSums = [];
    for (const sum of sums) {
      let newSum = sum + node.val;
      if (newSum == targetSum) {
        ans++;
      }
      newSums.push(newSum);
    }
    if (node.val == targetSum) {
      ans++;
    }
    newSums.push(node.val);
    dfs(node.left, newSums);
    dfs(node.right, newSums);
  };
  return ans;
};

// [1, 4, 5, 9]
// 路径有10条
// 1 4 5 9
// 1-4 4-5 5-9
// 1-4-5 4-5-9
// 1-4-5-9

// 1  => 1
// 1 2  => 1-2 2
// 1 2 3 => 1-2-3 2-3 3

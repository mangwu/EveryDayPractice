/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-19 15:00:54                                                  *
 * @LastModifiedDate: 2022-06-19 16:24:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二叉树的根结点 root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同
// ，返回所有出现次数最多的子树元素和（不限顺序）。

// 一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

//

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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  if (!root) {
    return;
  }
  // 记录个数
  let max = 0;
  let sums = [];
  const hash = new Map();
  const dfs = (r) => {
    if (!r) {
      return 0;
    }
    let leftSum = dfs(r.left);
    let rightSum = dfs(r.right);
    let sum = leftSum + rightSum + r.val;
    if (hash.has(sum)) {
      hash.set(sum, hash.get(sum) + 1);
    } else {
      hash.set(sum, 1);
    }
    if (hash.get(sum) > max) {
      sums = [sum];
      max = hash.get(sum);
    } else if (hash.get(sum) == max) {
      sums.push(sum);
    }
    return sum;
  };
  dfs(root);
  return sums;
};

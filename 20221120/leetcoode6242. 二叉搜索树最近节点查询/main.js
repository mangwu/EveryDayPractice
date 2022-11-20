/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-20 10:34:11                                                  *
 * @LastModifiedDate: 2022-11-20 11:05:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 二叉搜索树 的根节点 root ，和一个由正整数组成、长度为 n 的数组 queries 。

// 请你找出一个长度为 n 的 二维 答案数组 answer ，其中 answer[i] = [mini, maxi] ：

// mini 是树中小于等于 queries[i] 的 最大值 。如果不存在这样的值，则使用 -1 代替。
// maxi 是树中大于等于 queries[i] 的 最小值 。如果不存在这样的值，则使用 -1 代替。
// 返回数组 answer 。

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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  // dfs
  const arr = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  const ans = [];
  for (const querie of queries) {
    ans.push([binarySearch(arr, querie, 1), binarySearch(arr, querie, 0)]);
  }
  return ans;
};

var binarySearch = (arr, target, type = 0) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (arr[mid] === target) {
      return target;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (type) {
    // 查找小于target的最大值
    if (arr[right] && arr[right] < target) {
      return arr[right];
    }
  } else {
    // 查找大于target的最大值
    if (arr[left] && arr[left] > target) {
      return arr[left];
    }
  }
  return -1;
};

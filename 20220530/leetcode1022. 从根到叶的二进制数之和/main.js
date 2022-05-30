/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-30 08:55:33                                                  *
 * @LastModifiedDate: 2022-05-30 10:12:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。

// 例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
// 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

// 返回这些数字之和。题目数据保证答案是一个 32 位 整数。

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
var sumRootToLeaf = function (root) {
  // 使用栈,迭代
  const stack = [];
  let ans = 0;
  while (root) {
    while (root && root.left) {
      stack.push(root);
      root = root.left;
    }
    if (!root.right) {
      ans += stackSum(stack) + root.val;
    }
    console.log(stack);
    if (root.right) {
      root = root.right;
      continue;
    }
    while (stack.length > 0) {
      root = stack.pop();
      if (root.right) {
        root = root.right;
        break;
      }
    }
    if (stack.length == 0) {
      break;
    }
  }
  return ans;
};

const stackSum = (s) => {
  const n = s.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += s[i].val * Math.pow(2, n - i);
  }
  return sum;
};
const valSum = (s) => {
  const n = s.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += s[i] * Math.pow(2, n - i - 1);
  }
  return sum;
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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let ans = 0;
  const dfs = (r, s) => {
    if (r && !r.left && !r.right) {
      s.push(r.val);
      ans += valSum(s);
      return;
    }
    s.push(r.val);
    if (r && r.left) {
      dfs(r.left, s.slice());
    }
    if (r && r.right) {
      dfs(r.right, s.slice());
    }
  };
  dfs(root, []);
  return ans;
};

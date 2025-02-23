/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-23 21:25:39                                                  *
 * @LastModifiedDate: 2025-02-23 21:55:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const path = [];
  const ans = [];
  const dfs = (i, left) => {
    // 剪枝，剩余可选数字没超过left
    if (n - i + 1 < left) return;
    if (i === n + 1) {
      if (left === 0) {
        ans.push(path.slice());
      }
      return;
    }
    // 选择当前数
    path.push(i);
    dfs(i + 1, left - 1);
    path.pop();
    // 不选
    dfs(i + 1, left);
  };
  dfs(1, k);
  return ans;
};

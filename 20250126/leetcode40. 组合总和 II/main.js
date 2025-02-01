/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-26 22:13:38                                                  *
 * @LastModifiedDate: 2025-01-26 22:43:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  while (candidates[candidates.length - 1] > target) candidates.pop();
  const n = candidates.length;
  const path = [];
  const res = [];
  const dfs = (idx, left) => {
    if (left < 0) return;
    if (left === 0) {
      res.push(path.slice());
      return;
    }
    if (idx === n) return;
    // 选择当前数字
    if (left >= candidates[idx]) {
      path.push(candidates[idx]);
      dfs(idx + 1, left - candidates[idx]);
      path.pop();
    }
    // 不选择当前数字
    while (++idx < n && candidates[idx] === candidates[idx - 1]) {}
    if (idx < n) dfs(idx, left);
  };
  dfs(0, target);
  return res;
};

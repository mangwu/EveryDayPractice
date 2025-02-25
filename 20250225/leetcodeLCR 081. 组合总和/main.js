/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 15:38:52                                                  *
 * @LastModifiedDate: 2025-02-25 15:47:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

// candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。

// 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const n = candidates.length;
  candidates.sort((a, b) => a - b); // 可以重复选择
  const path = [];
  const res = [];
  const dfs = (i, rest) => {
    if (i === n) {
      if (rest === 0) res.push(path.slice());
      return;
    }
    if (rest === 0) {
      res.push(path.slice());
      return;
    }
    if (rest < 0) return;
    // 选择当前元素
    path.push(candidates[i]);
    dfs(i, rest - candidates[i]);
    path.pop();
    // 不继续选择了
    dfs(i + 1, rest);
  };
  dfs(0, target);
  return res;
};

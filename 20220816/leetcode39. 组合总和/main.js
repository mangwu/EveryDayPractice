/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-16 10:54:41                                                  *
 * @LastModifiedDate: 2022-08-16 16:07:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
// 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。
// 你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b);
  while (candidates[candidates.length - 1] > target) {
    candidates.pop();
  }
  const set = new Set();
  const dfs = (rest, pre) => {
    if (rest == 0) {
      pre.sort((a, b) => a - b);
      let str = pre.join(",");
      if (set.has(str)) {
        return;
      } else {
        ans.push(pre);
        set.add(str);
      }
      return;
    }
    for (const candidate of candidates) {
      if (candidate <= rest) {
        const copy = pre.slice();
        copy.push(candidate);
        dfs(rest - candidate, copy);
      }
    }
  };
  dfs(target, []);
  return ans;
};
// 上述解答限制已经超时

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // dfs + 回溯 + 减枝 + 去重
  candidates.sort((a, b) => a - b);
  while (candidates[candidates.length - 1] > target) {
    candidates.pop();
  }
  const n = candidates.length;
  const ans = [];
  // 递归路径
  const path = [];
  // idx记录当前开始节点
  const dfs = (rest, idx) => {
    if (rest == 0) {
      // 复制满足条件的路径
      ans.push(path.slice());
      return;
    }
    for (let i = idx; i < n; i++) {
      if (rest >= candidates[i]) {
        path.push(candidates[i]);
        dfs(rest - candidates[i], i);
        // 回溯
        path.pop();
      } else {
        // 或许的都大于rest，不用遍历了
        break;
      }
    }
  };
  return ans;
};

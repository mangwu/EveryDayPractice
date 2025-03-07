/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-07 08:50:09                                                  *
 * @LastModifiedDate: 2025-03-07 10:36:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由正整数组成的数组 nums 和一个 正 整数 k 。

// 如果 nums 的子集中，任意两个整数的绝对差均不等于 k ，则认为该子数组是一个 美丽 子集。

// 返回数组 nums 中 非空 且 美丽 的子集数目。

// nums 的子集定义为：可以经由 nums 删除某些元素（也可能不删除）得到的一个数组。只有在删除元素时选择的索引不同的情况下，两个子集才会被视作是不同的子集。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  if (nums[n - 1] - nums[0] < k) return 2 ** n - 1;
  const hash = new Map();
  const dfs = (mask, i) => {
    if (i === n) return Number(mask > 0);
    if (hash.has(mask)) return hash.get(mask);
    // 不选择当前i
    let res = dfs(mask, i + 1);
    // 检查能否选择当前i
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (((mask >> j) & 1) === 1 && nums[i] - nums[j] === k) {
        flag = false;
        break;
      }
    }
    if (flag) res += dfs(mask | (1 << i), i + 1);
    hash.set(mask, res);
    return res;
  };
  return dfs(0, 0);
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  // 将nums中的元素分组，mod k相同的元素分在同一组，只有同一组的元素才可能包含不能同时选择的情况
  // 利用动态规划计算同一组元素的选法次数，结果为每一组的选法次数相乘
  const groups = new Map();
  for (const num of nums) {
    const modK = num % k;
    const cnts = groups.get(modK) || new Map();
    cnts.set(num, (cnts.get(num) || 0) + 1);
    groups.set(modK, cnts);
  }
  let ans = 1;
  for (const group of groups.values()) {
    // group是一组有相同modk的去重子序列
    const sortedKeys = [...group.keys()].sort((a, b) => a - b);
    const m = sortedKeys.length;
    const dp = new Array(m).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = 1; // 默认不选的情况
    dp[0][1] = (1 << group.get(sortedKeys[0])) - 1; // 通过出现次数计算选择该数时的选法次数
    for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
      if (sortedKeys[i] - sortedKeys[i - 1] === k) {
        // 上一个元素不能被选
        dp[i][1] = dp[i - 1][0] * ((1 << group.get(sortedKeys[i])) - 1);
      } else {
        dp[i][1] =
          (dp[i - 1][0] + dp[i - 1][1]) * ((1 << group.get(sortedKeys[i])) - 1);
      }
    }
    ans *= dp[m - 1][0] + dp[m - 1][1];
  }
  return ans - 1; // 减去啥都不选的空数组情况
};

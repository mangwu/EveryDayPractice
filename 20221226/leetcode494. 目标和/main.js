/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-26 15:36:03                                                  *
 * @LastModifiedDate: 2022-12-26 16:19:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 target 。

// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // ∑为nums元素之和，一部分为正p，一部分为负，和值为∑-p
  // 那么就是求 p - (∑-p) = t，即p = (t + ∑) / 2
  // 因此t+∑为奇数，那么就不存在p
  let limit = nums.reduce((pre, cur) => pre + cur) + target;
  if (limit % 2 == 1) return 0;
  limit /= 2; // p的值求和，选择x个数和为p的方案数

  // 0-1背包问题，写一个dfs记忆化搜索
  // 每个数可以取，也可以不取，假设当前选取第i个数，剩余的数为rest
  // 从最后一个数开始选取，使用数据记录重复结果
  const n = nums.length;
  const dp = new Array(n).fill(0).map((_v) => new Map());
  const dfs = (i, rest) => {
    if (i === -1) {
      return rest === 0 ? 1 : 0;
    }
    if (dp[i].has(rest)) {
      return dp[i].get(rest);
    }
    // 选择当前的，不选择当前的
    let ans = dfs(i - 1, rest) + dfs(i - 1, rest - nums[i]);
    dp[i].set(rest, ans);
    return ans;
  };
  return dfs(n - 1, limit);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // ∑为nums元素之和，一部分为正p，一部分为负，和值为∑-p
  // 那么就是求 p - (∑-p) = t，即p = (t + ∑) / 2
  // 因此t+∑为奇数，那么就不存在p
  let limit = nums.reduce((pre, cur) => pre + cur) + target;
  if (limit % 2 == 1 || limit < 0) return 0;
  limit /= 2; // p的值求和，选择x个数和为p的方案数

  // 0-1背包问题，可以使用递推的方式书写
  // f[i][j] 选前i个数，和为j的方案数
  // 选或不选
  // 选：f[i][j] = f[i-1][j-nums[i]];
  // 不选：f[i][j] = f[i-1][j];
  // 即 f[i][j] = f[i-1][j] + f[i-1][j-nums[i]];
  const n = nums.length;
  const f = new Array(n + 1).fill(0).map((_v) => new Array(limit + 1).fill(0));
  // 求f[n-1][limit]
  // 当j等于0时，一个都不选，和也就是0，也是一种方案
  for (let i = 0; i <= n; i++) {
    f[i][0] = 1;
  }
  // 递推
  for (let i = 1; i <= n; i++) {
    // 要合成j
    for (let j = nums[i - 1]; j <= limit; j++) {
      f[i][j] = f[i - 1][j] + f[i - 1][j - nums[i - 1]];
    }
  }
  return f[n][limit];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // ∑为nums元素之和，一部分为正p，一部分为负，和值为∑-p
  // 那么就是求 p - (∑-p) = t，即p = (t + ∑) / 2
  // 因此t+∑为奇数，那么就不存在p
  let limit = nums.reduce((pre, cur) => pre + cur) + target;
  if (limit % 2 == 1 || limit < 0) return 0;
  limit /= 2; // p的值求和，选择x个数和为p的方案数

  // 0-1背包问题，可以使用递推的方式书写
  // f[i][j] 选前i个数，和为j的方案数
  // 选或不选
  // 选：f[i][j] = f[i-1][j-nums[i]];
  // 不选：f[i][j] = f[i-1][j];
  // 即 f[i][j] = f[i-1][j] + f[i-1][j-nums[i]];
  const n = nums.length;
  const f = new Array(limit + 1).fill(0);
  // 求f[n-1][limit]
  // 当j等于0时，一个都不选，和也就是0，也是一种方案
  f[0] = 1;
  // 递推
  for (let i = 0; i < n; i++) {
    // 要合成j
    for (let left = limit; left >= nums[i]; left--) {
      f[left] += f[left - nums[i]];
    }
  }
  return f[limit];
};

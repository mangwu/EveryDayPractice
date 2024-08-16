/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-16 09:27:59                                                  *
 * @LastModifiedDate: 2024-08-16 17:34:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个数组 nums 和 andValues，长度分别为 n 和 m。

// 数组的 值 等于该数组的 最后一个 元素。

// 你需要将 nums 划分为 m 个 不相交的连续
// 子数组
// ，对于第 ith 个子数组 [li, ri]，子数组元素的按位 AND 运算结果等于 andValues[i]，换句话说，对所有的 1 <= i <= m，nums[li] & nums[li + 1] & ... & nums[ri] == andValues[i] ，其中 & 表示按位 AND 运算符。

// 返回将 nums 划分为 m 个子数组所能得到的可能的 最小 子数组 值 之和。如果无法完成这样的划分，则返回 -1 。

/**
 * @param {number[]} nums
 * @param {number[]} andValues
 * @return {number}
 */
var minimumValueSum = function (nums, andValues) {
  const n = nums.length;
  const m = andValues.length;
  const max = 2 ** 18 - 1;
  const dp = new Array(m * n).fill(0).map((v) => new Map());
  const dfs = (i, j, preAnd = max) => {
    const key = i * m + j;
    if (i === n && j === m) return 0; // 成功匹配
    if (i === n || j === m) return max;
    if (dp[key].has(preAnd)) return dp[key].get(preAnd);
    preAnd = preAnd & nums[i];
    if ((preAnd & andValues[j]) < andValues[j]) return max;
    let res = dfs(i + 1, j, preAnd);
    if (preAnd === andValues[j])
      res = Math.min(res, dfs(i + 1, j + 1, max) + nums[i]);
    dp[key].set(preAnd, res);
    return res;
  };
  const res = dfs(0, 0, max);
  return res < max ? res : -1;
};

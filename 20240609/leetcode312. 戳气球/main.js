/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-09 22:25:45                                                  *
 * @LastModifiedDate: 2024-06-09 22:58:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

// 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

// 求所能获得硬币的最大数量。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;
  const cache = new Array(n + 2).fill(-1).map((v) => new Array(n + 2).fill(-1));
  nums.push(1);
  nums.unshift(1);
  // 反过来想，变为添加气球的操作
  const dfs = (left, right) => {
    // (left, right)是闭区间，我们设置了初始的nums[0]和,nums[n + 1]为1
    if (left > right) return 0; // 无法添加
    if (cache[left][right] !== -1) return cache[left][right];
    let res = 0;
    for (let i = left + 1; i < right; i++) {
      // 添加到i中
      let curRes = nums[left] * nums[i] * nums[right];
      curRes += dfs(left, i) + dfs(i, right);
      res = Math.max(res, curRes);
    }
    cache[left][right] = res;
    return res;
  };
  return dfs(0, n + 1);
};

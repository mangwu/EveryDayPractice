/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-30 22:13:57                                                  *
 * @LastModifiedDate: 2024-06-30 22:35:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  if (target > sum || target < -sum) return 0;
  const cache = new Array(n).fill(-1).map((v) => new Map());
  const dfs = (i, preSum) => {
    if (i === n) {
      if (preSum === target) return 1;
      return 0;
    }
    if (cache[i].has(preSum)) return cache[i].get(preSum);
    let res = dfs(i + 1, preSum + nums[i]) + dfs(i + 1, preSum - nums[i]);
    cache[i].set(preSum, res);
    return res;
  };
  return dfs(0, 0);
};

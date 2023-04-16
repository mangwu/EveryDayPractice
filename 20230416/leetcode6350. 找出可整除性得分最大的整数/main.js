/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-16 10:34:20                                                  *
 * @LastModifiedDate: 2023-04-16 10:37:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的整数数组 nums 和 divisors 。

// divisors[i] 的 可整除性得分 等于满足 nums[j] 能被 divisors[i] 整除的下标 j 的数量。

// 返回 可整除性得分 最大的整数 divisors[i] 。如果有多个整数具有最大得分，则返回数值最小的一个。

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let ans = Infinity;
  let max = 0;
  for (const divisor of divisors) {
    let cur = 0;
    for (const num of nums) {
      if (num % divisor === 0) {
        cur++;
      }
    }
    if (cur > max) {
      ans = divisor;
      max = cur;
    } else if (cur === max) {
      ans = Math.min(ans, divisor);
    }
  }
  return ans;
};

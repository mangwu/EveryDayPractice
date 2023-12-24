/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-23 22:55:06                                                  *
 * @LastModifiedDate: 2023-12-23 23:02:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的 正 整数数组 nums 。

// 多边形 指的是一个至少有 3 条边的封闭二维图形。多边形的 最长边 一定 小于 所有其他边长度之和。

// 如果你有 k （k >= 3）个 正 数 a1，a2，a3, ...，ak 满足 a1 <= a2 <= a3 <= ... <= ak 且 a1 + a2 + a3 + ... + ak-1 > ak ，那么 一定 存在一个 k 条边的多边形，每条边的长度分别为 a1 ，a2 ，a3 ， ...，ak 。

// 一个多边形的 周长 指的是它所有边之和。

// 请你返回从 nums 中可以构造的 多边形 的 最大周长 。如果不能构造出任何多边形，请你返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let sum = nums[0] + nums[1];
  let ans = -1;
  for (let i = 2; i < n; i++) {
    if (nums[i] < sum) {
      ans = Math.max(ans, sum + nums[i]);
    }
    sum += nums[i];
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-09 11:29:10                                                  *
 * @LastModifiedDate: 2022-08-09 16:11:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），
// 并返回该子数组所对应的乘积。

// 测试用例的答案是一个 32-位 整数。

// 子数组 是数组的连续子序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length;
  // 从0开始分割
  const reses = [];
  let left = 0;
  let hasZeros = false;
  for (let i = 0; i <= n; i++) {
    if (nums[i] === 0 && i - left > 0) {
      reses.push(nums.slice(left, i));
      left = i + 1;
      hasZeros = true;
      continue;
    } else if (nums[i] == 0) {
      // 单独的数字
      left = i + 1;
      hasZeros = true;
    }
    if (i == n && i - left > 0) {
      reses.push(nums.slice(left, i));
    }
  }
  let ans = -Infinity;
  for (const res of reses) {
    let prod = res[0];
    let pre = res[0];
    for (let i = 1; i < res.length; i++) {
      prod *= res[i];
      pre = Math.max(pre * res[i], prod, res[i]);
    }
    ans = Math.max(ans, pre);
  }
  if (hasZeros) {
    ans = Math.max(ans, 0);
  }
  return ans;
};

// [2,-5,-2,-4,3]
// 2 -10 20 -40 -120
// 2 2 20 20 24

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length;
  // 从0开始分割
  const reses = [];
  let left = 0;
  let hasZeros = false;
  for (let i = 0; i <= n; i++) {
    if (nums[i] === 0 && i - left > 0) {
      reses.push(nums.slice(left, i));
      left = i + 1;
      hasZeros = true;
      continue;
    } else if (nums[i] == 0) {
      // 单独的数字
      left = i + 1;
      hasZeros = true;
    }
    if (i == n && i - left > 0) {
      reses.push(nums.slice(left, i));
    }
  }
  let ans = hasZeros ? 0 : -Infinity;
  // 滑动窗口
  for (const res of reses) {
    // 记录到第一个负数时的乘积
    const len = res.length;
    let prod = 1;
    let firstNegtive = 1;
    let negtiveNums = 0;
    let pre = -Infinity;
    for (let i = 0; i < len; i++) {
      if (firstNegtive > 0) {
        firstNegtive *= res[i];
      }
      if (res[i] < 0) {
        negtiveNums++;
      }
      prod *= res[i];
      if (negtiveNums % 2 == 0) {
        // 偶数个负数
        pre = prod;
      } else {
        // 奇数个负数
        if (i == 0) {
          pre = res[i];
        } else {
          pre = Math.max(pre, res[i], prod / firstNegtive, prod);
        }
      }
      ans = Math.max(ans, pre);
    }
  }
  return ans;
};

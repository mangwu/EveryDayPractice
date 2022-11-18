/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-18 09:25:22                                                  *
 * @LastModifiedDate: 2022-11-18 14:02:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个序列的 宽度 定义为该序列中最大元素和最小元素的差值。

// 给你一个整数数组 nums ，返回 nums 的所有非空 子序列 的 宽度之和 。由于答案可能非常大，请返回对 109 + 7 取余 后的结果。

// 子序列 定义为从一个数组里删除一些（或者不删除）元素，但不改变剩下元素的顺序得到的数组。例如，[3,6,2,7] 就是数组 [0,3,1,6,2,2,7] 的一个子序列。
const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
  nums.sort((a, b) => a - b);
  // 子问题，已知前i个元素构成的数组的子序列宽度之和，就前i+1个元素构成的数组的子序列宽度之和
  // 就是求前i+1个数组中包含第i+1个元素的子序列的宽度之和
  // 经过排序后，可以直到从第0到第i位，分别有i + 1, i , i - 1, i - 2,...., 1个子序列
  // 而它们的子序列宽度为nums[i+1] - nums[0]   nums[i+1] - nums[1] .... nums[i+1] - nums[i]
  // 所以增加的子序列宽度为(i+1)*(nums[i+1] - nums[0]) + (i)*(nums[i+1] - nums[1]) + ... + nums[i+1] - nums[i]
  // i*(i+1) * nums[i+1] - i * Sum(0,i) + nums[i+1] - (i - 1)*i/2 * nums[i+1]
  // -nums[0] + 0 + nums[2] + 2 * nums[3] + ... (i - 1) * nums[i]
  let pre = 0;
  let sum = nums[0];
  let sum2 = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    pre += i ** 2 * nums[i] - i * sum - (((i - 1) * i) / 2) * nums[i] + sum2;
    sum += nums[i];
    sum2 += i * nums[i];
    pre %= MOD;
  }
  return pre;
};

// 0 到 i - 1位
// i , i - 1, i - 2,...., 1个子序列(有误)
// (i)*(nums[i] - nums[0]) + (i-1)*(nums[i] - nums[1])... + nums[i] - nums[i-1]
// i ^ 2 * nums[i] - i * sum(0, i-1) + 0 - nums[i] - 2 * nums[i] - (i-1) * nums[i] + 0 + nums[1] + 2 * nums[2] + .. (i-1) * nums[i-1]
// i ^ 2 * nums[i] - i * sum(0, i - 1) - (i-1)i/2 * nums[i] + Sum((i-1)*num[i-1])

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
  nums.sort((a, b) => a - b);
  // 上述分析有错误，子序列个数呈现指数增长
  let preAdd = 0;
  let pre = 0;
  // 2nums[i+1] - nums[i] - nums[0];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    let curAdd =
      (Math.pow(2, i - 1) - 1) * (2 * nums[i] - nums[i - 1] - nums[0]) +
      nums[i] -
      nums[i - 1];
    // 本次增加
    let add = preAdd + curAdd;
    preAdd = add;
    pre += add;
  }
  return pre;
};

// 0 到 i - 1位
// 2^(i-1) , 2^(i-2),...., 2^0个子序列
// (2^(i-1))*(nums[i] - nums[0]) + (2^(i-2))*(nums[i] - nums[1])+ ... + nums[i] - nums[i-1]
// (2^i)*(nums[i+1] - nums[0]) + (2^(i-1))*(nums[i+1] - nums[1])+ ... + nums[i+1] - nums[i-1]
// (2^(i-1))(2nums[i+1] - 2nums[0] - nums[i] + nums[0]) + (2^(i-2))(2nums[i+1] - nums[i] -nums[0]) + ... (2nums[i+1] - nums[i] - nums[0]) + nums[i+1] - nums[i]
// (2^(i-1))(2nums[i+1] - nums[i] - nums[0]) + (2^(i-2))(2nums[i+1] - nums[i] - nums[0]) + ... (2nums[i+1] - nums[i] - nums[0]) + nums[i+1] - nums[i]
// (2^i - 1)(2nums[i+1] - nums[i] - nums[0]) + nums[i+1] - nums[i]
// 1 * (6 - 2 - 1) + 1 === 4
// 3 * (8 - 3 - 1) + 1 === 13
// 7 * (10 -4 - 1) + 1 === 36 (事实性错误)
// 答案 0 1 6 23 72 201
// 增加 0 1 5 18 50 129
// 增加 0 1 4 13 32 79  
// 0  1  

// 初始为0
// 


// 6 +

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-07 22:50:46                                                  *
 * @LastModifiedDate: 2023-01-07 23:19:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。

// 三个下标 i ，j 和 k 的 有效值 定义为 ((nums[i] | nums[j]) & nums[k]) 。

// 一个数组的 xor 美丽值 是数组中所有满足 0 <= i, j, k < n  的三元组 (i, j, k) 的 有效值 的异或结果。

// 请你返回 nums 的 xor 美丽值。

// 注意：

// val1 | val2 是 val1 和 val2 的按位或。
// val1 & val2 是 val1 和 val2 的按位与。

/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function (nums) {
  const res = new Array(30).fill(0);
  const n = nums.length;
  for (const num of nums) {
    let binary = num.toString(2);
    for (let i = binary.length - 1; i >= 0; i--) {
      // 记录1的个数
      if (binary[i] === "1") res[binary.length - i - 1]++;
    }
  }
  for (let i = 0; i < 30; i++) {
    // 计算结果 res[i]为第i位1的个数
    let ones = res[i] ** 3 + res[i] ** 2 * (n - res[i]) * 2;
    if (ones % 2 == 0) res[i] = 0; // 偶数
    else res[i] = 1;
  }
  return parseInt(res.reverse().join(""), 2);
};

// ((nums[i] | nums[j]) & nums[k])
// nums[i] & nums[k] | nums[j] & nums[k]

// 1 ^ 3
// 2 ^ 3
// 3 ^ 3
// n ^ 3

// i j k
// 0 0 0  0  x^3
// 1 0 0  0  y*x^2 * 3
// 0 1 0  0
// 1 1 0  0  y^2*x
// 0 0 1  0  -----------上面是结果为0的个数，下面是结果为1的个数
// 1 0 1  1  y^2*x * 2
// 0 1 1  1
// 1 1 1  1  y^3

// 0 1
// x y

//

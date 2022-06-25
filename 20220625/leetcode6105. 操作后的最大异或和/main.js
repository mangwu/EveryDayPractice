/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-25 23:09:23                                                  *
 * @LastModifiedDate: 2022-06-25 23:54:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。
// 一次操作中，选择 任意 非负整数 x 和一个下标 i ，更新 nums[i] 为 nums[i] AND (nums[i] XOR x) 。

// 注意，AND 是逐位与运算，XOR 是逐位异或运算。

// 请你执行 任意次 更新操作，并返回 nums 中所有元素 最大 逐位异或和。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  // 0 异或任何数都是任何数
  // 相同数异或肯定是0
  const arr = new Array(31).fill(0);
  for (let num of nums) {
    let idx = 0;
    while (num > 0) {
      if ((num & 1) == 1) {
        arr[idx] = 1;
      }
      num = num >> 1;
      idx++;
    }
  }
  let ans = 0;

  for (let i = 0; i < 31; i++) {
    if (arr[i]) {
      ans += Math.pow(2, i);
    }
  }
  return ans;
};

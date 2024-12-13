/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-13 10:17:59                                                  *
 * @LastModifiedDate: 2024-12-13 10:25:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，一个整数 k  和一个整数 multiplier 。

// 你需要对 nums 执行 k 次操作，每次操作中：

// 找到 nums 中的 最小 值 x ，如果存在多个最小值，选择最 前面 的一个。
// 将 x 替换为 x * multiplier 。
// 请你返回执行完 k 次乘运算之后，最终的 nums 数组。

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  while (k) {
    let idx = minIdx(nums);
    nums[idx] *= multiplier;
    k--;
  }
  return nums;
};

function minIdx(nums) {
  let idx = 0;
  const n = nums.length;
  let minNum = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] < minNum) {
      idx = i;
      minNum = nums[i];
    }
  }
  return idx;
}

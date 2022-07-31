/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-31 00:51:16                                                  *
 * @LastModifiedDate: 2022-07-31 00:56:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  // 原地修改
  const n = nums.length;
  let idx = n - 1;
  for (let i = 0; i < n && i < idx; i++) {
    while (i < idx && nums[i] % 2 == 0) {
      // 偶数放后面
      let temp = nums[i];
      nums[i] = nums[idx];
      nums[idx] = temp;
      idx--;
    }
  }
  return nums;
};

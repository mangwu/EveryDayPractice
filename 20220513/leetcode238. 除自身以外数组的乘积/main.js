/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-13 16:54:57                                                  *
 * @LastModifiedDate: 2022-05-13 17:12:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 如果有一个元素为0，那除法就会产生问题
  // 且如果有一个0，那么除了哪个0，其它都是0
  // 如果有超过两个以上的0，那么所有元素都是0
  let prod = 1;
  let cnt = 0;
  const n = nums.length;
  for (const num of nums) {
    if (num !== 0) {
      prod *= num;
    } else {
      cnt++;
    }
  }
  if (cnt >= 2) {
    for (let i = 0; i < n; i++) {
      nums[i] = 0;
    }
  } else if (cnt == 1) {
    for (let i = 0; i < n; i++) {
      if (nums[i] !== 0) {
        nums[i] = 0;
      } else {
        nums[i] = prod;
      }
    }
  } else {
    for (let i = 0; i < n; i++) {
      nums[i] = prod / nums[i];
    }
  }
  return nums;
};

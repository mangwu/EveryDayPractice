/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-04 22:59:27                                                  *
 * @LastModifiedDate: 2025-02-04 23:00:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。

// 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。

// 你可以返回 任何满足上述条件的数组作为答案 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const ans = [];
  let i = 0;
  let j = 1;
  for (const num of nums) {
    if (num % 2 === 0) {
      ans[i] = num;
      i += 2;
    } else {
      ans[j] = num;
      j += 2;
    }
  }
  return ans;
};

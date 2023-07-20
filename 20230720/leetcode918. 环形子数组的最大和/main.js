/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-20 13:42:59                                                  *
 * @LastModifiedDate: 2023-07-20 14:28:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。

// 环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。

// 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let resMin = Infinity;
  let res = -Infinity;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    resMin = Math.min(num, resMin);
    res = Math.max(num, res);
  }
  const n = nums.length;
  let cur = 0;
  for (let i = 0; i < n; i++) {
    cur += nums[i];
    if (cur < 0) {
      cur = 0;
    } else {
      res = Math.max(res, cur);
    }
  }
  cur = 0;
  let isSelectedAll = true;
  for (let i = 0; i < n; i++) {
    cur += nums[i];
    if (cur > 0) {
      isSelectedAll = false;
      cur = 0;
    } else {
      resMin = Math.min(resMin, cur);
    }
  }
  return isSelectedAll ? res : Math.max(res, sum - resMin);
};

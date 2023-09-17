/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-17 21:27:16                                                  *
 * @LastModifiedDate: 2023-09-17 21:46:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n <= 3) return Math.max.apply(null, nums);
  return Math.max(robRange(0, n - 1, nums), robRange(1, n, nums));
};

var robRange = function (start, end, nums) {
  let pre1 = nums[start];
  let pre2 = Math.max(nums[start], nums[start + 1]);
  let pre3 = Math.max(nums[start] + nums[start + 2], nums[start + 1]);
  let res = Math.max(pre1, pre2, pre3);
  for (let i = start + 3; i < end; i++) {
    const cur = Math.max(pre2, pre1) + nums[i];
    res = Math.max(res, cur);
    pre1 = pre2;
    pre2 = pre3;
    pre3 = cur;
  }
  return res;
};

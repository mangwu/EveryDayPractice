/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-05 23:37:41                                                  *
 * @LastModifiedDate: 2025-04-05 23:45:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const n = nums.length;
  // 2 ** 12 = 4096
  const max = 2 >> n;
  let res = 0;
  for (let mask = 1; mask < max; mask++) {
    let cur = 0;
    for (let i = 0; i < n; i++) {
      if (((mask >> i) & 1) === 1) {
        cur ^= nums[i];
      }
    }
    res += cur;
  }
  return res;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 17:18:01                                                  *
 * @LastModifiedDate: 2022-03-25 17:41:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  k--;
  let nums = new Array(n).fill(0).map((_v, i) => i + 1)
  // x开头的有n - 1个
  // 可以先计算出k应该选择的是那一个x开头的
  const getRest = (nums, n, k) => {
    if (k == 0) {
      return nums.join("");
    }
    if (n == 1) {
      return nums[0] + "";
    }
    const num = Math.floor(k / (n - 1)) + 1; // 第 num 开头的
    let ans = nums[num];
    const remainder = k % (n - 1); // 余数
    nums = nums.fliter((v) => v == ans);
    return ans + getRest(nums, nums.length, remainder);
  };
  return getRest(nums, n, k);
};

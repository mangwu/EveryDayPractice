/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-23 14:48:41                                                  *
 * @LastModifiedDate: 2022-10-23 14:56:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：

// nums[0] = 0
// nums[1] = 1
// 当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
// 当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
// 返回生成数组 nums 中的 最大 值。
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n < 2) {
    return n;
  }
  let ans = 1;
  let m = n / 2;
  const nums = [0, 1];
  for (let i = 1; i < m; i++) {
    nums[2 * i] = nums[i];
    nums[2 * i + 1] = nums[i] + nums[i + 1];
    ans = Math.max(ans, nums[2 * i], nums[2 * i + 1]);
  }
  return ans;
};

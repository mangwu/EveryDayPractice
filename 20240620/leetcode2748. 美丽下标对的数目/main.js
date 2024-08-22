/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-20 10:10:32                                                  *
 * @LastModifiedDate: 2024-06-20 10:35:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。如果下标对 i、j 满足 0 ≤ i < j < nums.length ，如果 nums[i] 的 第一个数字 和 nums[j] 的 最后一个数字 互质 ，则认为 nums[i] 和 nums[j] 是一组 美丽下标对 。

// 返回 nums 中 美丽下标对 的总数目。

// 对于两个整数 x 和 y ，如果不存在大于 1 的整数可以整除它们，则认为 x 和 y 互质 。换而言之，如果 gcd(x, y) == 1 ，则认为 x 和 y 互质，其中 gcd(x, y) 是 x 和 y 的 最大公因数 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const firstNum = parseInt(nums[i].toString()[0]);
    for (let j = i + 1; j < n; j++) {
      const lastNum = nums[j] % 10;
      if (gcd(firstNum, lastNum) === 1) {
        res++;
      }
    }
  }
  return res;
};

/**
 * @description
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function gcd(x, y) {
  if (x > y) return gcd(y, x);
  if (x === 0) return y;
  return gcd(y % x, x);
}
// 8 12
// 4 8
// 0 4

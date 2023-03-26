/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-26 10:38:05                                                  *
 * @LastModifiedDate: 2023-03-26 10:51:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，数组长度为 n 。

// 你可以执行无限次下述运算：

// 选择一个之前未选过的下标 i ，并选择一个 严格小于 nums[i] 的质数 p ，从 nums[i] 中减去 p 。
// 如果你能通过上述运算使得 nums 成为严格递增数组，则返回 true ；否则返回 false 。

// 严格递增数组 中的每个元素都严格大于其前面的元素。
const factors = [];
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  const n = nums.length;
  // 每次尽可能让质数够大
  for (let i = 0; i < n; i++) {
    let pre = i == 0 ? 0 : nums[i - 1];
    let cur = nums[i];
    if (cur <= pre) return false;
    const m = factors.length;
    for (let j = 0; j < m; j++) {
      // 选择一个尽可能大的质数让cur变小
      let factor = factors[j];
      if (cur - factor <= pre) {
        // 可以选择前一个了
        factor = j === 0 ? 0 : factors[j - 1];
        cur -= factor;
        break;
      } else if (j === m - 1) {
        // 最后一个也比pre大，直接选择最后一个
        cur -= factor;
      }
    }
    nums[i] = cur;
  }
  return true;
};

// 求出1000以内的质数
var isFactor = function (num) {
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
var getFactors = function (num) {
  for (let i = 2; i <= num; i++) {
    if (isFactor(i)) factors.push(i);
  }
};
getFactors(1000);

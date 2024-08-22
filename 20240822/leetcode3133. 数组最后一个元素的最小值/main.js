/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-22 09:32:11                                                  *
 * @LastModifiedDate: 2024-08-22 10:03:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 n 和 x 。你需要构造一个长度为 n 的 正整数 数组 nums ，对于所有 0 <= i < n - 1 ，满足 nums[i + 1] 大于 nums[i] ，并且数组 nums 中所有元素的按位 AND 运算结果为 x 。

// 返回 nums[n - 1] 可能的 最小 值。

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function (n, x) {
  const nBinary = (n - 1).toString(2).split("").reverse();
  const xBinary = x.toString(2).split("").reverse();
  // 在x的基础上增加nBinary
  let j = 0;
  for (let i = 0; i < nBinary.length; i++) {
    while (j < xBinary.length && xBinary[j] !== "0") {
      j++;
    }
    xBinary[j++] = nBinary[i];
  }
  return parseInt(xBinary.reverse().join(""), 2);
};

// 100101

// 100111
// 101101
// 110101
// 101111

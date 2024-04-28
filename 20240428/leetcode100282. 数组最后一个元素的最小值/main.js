/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-28 11:01:37                                                  *
 * @LastModifiedDate: 2024-04-28 11:28:18                                      *
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
  if (n === 1) return x;
  const binaryX = new Array(31).fill(0);
  for (let i = 0; i < 31; i++) {
    if (((x >> i) & 1) === 1) {
      binaryX[i] = 1;
    }
  }
  let cur = x;
  let left = 0;
  let cnt = 0;
  while (n) {
    while (binaryX[left]) {
      left++;
    }
  }
};

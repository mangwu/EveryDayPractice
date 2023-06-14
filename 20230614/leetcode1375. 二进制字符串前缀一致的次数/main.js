/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-14 08:39:25                                                  *
 * @LastModifiedDate: 2023-06-14 08:46:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 、下标从 1 开始的二进制字符串，所有位最开始都是 0 。我们会按步翻转该二进制字符串的所有位（即，将 0 变为 1）。

// 给你一个下标从 1 开始的整数数组 flips ，其中 flips[i] 表示对应下标 i 的位将会在第 i 步翻转。

// 二进制字符串 前缀一致 需满足：在第 i 步之后，在 闭 区间 [1, i] 内的所有位都是 1 ，而其他位都是 0 。

// 返回二进制字符串在翻转过程中 前缀一致 的次数。

/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
  let max = 0;
  let res = 0;
  const n = flips.length;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, flips[i]);
    if (max === i + 1) res++;
  }
  return res;
};

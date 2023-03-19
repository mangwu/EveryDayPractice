/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-19 10:31:01                                                  *
 * @LastModifiedDate: 2023-03-19 10:35:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 正 整数 n 。

// 用 even 表示在 n 的二进制形式（下标从 0 开始）中值为 1 的偶数下标的个数。

// 用 odd 表示在 n 的二进制形式（下标从 0 开始）中值为 1 的奇数下标的个数。

// 返回整数数组 answer ，其中 answer = [even, odd] 。

/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  const binarySearch = n.toString(2);
  let even = 0;
  let odd = 0;
  let len = binarySearch.length;
  for (i = 0; i < len; i++) {
    if (binarySearch[len - i - 1] === "1") {
      if (i % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }
  return [even, odd];
};

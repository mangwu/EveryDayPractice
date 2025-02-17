/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-17 09:06:10                                                  *
 * @LastModifiedDate: 2025-02-17 09:39:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。

// 请你找到并返回这个整数

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let num = arr[i];
    let j = i + 1;
    while (j < n && arr[j] === num) {
      j++;
    }
    if (j - i >= n / 4) {
      return num;
    }
    i = j - 1;
  }
  return -1;
};

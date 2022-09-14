/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-14 09:09:46                                                  *
 * @LastModifiedDate: 2022-09-14 09:15:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。

// 与 标准答案 误差在 10-5 的结果都被视为正确结果。
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  // arr.length 是 20 的 倍数
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let sum = 0;
  let k = n / 20;
  for (let i = k; i < n - k; i++) {
    sum += arr[i];
  }
  return sum / (n - 2 * k);
};

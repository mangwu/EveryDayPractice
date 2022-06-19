/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-19 10:44:50                                                  *
 * @LastModifiedDate: 2022-06-19 11:44:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 num 和 k ，考虑具有以下属性的正整数多重集：

// 每个整数个位数字都是 k 。
// 所有整数之和是 num 。
// 返回该多重集的最小大小，如果不存在这样的多重集，返回 -1 。

// 注意：

// 多重集与集合类似，但多重集可以包含多个同一整数，空多重集的和为 0 。
// 个位数字 是数字最右边的数位。

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function (num, k) {
  if (num == 0) {
    return 0;
  }
  if (k == 0) {
    if (num % 10 !== 0) {
      return -1;
    } else {
      return 1;
    }
  }
  let idx = 1;
  let prod = 1;
  while (prod <= num) {
    prod = idx * k;
    if (prod % 10 == num % 10 && prod <= num) {
      return idx;
    }
    idx++;
  }
  return -1;
};

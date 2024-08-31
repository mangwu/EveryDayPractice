/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-30 09:05:35                                                  *
 * @LastModifiedDate: 2024-08-30 09:49:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有一个数组 nums ，它只包含 正 整数，所有正整数的数位长度都 相同 。

// 两个整数的 数位不同 指的是两个整数 相同 位置上不同数字的数目。

// 请你返回 nums 中 所有 整数对里，数位不同之和。

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  const m = nums[0].toString().length;
  const hashs = new Array(m).fill(-1).map((v) => new Array(10).fill(0));
  for (const num of nums) {
    const numStr = num.toString();
    for (let i = 0; i < m; i++) {
      hashs[i][numStr[i]]++;
    }
  }
  let res = 0;
  for (const hash of hashs) {
    const sum = hash.reduce((a, b) => a + b);
    let curRes = 0;
    for (const num of hash) {
      // 有值才能与其它数位不同
      if (num) curRes += num * (sum - num);
    }
    res += curRes / 2;
  }
  return res;
};

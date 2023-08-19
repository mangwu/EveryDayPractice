/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-13 10:40:11                                                  *
 * @LastModifiedDate: 2023-08-13 10:56:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。请你从 nums 中找出和 最大 的一对数，且这两个数数位上最大的数字相等。

// 返回最大和，如果不存在满足题意的数字对，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const hash = new Map();
  for (const num of nums) {
    const cur = getMaxChNum(num);
    hash.has(cur) ? hash.get(cur).push(num) : hash.set(cur, [num]);
  }
  let res = -1;
  for (const [_key, value] of hash) {
    if (value.length >= 2) {
      value.sort((a, b) => b - a);
      res = Math.max(res, value[0] + value[1]);
    }
  }
  return res;
};

var getMaxChNum = function (num) {
  let res = 0;
  for (const ch of num.toString()) {
    res = Math.max(res, parseInt(ch));
  }
  return res;
};

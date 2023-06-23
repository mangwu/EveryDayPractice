/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-19 08:55:08                                                  *
 * @LastModifiedDate: 2023-06-19 09:53:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，请你找出并返回能被三整除的元素最大和。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  // nums和除3余1 => 减去除数为1的单个数，或除数都为2的两个数
  // nums和除3余2 => 减去除数为2的单个数，或除数都为1的两个数
  nums.sort((a, b) => a - b);
  const ones = [];
  const twos = [];
  let res = 0;
  for (const num of nums) {
    if (num % 3 === 2) {
      twos.push(num);
    } else if (num % 3 === 1) {
      ones.push(num);
    }
    res += num;
  }
  let curRes = res;
  if (res % 3 === 1) {
    if (ones.length) {
      curRes = res - ones[0];
      if (twos.length > 1) curRes = Math.max(curRes, res - twos[0] - twos[1]);
    } else if (twos.length > 1) {
      curRes = res - twos[0] - twos[1];
    }
  } else if (res % 3 === 2) {
    if (twos.length) {
      curRes = res - twos[0];
      if (ones.length > 1) curRes = Math.max(res - ones[0] - ones[1], curRes);
    } else if (ones.length > 1) {
      curRes = res - ones[0] - ones[1];
    }
  }
  return curRes;
};

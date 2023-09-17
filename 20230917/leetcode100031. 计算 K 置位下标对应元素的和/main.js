/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-17 10:39:31                                                  *
 * @LastModifiedDate: 2023-09-17 10:46:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

// 请你用整数形式返回 nums 中的特定元素之 和 ，这些特定元素满足：其对应下标的二进制表示中恰存在 k 个置位。

// 整数的二进制表示中的 1 就是这个整数的 置位 。

// 例如，21 的二进制表示为 10101 ，其中有 3 个置位。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let res = 0;
  nums.forEach((v, i) => {
    if (getOneNum(i) === k) {
      res += v;
    }
  });

  return res;
};

function getOneNum(num) {
  let res = 0;
  while (num) {
    if ((num & 1) === 1) {
      res++;
    }
    num = num >> 1;
  }
  return res;
}

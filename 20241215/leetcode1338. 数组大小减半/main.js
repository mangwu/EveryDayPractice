/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-15 20:24:15                                                  *
 * @LastModifiedDate: 2024-12-15 22:03:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 arr。你可以从中选出一个整数集合，并删除这些整数在数组中的每次出现。

// 返回 至少 能删除数组中的一半整数的整数集合的最小大小。

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const n = arr.length;
  const hash = new Map();
  for (const num of arr) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }
  const arr = [...hash].sort((a, b) => b[1] - a[1]);
  let res = 0;
  let nums = 0;
  for (const [key, num] of arr) {
    nums += num;
    res++;
    if (nums * 2 >= n) return res;
  }
  return res;
};

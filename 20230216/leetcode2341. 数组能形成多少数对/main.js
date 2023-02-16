/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-16 08:39:59                                                  *
 * @LastModifiedDate: 2023-02-16 08:44:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。在一步操作中，你可以执行以下步骤：

// 从 nums 选出 两个 相等的 整数
// 从 nums 中移除这两个整数，形成一个 数对
// 请你在 nums 上多次执行此操作直到无法继续执行。

// 返回一个下标从 0 开始、长度为 2 的整数数组 answer 作为答案，其中 answer[0] 是形成的数对数目，answer[1] 是对 nums 尽可能执行上述操作后剩下的整数数目。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const n = nums.length;
  const hash = new Map();
  for (const num of nums) {
    hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
  }
  let res = [0, 0];
  for (const [_key, value] of hash) {
    res[0] += Math.floor(value / 2);
  }
  res[1] = n - res[0] * 2;
  return res;
};

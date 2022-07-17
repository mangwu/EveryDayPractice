/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-17 10:30:47                                                  *
 * @LastModifiedDate: 2022-07-17 10:36:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  const hash = new Map();
  let n = nums.length;
  for (const num of nums) {
    if (hash.has(num)) {
      const k = hash.get(num);
      hash.set(num, k + 1);
    } else {
      hash.set(num, 1);
    }
  }
  let ans = 0;
  for (const [key, val] of hash) {
    if (val >= 2) {
      let k = Math.floor(val / 2);
      ans += k;
      n -= k * 2;
    }
  }
  return [ans, n];
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-19 10:45:51                                                  *
 * @LastModifiedDate: 2023-03-19 11:12:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由正整数组成的数组 nums 和一个 正 整数 k 。

// 如果 nums 的子集中，任意两个整数的绝对差均不等于 k ，则认为该子数组是一个 美丽 子集。

// 返回数组 nums 中 非空 且 美丽 的子集数目。

// nums 的子集定义为：可以经由 nums 删除某些元素（也可能不删除）得到的一个数组。只有在删除元素时选择的索引不同的情况下，两个子集才会被视作是不同的子集。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);
  const hash = new Map();
  const n = nums.length;
  const dfs = (cur, mask) => {
    if (cur === n) {
      hash.set(mask, mask ? 1 : 0);
      return hash.get(mask);
    }
    if (hash.has(mask)) return hash.get(mask);
    // 不选
    let res = dfs(cur + 1, mask);
    // 选择
    for (let i = 0; i < cur; i++) {
      if (((mask >> i) & 1) === 1) {
        if (nums[cur] - nums[i] === k) {
          return res;
        }
      }
    }
    return res + dfs(cur + 1, mask | (1 << cur));
  };
  return dfs(0, 0);
};

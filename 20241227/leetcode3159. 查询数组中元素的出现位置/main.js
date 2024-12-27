/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-27 15:18:08                                                  *
 * @LastModifiedDate: 2024-12-27 17:27:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，一个整数数组 queries 和一个整数 x 。

// 对于每个查询 queries[i] ，你需要找到 nums 中第 queries[i] 个 x 的位置，并返回它的下标。如果数组中 x 的出现次数少于 queries[i] ，该查询的答案为 -1 。

// 请你返回一个整数数组 answer ，包含所有查询的答案。

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  // 记录x的索引
  const arr = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === x) arr.push(i);
  }
  const ans = [];
  for (const query of queries) {
    if (query > arr.length) ans.push(-1);
    else ans.push(arr[query - 1]);
  }
  return ans;
};

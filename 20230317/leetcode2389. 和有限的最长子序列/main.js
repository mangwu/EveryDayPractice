/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-17 08:43:33                                                  *
 * @LastModifiedDate: 2023-03-17 09:10:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。

// 返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。

// 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const prefix = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    prefix.push(sum);
  }
  const ans = [];
  for (const querie of queries) {
    ans.push(bianrySearch(prefix, querie));
  }
  return ans;
};

var bianrySearch = (nums, target) => {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    // 找到第一个大于target的索引
    let mid = (left + right) >> 1;
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

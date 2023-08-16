/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-16 10:37:51                                                  *
 * @LastModifiedDate: 2023-08-16 10:41:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = new Map();
  for (const num of nums) {
    hash.set(num, (hash.get(num) | 0) + 1);
  }
  const arr = [...hash].sort((a, b) => b[1] - a[1]);
  return arr.filter((val, index) => index < k).map((v) => v[0]);
};

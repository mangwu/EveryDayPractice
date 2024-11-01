/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-31 09:16:08                                                  *
 * @LastModifiedDate: 2024-11-01 09:25:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你一个整数数组 nums 和一个二维数组 queries，其中 queries[i] = [posi, xi]。

// 对于每个查询 i，首先将 nums[posi] 设置为 xi，然后计算查询 i 的答案，该答案为 nums 中 不包含相邻元素 的 
// 子序列
//  的 最大 和。

// 返回所有查询的答案之和。

// 由于最终答案可能非常大，返回其对 109 + 7 取余 的结果。

// 子序列 是指从另一个数组中删除一些或不删除元素而不改变剩余元素顺序得到的数组。

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function(nums, queries) {
  const n = nums.length;
  
};
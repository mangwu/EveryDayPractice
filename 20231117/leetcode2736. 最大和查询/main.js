/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-11-17 08:57:33                                                  *
 * @LastModifiedDate: 2023-11-17 09:23:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你两个长度为 n 、下标从 0 开始的整数数组 nums1 和 nums2 ，另给你一个下标从 1 开始的二维数组 queries ，其中 queries[i] = [xi, yi] 。

// 对于第 i 个查询，在所有满足 nums1[j] >= xi 且 nums2[j] >= yi 的下标 j (0 <= j < n) 中，找出 nums1[j] + nums2[j] 的 最大值 ，如果不存在满足条件的 j 则返回 -1 。

// 返回数组 answer ，其中 answer[i] 是第 i 个查询的答案。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumSumQueries = function(nums1, nums2, queries) {
  // 选择的数字的必要条件之一：nums1[i] + nums2[i] 的和一定要大于 query[0] + query[1] 
  // 
};
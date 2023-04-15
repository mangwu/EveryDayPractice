/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-15 22:34:04                                                  *
 * @LastModifiedDate: 2023-04-15 22:37:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 定义一个数组 arr 的 转换数组 conver 为：

// conver[i] = arr[i] + max(arr[0..i])，其中 max(arr[0..i]) 是满足 0 <= j <= i 的所有 arr[j] 中的最大值。
// 定义一个数组 arr 的 分数 为 arr 转换数组中所有元素的和。

// 给你一个下标从 0 开始长度为 n 的整数数组 nums ，请你返回一个长度为 n 的数组 ans ，其中 ans[i]是前缀 nums[0..i] 的分数。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
  let max = 0;
  let sum = 0;
  const conver = [];
  const ans = [0];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    conver[i] = max + nums[i];
    ans[i] = sum + conver[i];
    sum += conver[i];
  }
  return ans;
};

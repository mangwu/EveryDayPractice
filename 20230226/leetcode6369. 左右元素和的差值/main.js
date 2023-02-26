/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-26 15:15:20                                                  *
 * @LastModifiedDate: 2023-02-26 15:19:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，请你找出一个下标从 0 开始的整数数组 answer ，其中：

// answer.length == nums.length
// answer[i] = |leftSum[i] - rightSum[i]|
// 其中：

// leftSum[i] 是数组 nums 中下标 i 左侧元素之和。如果不存在对应的元素，leftSum[i] = 0 。
// rightSum[i] 是数组 nums 中下标 i 右侧元素之和。如果不存在对应的元素，rightSum[i] = 0 。
// 返回数组 answer 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  // 先求和
  const sum = nums.reduce((pre, cur) => pre + cur);
  const ans = [];
  let curSum = 0;
  for (const num of nums) {
    ans.push(Math.abs(2 * curSum - sum + num));
    curSum += num;
  }
  return ans;
};

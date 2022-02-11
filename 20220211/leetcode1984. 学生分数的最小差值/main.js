/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-11 08:42:18                                                  *
 * @LastModifiedDate: 2022-02-11 09:06:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。另给你一个整数 k 。

// 从数组中选出任意 k 名学生的分数，使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化 。

// 返回可能的 最小差值 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  // 从n个分数中选择k个分数，则选法为Ckn项
  // 即 Akn / k! 

  // 排序后，选取k个元素 一定是连续的才能获得最小值
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let ans = Number.MAX_VALUE;
  for (let i = k - 1; i < len; i++) {
    ans = Math.min(ans, nums[i] - nums[i - k + 1]);
  }
  return ans;
};

minimumDifference([8, 5, 15, 12, 88, 45, 96, 78, 3, 45, 3, 18, 7], 4);

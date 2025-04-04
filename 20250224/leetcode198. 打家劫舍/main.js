/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-24 17:11:46                                                  *
 * @LastModifiedDate: 2025-02-24 17:15:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n <= 2) return Math.max.apply(null, nums);
  let pre1 = nums[0];
  let pre2 = nums[1];
  let pre3 = nums[0] + nums[2];
  for (let i = 3; i < n; i++) {
    const cur = Math.max(pre1, pre2) + nums[i];
    pre1 = pre2;
    pre2 = pre3;
    pre3 = cur;
  }
  return Math.max(pre3, pre2);
};

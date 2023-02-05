/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-05 10:52:52                                                  *
 * @LastModifiedDate: 2023-02-05 11:29:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 沿街有一排连续的房屋。每间房屋内都藏有一定的现金。现在有一位小偷计划从这些房屋中窃取现金。

// 由于相邻的房屋装有相互连通的防盗系统，所以小偷 不会窃取相邻的房屋 。

// 小偷的 窃取能力 定义为他在窃取过程中能从单间房屋中窃取的 最大金额 。

// 给你一个整数数组 nums 表示每间房屋存放的现金金额。形式上，从左起第 i 间房屋中放有 nums[i] 美元。

// 另给你一个整数数组 k ，表示窃贼将会窃取的 最少 房屋数。小偷总能窃取至少 k 间房屋。

// 返回小偷的 最小 窃取能力。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  // 在nums中选择k个元素，k个元素构成的最小窃取能力
  let left = Math.min.apply(null, nums);
  let right = Math.max.apply(null, nums);
  const n = nums.length;
  const check = (val) => {
    // 比val小就可以被选择
    let cur = 0;
    let pre = -2;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= val && i - 1 !== pre) {
        // 选择
        cur++;
        pre = i;
      }
    }
    return cur >= k;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      // mid合理，有更小的
      right = mid - 1;
    } else {
      // mid不合理，应该更大
      left = mid + 1;
    }
  }
  return left;
};

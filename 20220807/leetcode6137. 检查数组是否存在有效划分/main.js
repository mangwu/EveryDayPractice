/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-07 11:33:53                                                  *
 * @LastModifiedDate: 2022-08-07 11:59:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，你必须将数组划分为一个或多个 连续 子数组。

// 如果获得的这些子数组中每个都能满足下述条件 之一 ，则可以称其为数组的一种 有效 划分：

// 子数组 恰 由 2 个相等元素组成，例如，子数组 [2,2] 。
// 子数组 恰 由 3 个相等元素组成，例如，子数组 [4,4,4] 。
// 子数组 恰 由 3 个连续递增元素组成，并且相邻元素之间的差值为 1 。例如，子数组 [3,4,5] ，
// 但是子数组 [1,3,5] 不符合要求。
// 如果数组 至少 存在一种有效划分，返回 true ，否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
  // 获取连续递增元素
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    let start = i;
    while (nums[i + 1] == nums[i] + 1 && i < n) {
      i++;
    }
    let res = i - start + 1;
    if (res == 2) {
      return false;
    }
    if (res == 1) {
      continue;
    }
    if (res % 3 == 0) {
      // 将他都变为0
      const insert = new Array(res).fill(0);
      nums.splice.apply(nums, [start, res].concat(insert));
    } else if (res % 3 == 1) {
      // 丢弃一个首部或尾部
      let s = start;
      let e = i;
      let head = 1;
      let end = 1;
      while (s > 0 && nums[s] == nums[s - 1]) {
        head++;
      }
      while (e < n - 1 && nums[e] == nums[e + 1]) {
        end++;
      }
      if (end <= 2 && head <= 2) {
        return false;
      }
      if(head >= 3) {
        // 丢弃尾部
      }
    }
  }
};

// 1 2 3 4 5 6 7
Math.apply();

//   2 2 2 3 4 5 5 5

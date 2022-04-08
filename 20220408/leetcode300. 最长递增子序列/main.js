/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-08 08:52:27                                                  *
 * @LastModifiedDate: 2022-04-08 10:32:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 动态规划，找到前面比当前元素小的值，求得最大的子序列长度
  const len = nums.length;
  if (len == 1) {
    return 1;
  }
  let ans = 1;
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    let max = 1;
    while (j >= 0) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, 1 + dp[j]);
      }
      j--;
    }
    dp[i] = max;
    ans = Math.max(dp[i], ans);
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 动态规划加二分查找
  // 上述的动态规划中，在查找当前最大子序列时会重新遍历一遍前面的所有序列造成时间复杂度为O(n)
  // 但是动态规划中的dp不可能是有序的，所以无法使用二分查找，但是可以修改维护的状态，让它是一个单调的列表
  // 这个单调的列表tails表示：每个元素tails[k]的值代表长度为k+1的子序列的尾部元素的值
  // 顺序遍历nums，如果值比单调列表中的最后一个值（最大值）大，就可以push进单调列表
  // 否则可以二分查找单调列表，找出替换元素索引并替换
  const len = nums.length;
  if (len == 1) {
    return 1;
  }
  const tails = [nums[0]];
  let ans = 1;
  for (let i = 1; i < len; i++) {
    // 查看是否大于最大值
    if (nums[i] > tails[ans - 1]) {
      tails[ans++] = nums[i];
    } else {
      // 二分查找替换元素 [0, len)
      let left = 0;
      let right = ans;
      let mid;
      while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (tails[mid] < nums[i]) {
          // 在mid右边[mid+1, right)
          left = mid + 1;
        } else {
          // 在mid左边[left, mid);
          right = mid;
        }
      }
      tails[left] = nums[i];
    }
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-26 08:56:02                                                  *
 * @LastModifiedDate: 2022-10-26 16:54:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。
// 如果不存在这样的 子数组 ，返回 -1 。

// 子数组 是数组中 连续 的一部分。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // nums中有负数
  const min = Math.min.apply(null, nums);
  const max = Math.max.apply(null, nums);
  if (min >= k || max >= k) {
    return 1;
  }
  nums.forEach((v, i) => (nums[i] = v - min));
  k -= min;
  let left = 0;
  let right = 0;
  const n = nums.length;
  let sum = 0;
  let ans = Infinity;
  while (right < n) {
    while (sum < k) {
      sum += nums[right++];
    }
    while (sum >= k && left <= right) {
      ans = Math.min(right - left + 1, ans);
      sum -= nums[left++];
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // nums中有负数
  const min = Math.min.apply(null, nums);
  const max = Math.max.apply(null, nums);
  if (min >= k || max >= k) {
    return 1;
  }

  const n = nums.length;
  // 第一个元素是不包含当前元素的最短子数组长度
  // 第二个元素是包含当前元素的子数组长度
  // 第三个元素是包含当前元素的子数组和
  const dp = new Array(n + 1).fill(-1).map(() => [-1, -1, 0]);
  const prefix = new Array();
  let start = 0;
  // nums[i] < 0 则 dp[i] = -1;
  // nums[i] > 0 则 dp[i-1] = -1;
  for (let i = 1; i <= n; i++) {
    if (nums[i - 1] <= 0) {
      dp[i][0] = dp[i - 1][0];
      dp[i][1] = dp[i - 1][1];
      dp[i][2] = dp[i - 1][2] + nums[i - 1];
    } else {
      if (dp[i][0] == -1) {
      }
    }
  }
};

// [3,4,-2,-4,1,6]   7
// [7,8,2,0,5,10] 42

arr.filter((v) => v.includes(/[0-9]/));

st = new Set();
document
  .querySelectorAll("div.swiper-slide > div > div > div:nth-child(1)")
  .forEach((e) => {
    let n = e.textContent;
    if (!isNaN(n) && isFinite(n) && parseInt(n) < 36) st.add(parseInt(n));
  });
arr = Array.from(st).sort(function (a, b) {
  return a - b;
});

[...document.querySelectorAll("div.swiper-slide > div > div > div:nth-child(1)").values(),].map((e) => parseInt(e.textContent))
.filter((v, i, self) => !isNaN(v) && v >= 0 && v <= 35 && self.indexOf(v) === i)
.sort((a, b) => a - b);

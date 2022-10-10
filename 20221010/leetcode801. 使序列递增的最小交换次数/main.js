/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-10 08:51:56                                                  *
 * @LastModifiedDate: 2022-10-10 09:52:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们有两个长度相等且不为空的整型数组 nums1 和 nums2 。在一次操作中，我们可以交换 nums1[i] 和 nums2[i]的元素。

// 例如，如果 nums1 = [1,2,3,8] ， nums2 =[5,6,7,4] ，
// 你可以交换 i = 3 处的元素，得到 nums1 =[1,2,3,4] 和 nums2 =[5,6,7,8] 。
// 返回 使 nums1 和 nums2 严格递增 所需操作的最小次数 。

// 数组 arr 严格递增 且  arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1] 。

// 注意：

// 用例保证可以实现操作。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
  // 动态规划
  const n = nums1.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(Infinity));
  dp[0][0] = 0;
  dp[0][1] = 1;
  for (let i = 1; i < n; i++) {
    // 当前是否进行交换
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      // 不进行交换,设置dp[i][0]的值
      dp[i][0] = dp[i - 1][0];
      // 进行交换，设置dp[i][1]的值
      dp[i][1] = dp[i - 1][1] + 1;
    }
    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      // 不进行交换,设置dp[i][0]的值
      dp[i][0] = Math.min(dp[i][0], dp[i - 1][1]);
      // 进行交换，设置dp[i][1]的值
      dp[i][1] = Math.min(dp[i - 1][0] + 1, dp[i][1]);
    }
  }
  return Math.min(dp[n - 1][0], dp[n - 1][1]);
};

// 1 3 5 8 9 11 13
// 2 4 6 7 10 12 13

// 1 2 3 4 5 6 7 8 9
// 0 1 4 5 8 9 10 12 13

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
  // 动态规划
  const n = nums1.length;
  dp0 = 0;
  dp1 = 1;
  for (let i = 1; i < n; i++) {
    let cur0 = Infinity;
    let cur1 = Infinity;
    let pre0 = dp0;
    let pre1 = dp1;
    // 当前是否进行交换
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      // 不进行交换,设置dp[i][0]的值
      cur0 = pre0;
      // 进行交换，设置dp[i][1]的值
      cur1 = pre1 + 1;
      dp1 = pre1 + 1;
    }
    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      // 不进行交换,设置dp[i][0]的值
      dp0 = Math.min(cur0, pre1);
      // 进行交换，设置dp[i][1]的值
      dp1 = Math.min(pre0 + 1, cur1);
    }
  }
  return Math.min(dp0, dp1);
};

// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 动态规划，以nums[i]为底部的最长子序列长度
  const n = nums.length;
  const dp = new Array(n).fill(1);
  dp[0] = 1;
  let ans = 1;
  for (let j = 1; j < n; j++) {
    for (let i = j - 1; i >= 0; i--) {
      if (nums[j] > nums[i]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
    ans = Math.max(ans, dp[j]);
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 二分查找加动态规划
  const n = nums.length;
  const tails = [nums[0]];
  for (let i = 1; i < n; i++) {
    if (nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i]);
    } else {
      // 找到第一个小于nums[i]的数
      let left = 0;
      let right = tails.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      tails[right + 1] = nums[i];
    }
  }
  return tails.length;
};

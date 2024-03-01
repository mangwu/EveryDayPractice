// 给你一个下标从 0 开始的整数数组 nums ，你必须将数组划分为一个或多个 连续 子数组。

// 如果获得的这些子数组中每个都能满足下述条件 之一 ，则可以称其为数组的一种 有效 划分：

// 子数组 恰 由 2 个相等元素组成，例如，子数组 [2,2] 。
// 子数组 恰 由 3 个相等元素组成，例如，子数组 [4,4,4] 。
// 子数组 恰 由 3 个连续递增元素组成，并且相邻元素之间的差值为 1 。例如，子数组 [3,4,5] ，但是子数组 [1,3,5] 不符合要求。
// 如果数组 至少 存在一种有效划分，返回 true ，否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
  // 动态规划
  const n = nums.length;
  const dp = new Array(n).fill(false);
  if (nums[1] === nums[0]) dp[1] = true;
  if (n > 2) {
    if (nums[2] == nums[1] && dp[1]) dp[2] = true;
    if (nums[2] === nums[1] + 1 && nums[1] === nums[0] + 1) dp[2] = true;
  }
  for (let i = 3; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      if (dp[i - 2]) dp[i] = true;
      if (nums[i - 1] === nums[i - 2] && dp[i - 3]) dp[i] = true;
    } else if (
      nums[i] - 1 === nums[i - 1] &&
      nums[i - 1] - 1 === nums[i - 2] &&
      dp[i - 3]
    ) {
      dp[i] = true;
    }
  }
  return dp[n - 1];
};

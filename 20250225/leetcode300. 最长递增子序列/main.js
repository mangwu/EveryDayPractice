// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let res = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const tails = [nums[0]];
  let ans = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] > tails[ans - 1]) {
      tails[ans++] = nums[i];
    } else {
      let left = 0;
      let right = ans - 1;
      while (left <= right) {
        // 找到第一个比nums[i]小的数
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < nums[i]) {
          left = mid + 1;
        } else {
          // 在mid左边
          right = mid - 1;
        }
      }
      tails[left] = nums[i];
    }
  }
  return ans;
};


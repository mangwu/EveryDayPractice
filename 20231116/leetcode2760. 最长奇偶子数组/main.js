// 给你一个下标从 0 开始的整数数组 nums 和一个整数 threshold 。

// 请你从 nums 的子数组中找出以下标 l 开头、下标 r 结尾 (0 <= l <= r < nums.length) 且满足以下条件的 最长子数组 ：

// nums[l] % 2 == 0
// 对于范围 [l, r - 1] 内的所有下标 i ，nums[i] % 2 != nums[i + 1] % 2
// 对于范围 [l, r] 内的所有下标 i ，nums[i] <= threshold
// 以整数形式返回满足题目要求的最长子数组的长度。

// 注意：子数组 是数组中的一个连续非空元素序列。

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  // 从偶数开始，的偶奇最长序列，序列中每个值小于 Threshold
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= threshold && nums[i] % 2 === 0) {
      // 开始遍历
      let j = i + 1;
      while (j < n && nums[j] % 2 !== nums[j - 1] % 2 && nums[j] <= threshold) {
        // j 符合条件
        j++;
      }
      ans = Math.max(ans, j - i);
      i = j - 1;
    }
  }
  return ans;
};

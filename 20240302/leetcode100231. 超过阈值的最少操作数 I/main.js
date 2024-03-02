// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

// 一次操作中，你可以删除 nums 中的最小元素。

// 你需要使数组中的所有元素都大于或等于 k ，请你返回需要的 最少 操作次数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] >= k) return i;
  }
  return n;
};

// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // 记录上一个相同元素的索引
  const n = nums.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(nums[i]) && i - hash.get(nums[i]) <= k) return true;
    hash.set(nums[i], i);
  }
  return false;
};

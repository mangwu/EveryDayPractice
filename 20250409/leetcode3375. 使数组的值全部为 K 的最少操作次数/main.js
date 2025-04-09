// 给你一个整数数组 nums 和一个整数 k 。

// 如果一个数组中所有 严格大于 h 的整数值都 相等 ，那么我们称整数 h 是 合法的 。

// 比方说，如果 nums = [10, 8, 10, 8] ，那么 h = 9 是一个 合法 整数，因为所有满足 nums[i] > 9 的数都等于 10 ，但是 5 不是 合法 整数。

// 你可以对 nums 执行以下操作：

// 选择一个整数 h ，它对于 当前 nums 中的值是合法的。
// 对于每个下标 i ，如果它满足 nums[i] > h ，那么将 nums[i] 变为 h 。
// 你的目标是将 nums 中的所有元素都变为 k ，请你返回 最少 操作次数。如果无法将所有元素都变 k ，那么返回 -1 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const set = new Set();
  for (const num of nums) {
    if (num < k) return -1;
    if (num > k) set.add(num);
  }
  return set.size;
};

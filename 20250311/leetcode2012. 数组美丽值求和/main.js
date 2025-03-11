// 给你一个下标从 0 开始的整数数组 nums 。对于每个下标 i（1 <= i <= nums.length - 2），nums[i] 的 美丽值 等于：

// 2，对于所有 0 <= j < i 且 i < k <= nums.length - 1 ，满足 nums[j] < nums[i] < nums[k]
// 1，如果满足 nums[i - 1] < nums[i] < nums[i + 1] ，且不满足前面的条件
// 0，如果上述条件全部不满足
// 返回符合 1 <= i <= nums.length - 2 的所有 nums[i] 的 美丽值的总和 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function (nums) {
  const n = nums.length;
  let min = Infinity;
  const rightMins = [];
  for (let i = n - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    rightMins[i] = min;
  }
  let sum = 0;
  let max = nums[0];
  for (let i = 1; i < n - 1; i++) {
    if (nums[i] > max && rightMins[i + 1] > nums[i]) {
      sum += 2;
    } else if (nums[i] > nums[i - 1] && nums[i + 1] > nums[i]) {
      sum++;
    }
    max = Math.max(max, nums[i]);
  }
  return sum;
};

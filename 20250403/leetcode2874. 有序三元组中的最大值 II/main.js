// 给你一个下标从 0 开始的整数数组 nums 。

// 请你从所有满足 i < j < k 的下标三元组 (i, j, k) 中，找出并返回下标三元组的最大值。如果所有满足条件的三元组的值都是负数，则返回 0 。

// 下标三元组 (i, j, k) 的值等于 (nums[i] - nums[j]) * nums[k] 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  const rightMaxs = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    rightMaxs[i] = Math.max(rightMaxs[i + 1], nums[i]);
  }
  let leftMax = nums[0];
  let res = 0;
  for (let j = 1; j < n - 1; j++) {
    res = Math.max(res, (leftMax - nums[j]) * rightMaxs[j + 1]);
    leftMax = Math.max(leftMax, nums[j]);
  }
  return res;
};

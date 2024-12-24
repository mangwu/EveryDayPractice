// 给你一个整数数组 nums ，请你返回长度为 3 的
// 子数组
// ，满足第一个数和第三个数的和恰好为第二个数的一半。

// 子数组 指的是一个数组中连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let res = 0;
  const n = nums.length;
  for (let i = 1; i < n - 1; i++) {
    if (nums[i] === (nums[i - 1] + nums[i + 1]) * 2) res++;
  }
  return res;
};

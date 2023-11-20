// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = Math.max.apply(null, nums);
  let cur = 0;
  for (const num of nums) {
    cur += num;
    if (cur >= 0) {
      ans = Math.max(cur, ans);
    } else {
      cur = 0;
    }
  }
  return ans;
};

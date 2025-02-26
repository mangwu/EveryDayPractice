// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 示例 1：
// 输入：nums = [2,3,1,1,4]
// 输出：true
// 示例 2：
// 输入：nums = [3,2,1,0,4]
// 输出：false

/**
 * @description
 * @param {number[]} nums
 */
function solution(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(false);
  // dp[i] true
  dp[0] = true;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] + j >= i) {
        dp[i] = dp[i] || dp[j];
      }
    }
  }
  return dp[n - 1];
}
console.log(solution([3, 2, 1, 0, 4]));
console.log(solution([2, 3, 1, 1, 4]));

/**
 * @description
 * @param {number[]} nums
 */
function canJump(nums) {
  const n = nums.length;
  let max = nums[0];
  for (let i = 1; i < n; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
    } else return false;
  }
  return true;
}

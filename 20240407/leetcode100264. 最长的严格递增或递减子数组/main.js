// 给你一个整数数组 nums 。

// 返回数组 nums 中 严格递增 或 严格递减 的最长非空子数组的长度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  return Math.max(
    getLongestSubarrayLength(nums),
    getLongestSubarrayLength(nums, "dec")
  );
};

function getLongestSubarrayLength(nums, type = "increase") {
  let ans = 1;
  const n = nums.length;
  const compare =
    type === "increase"
      ? (a, b) => nums[a] > nums[b]
      : (a, b) => nums[a] < nums[b];
  for (let i = 0; i < n; i++) {
    let cur = 1;
    while (i + 1 < n && compare(i + 1, i)) {
      i++;
      cur++;
    }
    ans = Math.max(ans, cur);
  }
  return ans;
}

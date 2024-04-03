// 给定一个整数数组 A，坡是元组 (i, j)，其中  i < j 且 A[i] <= A[j]。这样的坡的宽度为 j - i。

// 找出 A 中的坡的最大宽度，如果不存在，返回 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] <= nums[j]) {
        ans = Math.max(ans, j - i);
      }
    }
  }
  return ans;
};
// 暴力解法

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const n = nums.length;
  let ans = 0;
  // 排序
  const sorted = new Array(n)
    .fill(0)
    .map((_v, i) => i)
    .sort((a, b) => (nums[a] !== nums[b] ? nums[a] - nums[b] : a - b));
  let minIdx = sorted[0];
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, sorted[i] - minIdx);
    minIdx = Math.min(minIdx, sorted[i]);
  }
  return ans;
};

// 132

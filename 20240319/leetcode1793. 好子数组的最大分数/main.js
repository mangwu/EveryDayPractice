// 给你一个整数数组 nums （下标从 0 开始）和一个整数 k 。

// 一个子数组 (i, j) 的 分数 定义为 min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1) 。一个 好 子数组的两个端点下标需要满足 i <= k <= j 。

// 请你返回 好 子数组的最大可能 分数 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  let ans = nums[k];
  const n = nums.length;
  let minValue = new Array(n).fill(ans);
  for (let i = k - 1; i >= 0; i--) {
    minValue[i] = Math.min(minValue[i + 1], nums[i]);
  }
  for (let i = k + 1; i < n; i++) {
    minValue[i] = Math.min(minValue[i - 1], nums[i]);
  }
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (minValue[left] < minValue[right]) {
      ans = Math.max(minValue[left] * (right - left + 1), ans);
      left++;
    } else if (minValue[right] < minValue[left]) {
      ans = Math.max(minValue[right] * (right - left + 1), ans);
      right--;
    } else {
      // 相等
      ans = Math.max(minValue[right] * (right - left + 1), ans);
      left++;
      right--;
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  let ans = nums[k];
  const n = nums.length;
  let left = k - 1;
  let right = k + 1;
  for (let i = nums[k]; ; ) {
    while (left >= 0 && nums[left] >= i) {
      left--;
    }
    while (right < n && nums[right] >= i) {
      right++;
    }
    ans = Math.max(ans, (right - left - 1) * i);
    if (left === -1 && right === n) break;
    i = Math.max(left >= 0 ? nums[left] : -1, right < n ? nums[right] : -1);
  }
  return ans;
};

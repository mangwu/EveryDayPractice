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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const n = nums.length;
  let ans = 0;
  // 排序
  const candidates = []; // 单调队列，nums[i]递增，但是i递减
  // 在候选数组进行二分查找，能够找到结果的j不用入队，
  // 因为以j当结果的前置索引一定能在当前候选数组中找到索引值差更大的结果
  candidates.push(n - 1);
  for (let i = n - 2; i >= 0; i--) {
    let left = 0;
    let right = candidates.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[candidates[mid]] >= nums[i]) {
        // 找到一个符合条件的
        right = mid;
      } else {
        // 不符合条件需要右移
        left = mid + 1;
      }
    }
    if (left < candidates.length) {
      // 找到了
      ans = Math.max(ans, candidates[left] - i);
    } else {
      // 没找到，说明这个值比后面的都大，可以入单调队列
      candidates.push(i);
    }
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-28 15:26:43                                                  *
 * @LastModifiedDate: 2024-02-28 17:47:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。

// 求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。

// 说明: 请尽可能地优化你算法的时间和空间复杂度。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const numSeries1 = generateMaxNumSeries(nums1);
  const numSeries2 = generateMaxNumSeries(nums2);
  let ans = [];
  for (let i = 1; i < k; i++) {
    // nums1中选择i个，nums2中选择k - i 个
    if (i > n1 || k - i > n2) continue;
    // 从nums1中选择i个
    const series1 = numSeries1
      .slice(0, i)
      .sort((a, b) => a - b)
      .map((v) => nums1[v]);
    // 从nums2中选k - i个
    const series2 = numSeries2
      .slice(0, k - i)
      .sort((a, b) => a - b)
      .map((v) => nums2[v]);
    // 将二则结合到一起的最大排列
    console.log(series1, series2);
    const curRes = maxSeriesCombine(series1, series2);
    ans = compareMaxSeries(ans, curRes);
  }
  return ans;
};
/**
 * @description 两个数组保持相对位置结合在一起的最大序列
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function maxSeriesCombine(nums1, nums2) {
  // 这里未考虑相等的情况
  const curRes = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i === nums1.length) {
      for (; j < nums2.length; j++) curRes.push(nums2[j]);
      break;
    }
    if (j === nums2.length) {
      for (; i < nums1.length; i++) curRes.push(nums1[i]);
      break;
    }
    if (nums1[i] > nums2[j]) curRes.push(nums1[i++]);
    else curRes.push(nums2[j++]);
  }
  return curRes;
}
/**
 * @description 一个数组在保持相对位置时，选择i个的最大序列的选择顺序
 * @param {number[]} nums
 * @returns {number[]}
 */
function generateMaxNumSeries(nums) {
  const n = nums.length;
  const idx = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => (nums[b] === nums[a] ? a - b : nums[b] - nums[a]));
  let select = [idx[0]];
  let visited = [];
  visited[0] = true;
  let left = 1;
  let right = 0;
  while (left < n) {
    const target = select[select.length - 1];
    // 找到下一个最大的值，且在target后
    while (right < n) {
      if (!visited[right] && idx[right] > target) {
        // 找到一个
        visited[right] = true;
        select.push(idx[right++]);
        break;
      }
      right++;
    }
    // 已经不存在下一个在target后的最大值，就舍弃当前target，重新开始选择
    if (right === n) {
      right = left + 1;
      visited[left] = true;
      select.push(idx[left++]);
    }
    while (visited[left]) left++;
  }
  return select;
}
/**
 * @description 比较两个数组序列的大小，返回大的那一个
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function compareMaxSeries(nums1, nums2) {
  if (!nums1.length) return nums2;
  if (!nums2.length) return nums1;
  const n = nums1.length;
  for (let i = 0; i < n; i++) {
    if (nums1[i] > nums2[i]) return nums1;
    if (nums1[i] < nums2[i]) return nums2;
  }
  return nums1;
}
maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5);
// [3, 4, 6, 5, 9]
// 1 => 9
// 2 => 6 9
// 3 => 6 5 9
// 4 => 4 6 5 9
// 5 => 3 4 6 5 9
// [9, 1, 2, 5, 8, 3]
// 1 => 9
// 2 => 9 8
// 3 => 9 8 3
// 4 => 9 5 8 3
// 5 => 9 2 5 8 3
// 6 => 9 1 2 5 8 3

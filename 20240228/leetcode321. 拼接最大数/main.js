/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-28 15:26:43                                                  *
 * @LastModifiedDate: 2024-02-29 15:53:24                                      *
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
    const curRes = maxSeriesCombine(series1, series2);
    ans = compareMaxSeries(ans, curRes);
  }
  console.log(ans);
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
  const n1 = nums1.length;
  const n2 = nums2.length;
  let i = 0;
  let j = 0;
  while (i < n1 || j < n2) {
    if (i === n1) {
      for (; j < n2; j++) curRes.push(nums2[j]);
      break;
    }
    if (j === n2) {
      for (; i < n1; i++) curRes.push(nums1[i]);
      break;
    }
    if (nums1[i] > nums2[j]) curRes.push(nums1[i++]);
    else if (nums1[i] < nums2[j]) curRes.push(nums2[j++]);
    else {
      // 二者相等的情况
      let copyi = i;
      let copyj = j;
      while (copyi < n1 && copyj < n2 && nums1[copyi] === nums2[copyj]) {
        copyi++;
        copyj++;
      }
      let flag = true;
      if (copyi < n1 && copyj < n2) {
        if (nums1[copyi] < nums2[copyj]) flag = false;
      } else if (copyi === n1) flag = false;
      if (flag) {
        curRes.push(nums1[i++]);
      } else curRes.push(nums2[j++]);
    }
  }
  return curRes;
}
// maxSeriesCombine([2, 1, 0, 2], [1, 0, 2, 0]);

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
  let left = 0;
  let right = 1;
  let stack = [idx[0]];
  let target = stack[stack.length - 1];
  while (left < n) {
    // 找到下一个最大的值，且在target后
    while (right < n) {
      if (!visited[right] && idx[right] > target) {
        visited[right] = true;
        stack.push(idx[right]);
        select.push(idx[right]);
        target = idx[right];
        right = left;
      }
      right++;
    }
    while (visited[left]) left++;
    if (right === n) {
      // 已经不存在下一个在target后的最大值，就舍弃当前target，重新开始选择
      right = left;
      stack.pop();
      if (stack.length) {
        target = stack[stack.length - 1];
      } else {
        target = idx[left];
        stack.push(idx[left]);
        select.push(idx[left++]);
      }
    }
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
const random = require("../../publicFunc/random/random");
maxNumber(random.randomArr(100, 0, 10), random.randomArr(100, 0, 10), 150);
// [6, 7, 8, 5, 4, 1, 2, 6, 9, 0, 5, 5, 8, 4, 1, 3, 7, 5, 8])
// 1 => 9
// 2 => 9 8
// 3 => 9 8 8
// 4 => 9 8 7 8
// 5 => 9 8 7 5 8
// 6 => 9 8 4 7 5 8
// 7 => 9 8 4 3 7 5 8
// 8 => 9 8 4 1 3 7 5 8
// 9 => 9 5 8 4 1 3 7 5 8
// 10=> 9 5 5 8 4 1 3 7 5 8
// 11=> 9 0 5 5 8 4 1 3 7 5 8
// 12=> 8 9 0 5 5 8 4 1 3 7 5 8
// 13=> 8 6 9 0 5 5 8 4 1 3 7 5 8

// [2,1,0,2]
// [1,0,2,0]

// 2 1 1 0 2 0 2 0

// 1 0 2 0
// 1 0 2

// 1 1 0 2 0 2

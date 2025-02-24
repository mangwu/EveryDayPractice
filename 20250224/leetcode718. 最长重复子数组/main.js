// 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let res = 0;
  const hash = new Map();
  for (let i = 0; i < m; i++) {
    const arr = hash.get(nums1[i]) || [];
    arr.push(i);
    hash.set(nums1[i], arr);
  }
  for (let i = 0; i < n; i++) {
    const arr = hash.get(nums2[i]) || [];
    for (const idx of arr) {
      let i1 = idx + 1;
      let i2 = i + 1;
      while (i1 < m && i2 < n && nums1[i1] === nums2[i2]) {
        i1++;
        i2++;
      }
      res = Math.max(res, i1 - idx);
    }
  }
  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  // 动态规划
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // dp[i][j] 表示以nums1[i]和nums2[j]开头的最长公共子前缀的长度
  // 如果nums1[i] === nums2[j]，则dp[i][j] = dp[i+1][j+1] + 1
  let res = 0;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0;
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  // 动态规划
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // dp[i][j] 表示以nums1[i]和nums2[j]开头的最长公共子前缀的长度
  // 如果nums1[i] === nums2[j]，则dp[i][j] = dp[i+1][j+1] + 1
  let res = 0;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0;
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  // 滑动窗口，固定一个数组，移动另一个数组，计算最长连续重合元素个数
  const m = nums1.length;
  const n = nums2.length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    res = Math.max(res, maxLength(nums1, nums2, i));
  }
  for (let i = 0; i < n; i++) {
    res = Math.max(res, maxLength(nums2, nums1, i));
  }
  return res;
};

function maxLength(nums1, nums2, offset) {
  const m = nums1.length;
  const n = nums2.length;
  let res = 0;
  let i = offset;
  let j = 0;
  while (i < m && j < n) {
    let curLen = 0;
    while (i < m && j < n && nums1[i] === nums2[j]) {
      curLen++;
      i++;
      j++;
    }
    res = Math.max(res, curLen);
    i++;
    j++;
  }
  return res;
}

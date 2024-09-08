// 给你一个整数数组 nums 和一个 非负 整数 k 。如果一个整数序列 seq 满足在范围下标范围 [0, seq.length - 2] 中存在 不超过 k 个下标 i 满足 seq[i] != seq[i + 1] ，那么我们称这个整数序列为 好 序列。

// 请你返回 nums 中 好
// 子序列
//  的最长长度

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  const n = nums.length;
  if (k >= n - 1) return n;
  const dp = new Array(n).fill(0).map((v) => new Array(k + 1).fill(0));
  // dp[i][j] 以nums[i]结尾，有j个下标满足条件的情况下，好子序列的最长长度
  let res = 1;
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
    for (let j = 0; j <= k; j++) {
      if (j > i) break; // 不存在的情况
      for (let preI = i - 1; preI >= 0; preI--) {
        if (j > 0 && dp[preI][j - 1] !== 0 && nums[i] !== nums[preI]) {
          dp[i][j] = Math.max(dp[i][j], dp[preI][j - 1] + 1);
        } else if (dp[preI][j] !== 0 && nums[i] === nums[preI]) {
          dp[i][j] = Math.max(dp[i][j], dp[preI][j] + 1);
        }
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res;
};

const random = require("../../publicFunc/random/random.js");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  const hash = new Map();
  const dp = new Array(k + 1).fill(0);
  for (const num of nums) {
    if (!hash.has(num)) {
      hash.set(num, new Array(k + 1).fill(0));
    }
    const curDp = hash.get(num);
    // nums[x] !== nums[k]的情况
    for (let i = 0; i <= k; i++) {
      curDp[i]++;
      if (i > 0) {
        curDp[i] = Math.max(curDp[i], dp[i - 1] + 1);
      }
    }
    // nums[x] === nums[k]的情况
    for (let i = 0; i <= k; i++) {
      dp[i] = Math.max(dp[i], curDp[i]);
    }
  }
  return dp[k];
};

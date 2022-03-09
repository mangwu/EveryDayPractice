/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-09 08:53:56                                                  *
 * @LastModifiedDate: 2022-03-09 09:33:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个数组 nums，我们可以将它按一个非负整数 k 进行轮调，这样可以使数组变为 [nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]] 的形式。此后，任何值小于或等于其索引的项都可以记作一分。

// 例如，数组为 nums = [2,4,1,3,0]，我们按 k = 2 进行轮调后，它将变成 [1,3,0,2,4]。这将记为 3 分，因为 1 > 0 [不计分]、3 > 1 [不计分]、0 <= 2 [计 1 分]、2 <= 3 [计 1 分]，4 <= 4 [计 1 分]。
// 在所有可能的轮调中，返回我们所能得到的最高分数对应的轮调下标 k 。如果有多个答案，返回满足条件的最小的下标 k 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function (nums) {
  // 暴力解法，O(n^2)
  const len = nums.length;
  let max = -1;
  let minK = 0;
  for (let i = len - 1; i >= 0; i--) {
    // 本轮轮调的分数
    let score = 0;
    // 轮调i
    for (let j = 0; j < len; j++) {
      const idx = (len - i + j) % len;
      if (nums[j] <= idx) {
        score++;
      }
    }
    if (score >= max) {
      max = score;
      minK = i;
    }
  }
  return minK;
};

// 当数组长度过长时，暴力解法不生效

/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function (nums) {
  // 差分数组
  const n = nums.length;
  const diffs = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const low = (i + 1) % n;
    const high = (i - nums[i] + n + 1) % n;
    diffs[low]++;
    diffs[high]--;
    if (low >= high) {
      diffs[0]++;
    }
  }
  let bestIndex = 0;
  let maxScore = 0;
  let score = 0;
  for (let i = 0; i < n; i++) {
    score += diffs[i];
    if (score > maxScore) {
      bestIndex = i;
      maxScore = score;
    }
  }
  return bestIndex;
};

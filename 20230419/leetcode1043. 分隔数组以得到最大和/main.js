/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-19 08:37:01                                                  *
 * @LastModifiedDate: 2023-04-19 08:54:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 arr，请你将该数组分隔为长度 最多 为 k 的一些（连续）子数组。分隔完成后，每个子数组的中的所有值都会变为该子数组中的最大值。

// 返回将数组分隔变换后能够得到的元素最大和。本题所用到的测试用例会确保答案是一个 32 位整数。

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  const dp = new Array(n).fill(0);
  dp[0] = arr[0];
  for (let i = 1; i < n; i++) {
    let cur = arr[i];
    // 0 1 2 3 4 5 6
    // 4
    for (let j = i - 1; j >= Math.max(0, i - k + 1); j--) {
      cur = Math.max(cur, arr[j]);
      let first = j - 1 >= 0 ? dp[j - 1] : 0;
      dp[i] = Math.max(dp[i], first + cur * (i - j + 1));
    }
  }
  return dp[n - 1];
};

// [1,4,1,5,7,3,6,1,9,9,3]
// [1,7,7,7,7,9,9,9,9,9,9]

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-04 09:16:48                                                  *
 * @LastModifiedDate: 2023-04-04 17:19:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 N 堆石头排成一排，第 i 堆中有 stones[i] 块石头。

// 每次移动（move）需要将连续的 K 堆石头合并为一堆，而这个移动的成本为这 K 堆石头的总数。

// 找出把所有石头合并成一堆的最低成本。如果不可能，返回 -1 。
/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function (stones, k) {
  const n = stones.length;
  if (n == 1) return 0;
  if (n < k || (n - k) % (k - 1) !== 0) return -1;
  const prefix = [0];
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + stones[i];
  }
  const dp = new Array(n)
    .fill(0)
    .map((_v) => new Array(n).fill(0).map((_v) => new Array(2).fill(0)));
  // [i, j]之间使用一个[x,y]表示，x表示最终能合并成几个，y表示合并需要花费的成本
  for (let j = 0; j < n; j++) {
    for (let i = j; i >= 0; i--) {
      if (i === j) {
        dp[i][j][0] = 1;
        dp[i][j][1] = 0;
        continue;
      }
      // 计算i - j之间的最小成本
      let cur = Infinity;
      let num = j - i + 1; // [i, j]个数
      for (let q = j; q > i; q--) {
        let first = dp[i][q - 1]; // [i, q-1]
        let second = dp[q][j]; // [q, j]
        if (first[0] + second[0] > k) {
          // 合并的方式 二者数量大于k的情况会在其余遍历时考虑
          continue;
        }
        cur = Math.min(cur, first[1] + second[1]);
      }
      dp[i][j][1] = cur;
      dp[i][j][0] = num;
      if (num >= k) {
        // 可以合并
        dp[i][j][0] = 1 + ((num - k) % (k - 1));
        if ((num - k) % (k - 1) === 0) { // 相等的情况下
          dp[i][j][1] = cur + prefix[j + 1] - prefix[i];
        }
      }
    }
  }
  return dp[0][n - 1][1];
};
//
// 0 1 2 4 5 6 7 8 9 10 11 12
// k = 3   idx [10,12] => (10,11) + (12,12) / (10,10) + (11,12) /  => cur = 0 => dp[10][12] = cur + prefix
// k = 3   idx [8, 12] => (8, 10) + (11,12) / (8, 9) + (10,12) => cur => dp[8][12]
// k = 3   idx [6, 12] => (6, 10) + (11,12) / (6, 9) + (10,12) / (6,7) + (8,12) => cur => dp[6][12]

// 10 11 => 9 10 => 7 8

// 计算i，j之间的成本，已知
console.log(
  mergeStones(
    [3, 2, 5, 1, 4, 2, 3, 8, 9, 6, 5, 4, 1, 2, 3, 5, 4, 1, 2, 6, 8, 7],
    4
  )
);

// 8
// 7  7 => 6

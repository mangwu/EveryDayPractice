/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-21 22:50:36                                                  *
 * @LastModifiedDate: 2024-07-21 23:10:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组，返回它的某个 非空 子数组（连续元素）在执行一次可选的删除操作后，所能得到的最大元素总和。换句话说，你可以从原数组中选出一个子数组，并可以决定要不要从中删除一个元素（只能删一次哦），（删除后）子数组中至少应当有一个元素，然后该子数组（剩下）的元素总和是所有子数组之中最大的。

// 注意，删除一个元素后，子数组 不能为空。

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
  const n = arr.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(-1));
  dp[0][0] = arr[0]; // 不删除
  dp[0][1] = 0; // 删除
  let ans = arr[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]); // 不删除
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i]); // 删除
    ans = Math.max(ans, dp[i][0], dp[i][1]);
  }
  return ans;
};

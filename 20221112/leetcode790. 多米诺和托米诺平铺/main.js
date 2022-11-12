/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-12 13:25:29                                                  *
 * @LastModifiedDate: 2022-11-12 17:36:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
const MOD = 10 ** 9 + 7;
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  for (let i = 4; i <= n; i++) {
    let sum = dp[i - 1] + dp[i - 2];
    for (let j = 3; j <= i; j++) {
      sum += 2 * dp[i - j];
    }
    dp[i] = sum % MOD;
  }
  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  // i列之前都是铺满的，
  // 第i列有4个状态：00 10 01 11 （没有覆盖，一个上覆盖，一个下覆盖，双覆盖）
  const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(0));
  dp[0][3] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][3] % MOD;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
    dp[i][3] =
      (dp[i - 1][3] + dp[i - 1][2] + dp[i - 1][1] + dp[i - 1][0]) % MOD;
  }
  return dp[n][3];
};
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  // i列之前都是铺满的，
  // 第i列有4个状态：00 10 01 11 （没有覆盖，一个上覆盖，一个下覆盖，双覆盖）
  let dp1 = 0;
  let dp2 = 0;
  let dp3 = 0;
  let dp4 = 1;
  for (let i = 1; i <= n; i++) {
    [dp1, dp2, dp3, dp4] = [
      dp4 % MOD,
      (dp1 + dp3) % MOD,
      (dp1 + dp2) % MOD,
      (dp1 + dp2 + dp3 + dp4) % MOD,
    ];
  }
  return dp4;
};

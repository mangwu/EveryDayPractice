/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-20 11:50:20                                                  *
 * @LastModifiedDate: 2022-11-20 12:00:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @param {number} k
 * @param {number} minLength
 * @return {number}
 */
var beautifulPartitions = function (s, k, minLength) {
  const n = s.length;
  const primes = new Set(["2", "3", "5", "7"]);
  if (primes.has(s[n - 1])) {
    return 0;
  }
  const dp = new Array(n).fill(0).map((v) => new Array(k + 1).fill(-1));
  const dfs = (i, k) => {
    if (k == 1) {
      if (i < n && n - i >= minLength && !primes.has(s[i])) {
        dp[i][k] = 1;
        return 1;
      } else {
        dp[i][k] = 0;
        return 0;
      }
    }
    
  };
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-03 16:28:15                                                  *
 * @LastModifiedDate: 2022-09-03 17:02:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。
// 我们用这种形式来构造一个数对链。

// 给定一个数对集合，找出能够形成的最长数对链的长度。
// 你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

//
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  // 排序
  pairs.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let ans = 1;
  const filterPairs = [];
  let preV = null;
  for (const pair of pairs) {
    if (pair[0] !== preV) {
      filterPairs.push(pair);
      preV = pair[0];
    }
  }
  const n = filterPairs.length;
  const dp = new Array(n);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    // 求dp[i];
    // 默认就是1
    let curMax = 1;
    // 查找前面可选择的数对
    for (let j = 0; j < i; j++) {
      if (filterPairs[i][0] > filterPairs[j][1]) {
        curMax = Math.max(curMax, 1 + dp[j]);
      }
    }
    dp[i] = curMax;
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

// [1,2] [1,3] [1,4] [2,3] [2,4] [3,4] [3 7] [5, 7] [5, 8], [5, 9] [7, 8]

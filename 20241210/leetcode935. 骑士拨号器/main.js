/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-10 17:08:17                                                  *
 * @LastModifiedDate: 2024-12-10 17:52:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 象棋骑士有一个独特的移动方式，它可以垂直移动两个方格，水平移动一个方格，或者水平移动两个方格，垂直移动一个方格(两者都形成一个 L 的形状)。

// 象棋骑士可能的移动方式如下图所示:

// 我们有一个象棋骑士和一个电话垫，如下所示，骑士只能站在一个数字单元格上(即蓝色单元格)。

// 给定一个整数 n，返回我们可以拨多少个长度为 n 的不同电话号码。

// 你可以将骑士放置在任何数字单元格上，然后你应该执行 n - 1 次移动来获得长度为 n 的号码。所有的跳跃应该是有效的骑士跳跃。

// 因为答案可能很大，所以输出答案模 109 + 7.
const DIRS = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [1, -2],
  [-2, 1],
  [2, -1],
  [-1, -2],
  [-2, -1],
];
/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
  const dp = new Array(n + 1).fill(0).map((v) => new Array(10).fill(0));
  // dp[m][i]表示行动m步，从i出发能构成的电话号码个数
  const phonePanel = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const mod = 10 ** 9 + 7;
  for (let m = 1; m <= n; m++) {
    for (let i = 0; i < 10; i++) {
      let x = Math.floor((i - 1) / 3);
      let y = (i - 1) % 3;
      if (i === 0) {
        x = 3;
        y = 1;
      }
      if (m === 1) {
        dp[m][i] = 1;
      } else {
        for (const dir of DIRS) {
          const nx = dir[0] + x;
          const ny = dir[1] + y;
          if (
            nx >= 0 &&
            nx < 4 &&
            ny >= 0 &&
            ny < 3 &&
            phonePanel[nx][ny] !== "*" &&
            phonePanel[nx][ny] !== "#"
          ) {
            dp[m][i] = (dp[m][i] + dp[m - 1][phonePanel[nx][ny]]) % mod;
          }
        }
      }
    }
  }
  return dp[n].reduce((a, b) => a + b) % mod;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-21 08:45:32                                                  *
 * @LastModifiedDate: 2025-02-21 10:22:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 二进制 字符串 floor ，它表示地板上砖块的颜色。

// floor[i] = '0' 表示地板上第 i 块砖块的颜色是 黑色 。
// floor[i] = '1' 表示地板上第 i 块砖块的颜色是 白色 。
// 同时给你 numCarpets 和 carpetLen 。你有 numCarpets 条 黑色 的地毯，每一条 黑色 的地毯长度都为 carpetLen 块砖块。请你使用这些地毯去覆盖砖块，使得未被覆盖的剩余 白色 砖块的数目 最小 。地毯相互之间可以覆盖。

// 请你返回没被覆盖的白色砖块的 最少 数目。

/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function (floor, numCarpets, carpetLen) {
  const n = floor.length;
  // 1 => 白色，需要被填充
  // dp[i][j] 使用j个carpetLen长的地毯填充前i个地砖后白色砖块最少的数量
  const INF = Number.MAX_SAFE_INTEGER;
  const dp = new Array(n)
    .fill(0)
    .map((v) => new Array(numCarpets + 1).fill(INF));
  // dp[i][j] = min(dp[i - len][j-1], dp[i-1][j] + [floor[i]是否是白色])
  // 初始化：j是0的情况下，直接按照i计算白色砖块数量
  for (let i = 0; i < n; i++) {
    let pre = i > 0 ? dp[i - 1][0] : 0;
    if (floor[i] === "1") pre++;
    dp[i][0] = pre;
  }
  // 进行动态规划
  for (let j = 1; j <= numCarpets; j++) {
    for (let i = 0; i < n; i++) {
      // 不放置地毯
      dp[i][j] = (i > 0 ? dp[i - 1][j] : 0) + Number(floor[i]);
      // 放置地毯
      dp[i][j] = Math.min(
        dp[i][j],
        i + 1 > carpetLen ? dp[i - carpetLen][j - 1] : 0
      );
    }
  }
  return dp[n - 1][numCarpets];
};

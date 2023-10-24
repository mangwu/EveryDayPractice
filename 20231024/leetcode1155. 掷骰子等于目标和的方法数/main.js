// 这里有 n 个一样的骰子，每个骰子上都有 k 个面，分别标号为 1 到 k 。

// 给定三个整数 n ,  k 和 target ，返回可能的方式(从总共 kn 种方式中)滚动骰子的数量，使正面朝上的数字之和等于 target 。

// 答案可能很大，你需要对 109 + 7 取模 。
const MOD = 10 ** 9 + 7;

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  // 动态规划，使用n个筛子合成target有x种情况
  const dp = new Array(target + 1).fill(0).map((v) => new Array(n + 1).fill(0));
  for (let i = 1; i <= Math.min(k, target); i++) {
    dp[i][1] = 1;
  }
  for (let i = 2; i <= n; i++) {
    // 计算i个筛子，每个合成数的情况
    for (let j = i; j <= Math.min(target, i * k); j++) {
      // 计算dp[j][i]的值，
      for (let l = 1; j - l >= 1 && l <= k; l++) {
        // 当前投的是l
        dp[j][i] += dp[j - l][i - 1];
        dp[j][i] %= MOD;
      }
    }
  }
  return dp[target][n];
};

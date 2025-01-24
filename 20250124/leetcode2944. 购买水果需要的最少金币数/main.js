// 给你一个 下标从 1 开始的 整数数组 prices ，其中 prices[i] 表示你购买第 i 个水果需要花费的金币数目。

// 水果超市有如下促销活动：

// 如果你花费 prices[i] 购买了下标为 i 的水果，那么你可以免费获得下标范围在 [i + 1, i + i] 的水果。
// 注意 ，即使你 可以 免费获得水果 j ，你仍然可以花费 prices[j] 个金币去购买它以获得它的奖励。

// 请你返回获得所有水果所需要的 最少 金币数。

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  // 动态规划，购买dp[i]的最少金币数
  const n = prices.length;
  const dp = new Array(n).fill(Infinity);
  dp[0] = prices[0];
  for (let i = 1; i < n; i++) {
    dp[i] = prices[i] + dp[i - 1];
    for (let j = i - 1; j >= 0 && (j + 1) * 2 >= i + 1; j--) {
      const pre = j > 0 ? dp[j - 1] : 0;
      dp[i] = Math.min(dp[i], prices[j] + pre);
    }
  }
  return dp[n - 1];
};

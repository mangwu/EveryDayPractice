// 你在一个水果超市里，货架上摆满了玲琅满目的奇珍异果。

// 给你一个下标从 1 开始的数组 prices ，其中 prices[i] 表示你购买第 i 个水果需要花费的金币数目。

// 水果超市有如下促销活动：

// 如果你花费 price[i] 购买了水果 i ，那么接下来的 i 个水果你都可以免费获得。
// 注意 ，即使你 可以 免费获得水果 j ，你仍然可以花费 prices[j] 个金币去购买它以便能免费获得接下来的 j 个水果。

// 请你返回获得所有水果所需要的 最少 金币数。

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  const n = prices.length;
  if (n === 1) return prices[0];
  const dp = new Array(n + 1)
    .fill(Infinity)
    .map(() => new Array(2).fill(Infinity));
  dp[1] = [prices[0], prices[0]]; // [x, y]  x是不购买自身的最小值，y是购买自身的最小值
  dp[2] = [prices[0], prices[0] + prices[1]];
  for (let i = 2; i < n; i++) {
    // 第 i + 1个水果的结果
    dp[i + 1][1] = Math.min(dp[i][0], dp[i][1]) + prices[i];
    for (let j = i - 1; (j + 1) * 2 - 1 >= i; j--) {
      dp[i + 1][0] = Math.min(dp[i + 1][0], dp[j + 1][1]);
    }
  }
  return Math.min(dp[n][0], dp[n][1]);
};

// 1 2 3 4 5 6 7 8

// 在一个火车旅行很受欢迎的国度，你提前一年计划了一些火车旅行。在接下来的一年里，你要旅行的日子将以一个名为 days 的数组给出。每一项是一个从 1 到 365 的整数。

// 火车票有 三种不同的销售方式 ：

// 一张 为期一天 的通行证售价为 costs[0] 美元；
// 一张 为期七天 的通行证售价为 costs[1] 美元；
// 一张 为期三十天 的通行证售价为 costs[2] 美元。
// 通行证允许数天无限制的旅行。 例如，如果我们在第 2 天获得一张 为期 7 天 的通行证，那么我们可以连着旅行 7 天：第 2 天、第 3 天、第 4 天、第 5 天、第 6 天、第 7 天和第 8 天。

// 返回 你想要完成在给定的列表 days 中列出的每一天的旅行所需要的最低消费 。

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const n = days.length;
  const dp = new Array(n).fill(-1);
  const min = Math.min.apply(null, costs);
  dp[0] = min;
  for (let i = 1; i < n; i++) {
    // 选择1天的
    dp[i] = dp[i - 1] + min;
    // 选择7天或30天的
    for (let j = i - 1; i >= 0; j--) {
      if (days[i] - days[j] < 7) {
        dp[i] = Math.min(dp[i], Math.min(costs[1], costs[2]) + (dp[j - 1] | 0));
      } else if (days[i] - days[j] < 30) {
        dp[i] = Math.min(dp[i], costs[2] + (dp[j - 1] | 0));
      } else break;
    }
  }
  console.log(dp);
  return dp[n - 1];
};

// [1,4,6,7,8,20]
// [2,7,15]

// [ 2, 4, 6, 7, 8, 10 ]

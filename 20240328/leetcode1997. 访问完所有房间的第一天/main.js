// 你需要访问 n 个房间，房间从 0 到 n - 1 编号。同时，每一天都有一个日期编号，从 0 开始，依天数递增。你每天都会访问一个房间。

// 最开始的第 0 天，你访问 0 号房间。给你一个长度为 n 且 下标从 0 开始 的数组 nextVisit 。在接下来的几天中，你访问房间的 次序 将根据下面的 规则 决定：

// 假设某一天，你访问 i 号房间。
// 如果算上本次访问，访问 i 号房间的次数为 奇数 ，那么 第二天 需要访问 nextVisit[i] 所指定的房间，其中 0 <= nextVisit[i] <= i 。
// 如果算上本次访问，访问 i 号房间的次数为 偶数 ，那么 第二天 需要访问 (i + 1) mod n 号房间。
// 请返回你访问完所有房间的第一天的日期编号。题目数据保证总是存在这样的一天。由于答案可能很大，返回对 109 + 7 取余后的结果。

/**
 * @param {number[]} nextVisit
 * @return {number}
 */
var firstDayBeenInAllRooms = function (nextVisit) {
  // 模拟
  const set = new Set();
  const n = nextVisit.length;
  const visited = new Array(n).fill(0);
  let cur = 0; // 当前访问房间
  let ans = 0; // 访问总天数
  while (set.size !== n) {
    visited[cur]++;
    set.add(cur);
    if (visited[cur] % 2 === 0) {
      // 偶数，访问下一个房间
      cur++;
      cur %= n;
    } else {
      // 奇数，使用nextVisit
      cur = nextVisit[cur];
    }
    ans++;
    console.log(visited, ans);
  }
  return ans - 1; // 因为从第0天开始，所以要减去1
};

// 上面解答会超时，ans是线性增长，因为nextVisit[i]可以回到之前的房间

/**
 * @param {number[]} nextVisit
 * @return {number}
 */
var firstDayBeenInAllRooms = function (nextVisit) {
  // 需要利用的一点是，nextVisit[i] <=i，也就是说从nextVisit[i]一定是往回走的
  // 我们需要记录从i 到 j (i < j) 需要的天数
  const n = nextVisit.length;
  const visitCost = new Array(n).fill(0);
  // visitCost[i]表示从0到i需要花费的天数
  const mod = 10 ** 9 + 7;
  for (let i = 1; i < n; i++) {
    // 从i-1到i需要的花费为
    visitCost[i] =
      (visitCost[i - 1] +
        ((visitCost[i - 1] + mod - visitCost[nextVisit[i - 1]]) % mod) +
        2) %
      mod;
  }
  return visitCost[n - 1];
};

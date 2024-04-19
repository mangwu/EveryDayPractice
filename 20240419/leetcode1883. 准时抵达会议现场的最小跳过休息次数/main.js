// 给你一个整数 hoursBefore ，表示你要前往会议所剩下的可用小时数。要想成功抵达会议现场，你必须途经 n 条道路。道路的长度用一个长度为 n 的整数数组 dist 表示，其中 dist[i] 表示第 i 条道路的长度（单位：千米）。另给你一个整数 speed ，表示你在道路上前进的速度（单位：千米每小时）。

// 当你通过第 i 条路之后，就必须休息并等待，直到 下一个整数小时 才能开始继续通过下一条道路。注意：你不需要在通过最后一条道路后休息，因为那时你已经抵达会议现场。

// 例如，如果你通过一条道路用去 1.4 小时，那你必须停下来等待，到 2 小时才可以继续通过下一条道路。如果通过一条道路恰好用去 2 小时，就无需等待，可以直接继续。
// 然而，为了能准时到达，你可以选择 跳过 一些路的休息时间，这意味着你不必等待下一个整数小时。注意，这意味着与不跳过任何休息时间相比，你可能在不同时刻到达接下来的道路。

// 例如，假设通过第 1 条道路用去 1.4 小时，且通过第 2 条道路用去 0.6 小时。跳过第 1 条道路的休息时间意味着你将会在恰好 2 小时完成通过第 2 条道路，且你能够立即开始通过第 3 条道路。
// 返回准时抵达会议现场所需要的 最小跳过次数 ，如果 无法准时参会 ，返回 -1 。

/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
var minSkips = function (dist, speed, hoursBefore) {
  if (dist.reduce((a, b) => a + b) > hoursBefore * speed) return -1;
  const n = dist.length;
  // 每个路程不休息单独需要花费的时间
  const costs = dist.map((v) => Math.ceil(v / speed));
  // 猴后缀和
  const suffix = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + costs[i];
  }
  /**
   * @description 休息remian次需要花费的最小时间
   * @param {number} i 当前遍历到的索引
   * @param {number} remain 剩余休息次数
   * @param {number} pre 上一个如果休息了，这里就是连续休息的路程，如果没有休息，这里就是0
   * @returns {number} 返回最小的花费时间
   */
  const dfs = (i, remain, pre) => {
    if (i === n - 1) {
      // 最后一个路程不存在休息
      if (pre === 0) return costs[i]; // 上个路程没休息
      return Math.ceil((pre + dist[i]) / speed);
    }
    if (remain === 0) {
      // 没有休息次数了，可以得到结果
      return Math.ceil((pre + dist[i]) / speed) + suffix[i + 1];
    }
    // 当前进行一次休息
    let res = dfs(i + 1, remain - 1, pre + dist[i]);
    // 判断当前是否可以不用休息
    if (remain < n - i - 1) {
      res = Math.min(
        res,
        Math.ceil((pre + dist[i]) / speed) + dfs(i + 1, remain, 0)
      );
    }
    return res;
  };
  /**
   * @description 检查休息k次需要的最小时间
   * @param {*} k
   */
  const check = (k) => {
    const res = dfs(0, k, 0);
    console.log("休息次数：", k);
    console.log("需要的最小时间：", res);
    return res <= hoursBefore;
  };
  // 使用二分查找的方式找最小跳过次数
  let left = 0;
  let right = n - 1; // 最多休息n-1次，最后一次经过算直接到达
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return left;
};

const { random } = require("../../publicFunc/random/random");

const {
  recordInOutContent,
} = require("../../publicFunc/recordInOutContent/recordInOutContent");

recordInOutContent(
  minSkips,
  [
    1, 3, 2, 8, 5, 4, 1, 2, 3, 11, 2, 3, 6, 9, 8, 5, 4, 1, 2, 3, 6, 9, 5, 2, 4,
    6, 8,
  ],
  7,
  22
);

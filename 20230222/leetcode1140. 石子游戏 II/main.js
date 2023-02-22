/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-22 09:00:32                                                  *
 * @LastModifiedDate: 2023-02-22 10:48:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 爱丽丝和鲍勃继续他们的石子游戏。许多堆石子 排成一行，每堆都有正整数颗石子 piles[i]。游戏以谁手中的石子最多来决出胜负。

// 爱丽丝和鲍勃轮流进行，爱丽丝先开始。最初，M = 1。

// 在每个玩家的回合中，该玩家可以拿走剩下的 前 X 堆的所有石子，其中 1 <= X <= 2M。然后，令 M = max(M, X)。

// 游戏一直持续到所有石子都被拿走。

// 假设爱丽丝和鲍勃都发挥出最佳水平，返回爱丽丝可以得到的最大数量的石

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const n = piles.length;
  const suffix = new Array(n).fill(0); // 后缀和
  suffix[n - 1] = piles[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + piles[i];
  }
  // 定义函数dfs(i, M);
  // i表示从piles[i]开始拿石头（前面已经拿完）
  // M就是题意
  // 通过后缀和能计算出当前拿几个，保证在M范围内，对手拿的个数和自身拿的相比差距最小
  const dfs = (i, m) => {
    // 可以全部拿完
    if (i + m * 2 >= n) return suffix[i];
    // 遍历每种拿了1-m个之后，对手可以获得的最大石头数，选取其中最小的，我们的利益就最大
    let res = Infinity;
    for (let x = 1; x <= m * 2; x++) {
      res = Math.min(res, dfs(i + x, Math.max(m, x)));
    }
    return suffix[i] - res;
  };
  return dfs(0, 1);
};

// 上述情况当piles变大后，dfs的深度变大，所有情况数增多，为此需要进行记忆化搜索
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const n = piles.length;
  const suffix = new Array(n).fill(0); // 后缀和
  suffix[n - 1] = piles[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + piles[i];
  }
  // 定义函数dfs(i, M);
  // i表示从piles[i]开始拿石头（前面已经拿完）
  // M就是题意
  // 通过后缀和能计算出当前拿几个，保证在M范围内，对手拿的个数和自身拿的相比差距最小
  const cache = new Array(n)
    .fill(-1)
    .map((v) => new Array(Math.floor((n + 1) / 4) + 1).fill(-1)); // m不会超过n
  const dfs = (i, m) => {
    // 可以全部拿完
    if (i + m * 2 >= n) return suffix[i];
    if (cache[i][m] !== -1) return cache[i][m];
    // 遍历每种拿了1-m个之后，对手可以获得的最大石头数，选取其中最小的，我们的利益就最大
    let res = Infinity;
    for (let x = 1; x <= m * 2; x++) {
      res = Math.min(res, dfs(i + x, Math.max(m, x)));
    }
    cache[i][m] = suffix[i] - res;
    return suffix[i] - res;
  };
  return dfs(0, 1);
};

// 将记忆化搜索递归正推，也就是动态规划
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const n = piles.length;
  // 将cache转化为dp数组，倒着计算，即从
  let s = 0;
  const f = new Array(n).fill(0).map((v) => new Array(n + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    s += piles[i];
    for (let m = 1; m < Math.floor(i / 2) + 2; m++) {
      if (i + m * 2 >= n) {
        // 可以全选
        f[i][m] = s;
      } else {
        let res = Infinity;
        for (let x = 1; x <= m * 2; x++) {
          res = Math.min(f[i + x][Math.max(m, x)], res);
        }
        f[i][m] = s - res;
      }
    }
  }
  return f[0][1];
};

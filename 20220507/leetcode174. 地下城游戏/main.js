/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-07 14:07:45                                                  *
 * @LastModifiedDate: 2022-05-07 16:50:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一些恶魔抓住了公主（P）并将她关在了地下城的右下角。地下城是由 M x N 个房间组成的二维网格。我们英勇的骑士（K）最初被安置在左上角的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。

// 骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。

// 有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。

// 为了尽快到达公主，骑士决定每次只向右或向下移动一步。

//

// 编写一个函数来计算确保骑士能够拯救到公主所需的最低初始健康点数。

// 例如，考虑到如下布局的地下城，如果骑士遵循最佳路径 右 -> 右 -> 下 -> 下，则骑士的初始健康点数至少为 7。

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  if (m == 1 && n == 1) {
    return dungeon[0][0] >= 0 ? 1 : 1 - dungeon[0][0];
  }
  const dp = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  dp[0][0] = [dungeon[0][0], "start"];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let left = j > 0 ? j - 1 : null;
      let top = i > 0 ? i - 1 : null;
      if (i == m - 1 && j == n - 1) {
        dp[i][j] = [
          left !== null ? dp[i][left][0] + dungeon[i][j] : Infinity,
          top !== null ? dp[top][j][0] + dungeon[i][j] : Infinity,
        ];
        continue;
      }
      if (left !== null && top !== null) {
        // 当前的选择为二者中较大的那一个
        if (dp[i][left][0] > dp[top][j][0]) {
          dp[i][j] = [dp[i][left][0] + dungeon[i][j], "left"];
        } else if (dp[i][left][0] == dp[top][j][0]) {
          dp[i][j] = [dp[top][j][0] + dungeon[i][j], "lefttop"];
        } else {
          dp[i][j] = [dp[top][j][0] + dungeon[i][j], "top"];
        }
      } else if (left == null) {
        // 选择top
        dp[i][j] = [dp[top][j][0] + dungeon[i][j], "top"];
      } else {
        // 选择left
        dp[i][j] = [dp[i][left][0] + dungeon[i][j], "left"];
      }
    }
  }
  console.log(dp);
  // 遍历路径上所有值，获得最小值
  let left_ans = dp[0][0][0];
  let top_ans = dp[0][0][0];
  let start = dp[m - 1][n - 1];
  if (start[0] !== Infinity) {
    // 左边
    left_ans = Math.min(start[0], left_ans);
    let next = [m - 1, n - 2];
    while (dp[next[0]][next[1]][1] !== "start") {
      left_ans = Math.min(dp[next[0]][next[1]][0], left_ans);
      if (dp[next[0]][next[1]][1] == "left") {
        next[1]--;
      } else {
        next[0]--;
      }
    }
  }
  if (start[1] !== Infinity) {
    // 上面
    top_ans = Math.min(start[1], top_ans);
    let next = [m - 2, n - 1];
    while (dp[next[0]][next[1]][1] !== "start") {
      top_ans = Math.min(dp[next[0]][next[1]][0], top_ans);
      if (dp[next[0]][next[1]][1] == "left") {
        next[1]--;
      } else {
        next[0]--;
      }
    }
  }

  // 只有top_ans有效
  if (start[0] == Infinity) {
    return top_ans >= 0 ? 1 : 1 - top_ans;
  }
  // 只有left_ans有效
  if (start[1] == Infinity) {
    return left_ans >= 0 ? 1 : 1 - left_ans;
  }
  if (left_ans >= 0 || top_ans >= 0) {
    return 1;
  }
  // 二者都有效
  return 1 - Math.max(left_ans, top_ans);
};

// 上面的解决方案无法解决[[1,-3,2],[0,-1,2],[0,0,-2]]
// 因为无法判断当具有两条相似路径（左边和右边的健康值相等时），选择那一条路径的问题

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  if (m == 1 && n == 1) {
    return dungeon[0][0] >= 0 ? 1 : 1 - dungeon[0][0];
  }
  const dp = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  // 第一个元素，当前路径的健康点数和，第二个元素，当前路径上每个节点的最小值
  dp[0][0] = [dungeon[0][0], dungeon[0][0]];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let left = j > 0 ? j - 1 : null;
      let top = i > 0 ? i - 1 : null;
      // 两条路径选择最小节点值大的那一个
      if (i == m - 1 && j == n - 1 && left !== null && top !== null) {
        // 左边的当前节点
        // 右边的当前节点
        // 左边路径的最小节点值
        // 右边路径的最小节点值
        dp[i][j] = [
          
          dp[i][left][0] + dungeon[i][j],
          Math.max(
            Math.min(dp[i][left][0] + dungeon[i][j], dp[i][left][1]),
            Math.min(dp[top][j][0] + dungeon[i][j], dp[top][j][1])
          ),
        ];
        continue;
      }
      if (left !== null && top !== null) {
        // 当前的选择为二者中较大的那一个
        if (dp[i][left][0] > dp[top][j][0]) {
          dp[i][j] = [
            dp[i][left][0] + dungeon[i][j],
            Math.min(dp[i][left][0] + dungeon[i][j], dp[i][left][1]),
          ];
        } else if (dp[i][left][0] == dp[top][j][0]) {
          dp[i][j] = [
            dp[top][j][0] + dungeon[i][j],
            Math.min(
              Math.max(dp[i][left][1], dp[top][j][1]),
              dp[top][j][0] + dungeon[i][j]
            ),
          ];
        } else {
          dp[i][j] = [
            dp[top][j][0] + dungeon[i][j],
            Math.min(dp[top][j][0] + dungeon[i][j], dp[top][j][1]),
          ];
        }
      } else if (left == null) {
        // 选择top
        dp[i][j] = [
          dp[top][j][0] + dungeon[i][j],
          Math.min(dp[top][j][0] + dungeon[i][j], dp[top][j][1]),
        ];
      } else {
        // 选择left
        dp[i][j] = [
          dp[i][left][0] + dungeon[i][j],
          Math.min(dp[i][left][0] + dungeon[i][j], dp[i][left][1]),
        ];
      }
    }
  }
  return dp[m - 1][n - 1][1] >= 0 ? 1 : 1 - dp[m - 1][n - 1][1];
};

// 上面的判断考虑到了相似路径选择问题，但是未考虑最小路径与正数健康值的特殊关系
// 动态规划时计算第二个元素时，能为正数就以正数为主
[
  [1, 2, 1],
  [-2, -3, -3],
  [3, 2, -2],
];

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  if (m == 1 && n == 1) {
    return dungeon[0][0] >= 0 ? 1 : 1 - dungeon[0][0];
  }
  const dp = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  // 第一个元素，当前路径的健康点数和，第二个元素，当前路径上每个节点的最小值
  dp[0][0] = [dungeon[0][0], dungeon[0][0]];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let left = j > 0 ? j - 1 : null;
      let top = i > 0 ? i - 1 : null;
      // 两条路径选择最小节点值大的那一个
      if (i == m - 1 && j == n - 1 && left !== null && top !== null) {
        // 左边的当前节点
        // 右边的当前节点
        // 左边路径的最小节点值
        // 右边路径的最小节点值
        dp[i][j] = [
          dp[i][left][0] + dungeon[i][j],
          Math.max(
            Math.min(dp[i][left][0] + dungeon[i][j], dp[i][left][1]),
            Math.min(dp[top][j][0] + dungeon[i][j], dp[top][j][1])
          ),
        ];
        continue;
      }
      if (left !== null && top !== null) {
        // 当前的第一个元素选择原则为：二者中较大的那一个
        // 第二个元素元素选择原则为：
        if (dp[i][left][0] > dp[top][j][0]) {
          dp[i][j] = [
            dp[i][left][0] + dungeon[i][j],
            Math.min(dp[i][left][0] + dungeon[i][j], dp[i][left][1]),
          ];
        } else if (dp[i][left][0] == dp[top][j][0]) {
          dp[i][j] = [
            dp[top][j][0] + dungeon[i][j],
            Math.min(
              Math.max(dp[i][left][1], dp[top][j][1]),
              dp[top][j][0] + dungeon[i][j]
            ),
          ];
        } else {
          dp[i][j] = [
            dp[top][j][0] + dungeon[i][j],
            Math.min(dp[top][j][0] + dungeon[i][j], dp[top][j][1]),
          ];
        }
      } else if (left == null) {
        // 选择top
        dp[i][j] = [
          dp[top][j][0] + dungeon[i][j],
          Math.min(dp[top][j][0] + dungeon[i][j], dp[top][j][1]),
        ];
      } else {
        // 选择left
        dp[i][j] = [
          dp[i][left][0] + dungeon[i][j],
          Math.min(dp[i][left][0] + dungeon[i][j], dp[i][left][1]),
        ];
      }
    }
  }
  return dp[m - 1][n - 1][1] >= 0 ? 1 : 1 - dp[m - 1][n - 1][1];
};

// 左右两个路径
[
  [1, 2, 1],
  [-2, -3, -3],
  [3, 2, -2],
];
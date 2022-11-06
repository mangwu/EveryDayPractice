/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-06 21:01:40                                                  *
 * @LastModifiedDate: 2022-11-06 23:06:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// X 轴上有一些机器人和工厂。给你一个整数数组 robot ，其中 robot[i] 是第 i 个机器人的位置。再给你一个二维整数数组 factory ，其中 factory[j] = [positionj, limitj] ，表示第 j 个工厂的位置在 positionj ，且第 j 个工厂最多可以修理 limitj 个机器人。

// 每个机器人所在的位置 互不相同 。每个工厂所在的位置也 互不相同 。注意一个机器人可能一开始跟一个工厂在 相同的位置 。

// 所有机器人一开始都是坏的，他们会沿着设定的方向一直移动。设定的方向要么是 X 轴的正方向，要么是 X 轴的负方向。当一个机器人经过一个没达到上限的工厂时，这个工厂会维修这个机器人，且机器人停止移动。

// 任何时刻，你都可以设置 部分 机器人的移动方向。你的目标是最小化所有机器人总的移动距离。

// 请你返回所有机器人移动的最小总距离。测试数据保证所有机器人都可以被维修。

// 注意：

// 所有机器人移动速度相同。
// 如果两个机器人移动方向相同，它们永远不会碰撞。
// 如果两个机器人迎面相遇，它们也不会碰撞，它们彼此之间会擦肩而过。
// 如果一个机器人经过了一个已经达到上限的工厂，机器人会当作工厂不存在，继续移动。
// 机器人从位置 x 到位置 y 的移动距离为 |y - x| 。

/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function (robot, factory) {
  // 有这样一个基本的结论：工厂所选取修理的机器人应该是连续的
  // 这一点可以用邻近交换法证明：
  // 当两个不同工厂本应该修理的机器人进行交换时，原本连续的机器人变得非连续，会导致距离增加
  // 所以需要排序
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);
  // 记忆化搜索
  const n = factory.length;
  const m = robot.length;
  // 先找到子问题：
  // 原问题：n个工厂修理m个机器人的最短距离
  // 子问题：例如第最左边的一个工厂把左边相邻的机器人都修掉了(假设有k个)，
  //        那么剩余的n-1个工厂就需要修改m-k个机器人，计算它的最短距离就是一个子问题
  // 记忆化过程，需要一个n * m的二维数组，记录在x个工厂修改y个机器人的最小距离
  const cache = new Array(n).fill(-1).map((v) => new Array(m).fill(-1));
  // 这里就需要定义一个解决子问题的dfs递归函数dfs(i,j)，
  // 它表示[i, n-1]中的工厂修理[j, m-1]中机器人的最小距离
  const dfs = (i, j) => {
    if (j == m) {
      // 机器人修完了
      return 0;
    }
    if (i === n - 1) {
      // 最后一个工厂，只能用它修理剩下的机器人
      if (m - j > factory[i][1]) return Infinity; // 一个不合法得到方案
      return new Array(m - j)
        .fill(0)
        .reduce(
          (pre, _cur, ci) => Math.abs(robot[ci + j] - factory[i][0]) + pre,
          0
        );
    }
    // 没有到最后一个工厂，可以先判断在cache中是否存在这个结果
    if (cache[i][j] !== -1) return cache[i][j];
    // 没有结果就需要计算,首先计算一个都不修的结果
    let res = dfs(i + 1, j);
    // 修理的结果
    let sum = 0;
    // 修理的个数
    let k = 1;
    while (k <= factory[i][1] && j + k - 1 < m) {
      sum += Math.abs(robot[j + k - 1] - factory[i][0]);
      res = Math.min(res, sum + dfs(i + 1, j + k));
      k++;
    }
    // 记录修理结果
    cache[i][j] = res;
    return res;
  };
  return dfs(0, 0);
};

// 记忆化搜索的时间复杂度 = 状态个数 * 单个状态的转移次数 * 计算转移来源是谁需要的时间
// 状态个数就是i和j的范围相乘，即m*n
// 单个状态的转移次数，就是进行比较的次数，最大就是m
// 所以总时间复杂度就是n * m * m

/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function (robot, factory) {
  // 有这样一个基本的结论：工厂所选取修理的机器人应该是连续的
  // 这一点可以用邻近交换法证明：
  // 当两个不同工厂本应该修理的机器人进行交换时，原本连续的机器人变得非连续，会导致距离增加
  // 所以需要排序
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);
  const n = factory.length;
  const m = robot.length;

  // 记忆化搜索都可以 转换为递推（动态规划）
  // 类似的，需要一个二维数组表示i个工厂修改j个机器人花费的最最小距离
  const dp = new Array(n + 1)
    .fill(-1)
    .map((v) => new Array(m + 1).fill(Infinity));
  // dp[i][j]表示前i个工厂，修改前j个机器人需要的最小距离（从前往后推比较自然）
  // 讨论转移方程
  // 1. 当前工厂一个都不修理，就是dp[i-1][j] (用前i-1个修改j个)
  // 2. 修理一个 dp[i-1][j-1] + cost(i,j,1)
  // cost(i,j,k)表示第i个工厂修改从j往前的k个机器人之和
  // 枚举k取最小值即可就好，k的范围就是 0 <= k <= min(j, limit[i])
  dp[0][0] = Math.abs(factory[0][0] - robot[0]);
  // 将所有修理0个机器人的元素设置为0
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }
  // i表示工厂，j表示机器人
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // 用前i个工厂修改前j个机器人
      let res = dp[i - 1][j]; // 当前工厂不修理的结果
      // 枚举修理[1, min(j, limit[i])]的结果
      let up = Math.min(j, factory[i - 1][1]); // 修理个数上线
      let sum = 0; // 修理之和
      for (let k = 1; k <= up; k++) {
        sum += Math.abs(factory[i - 1][0] - robot[j - k]);
        // 前i - 1个工厂修理j-k个工厂
        res = Math.min(res, dp[i - 1][j - k] + sum);
      }
      dp[i][j] = res;
    }
  }
  return dp[n][m];
};

/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function (robot, factory) {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);
  const n = factory.length;
  const m = robot.length;
  const dp = new Array(m + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = m; j >= 1; j--) {
      let res = dp[j]; 
      let up = Math.min(j, factory[i - 1][1]); // 修理个数上限
      let sum = 0; // 修理之和
      for (let k = 1; k <= up; k++) {
        sum += Math.abs(factory[i - 1][0] - robot[j - k]);
        res = Math.min(res, dp[j - k] + sum);
      }
      dp[j] = res;
    }
  }
  return dp[m];
};

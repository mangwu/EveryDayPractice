/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 14:51:28                                                  *
 * @LastModifiedDate: 2025-02-11 16:05:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 小华按照地图去寻宝，地图上被划分成 m 行和 n 列的方格，横纵坐标范围分别是 [0, n-1] 和 [0, m-1]。

// 在横坐标和纵坐标的数位之和不大于 k 的方格中存在黄金（每个方格中仅存在一克黄金），但横坐标和纵坐标之和大于 k 的方格存在危险不可进入。小华从入口 (0,0) 进入，任何时候只能向左，右，上，下四个方向移动一格。

// 请问小华最多能获得多少克黄金？

// 输入描述 坐标取值范围如下：

// 0 ≤ m ≤ 50
// 0 ≤ n ≤ 50
// k 的取值范围如下：

// 0 ≤ k ≤ 100
// 输入中包含3个字数，分别是m, n, k
// 输出描述 输出小华最多能获得多少克黄金

// 用例
// 输入	40 40 18
// 输出	1484
// 解题思路
// 1、 dfs(m, n, k, grid)，表示在地图大小为m × n，数位和不超过k的情况下，从起点(0, 0)开始搜索并统计黄金的数量。 2、在 dfs 函数中，使用栈来存储待探索的方格的坐标，初始将起点(0, 0)加入栈中。同时创建二维数组 visited 来记录方格是否已经访问过，初始值都设为 False。 3、使用 count 来记录黄金的数量，初始值为0。 4、在循环中，不断从栈中弹出方格的坐标，直到栈为空。对于每个弹出的方格，进行以下操作：

// 检查该方格是否在地图范围内，是否已经访问过，以及横纵坐标的数位之和是否不超过 k。如果不符合条件，则跳过当前方格。
// 将当前方格标记为已访问。 将当前方格的黄金数量加入 count 中。
// 将当前方格上下左右四个相邻方格的坐标加入栈中，以便下一轮搜索。
// 5、循环结束后，返回 count，即为小华最多能收集的黄金数量。

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

const iter = rl[Symbol.asyncIterator]();

const asyncFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFunc())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  const [m, n, k] = arr;
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const digitSum = (num) => {
    let res = 0;
    while (num) {
      res += num % 10;
      num = Math.floor(num / 10);
    }
    return res;
  };
  const dfs = (x, y) => {
    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      visited[x][y] ||
      digitSum(x) + digitSum(y) > k
    ) {
      return 0;
    }
    let count = 1;
    visited[x][y] = true;
    for (const dir of dirs) {
      count += dfs(x + dir[0], y + dir[1]);
    }
    return count;
  };
  console.log(dfs(0, 0));
}
solution();

/**
 * @description 边界着色
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-07 19:02:19
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一个大小为 m x n 的整数矩阵 grid ，表示一个网格。另给你三个整数 row、col 和 color 。网格中的每个值表示该位置处的网格块的颜色。

//  两个网格块属于同一 连通分量 需满足下述全部条件：

//  两个网格块颜色相同
//  在上、下、左、右任意一个方向上相邻
//  连通分量的边界 是指连通分量中满足下述条件之一的所有网格块：

//  在上、下、左、右四个方向上与不属于同一连通分量的网格块相邻
//  在网格的边界上（第一行/列或最后一行/列）
//  请你使用指定颜色 color 为所有包含网格块 grid[row][col] 的 连通分量的边界 进行着色，并返回最终的网格 grid 。
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// 1 <= grid[i][j], color <= 1000
// 0 <= row < m
// 0 <= col < n

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
  // 将与grid[row][col]格子相同值且可以连通的格子进行变更指定值的操作
  // 且只变更连通区域的边界值，即上下左右的连通格子个数小于4个

  // 使用BFS算法，从grid[row][col]开始入队列，检查其上下左右的扩展，是同色就入队
  // 防止重复入队列声明一个同grid大小的数组，用于保存结果，初始化为-1，如果未被修改，说明是新连通格子，可以入队遍历

  // 连通格子的基础色
  const baseColor = grid[row][col];
  // 设置一个对比的数组表示联通的部分,后续修改其中的值作为结果返回
  const ans = new Array(grid.length).fill(0).map((_item) => {
    return new Array(grid[0].length).fill(0);
  });
  // 声明一个队列（可直接用数组,shift方法为出列，push为入列）
  let queue = [];
  // 初始值入队列
  queue.push([row, col]);
  // bfs遍历的上下左右四个格子
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // 当队列为空时就退出循环，表明以及查找连通完成
  while (queue.length > 0) {
    // 出第一个队列元素
    const poll = queue.shift();
    // 队列元素的rol和col
    const x = poll[0];
    const y = poll[1];
    // 设置一个数用于记录上下左右格子连通的个数，可以为之后判断是否是边界做比较
    let links = 0;
    // 遍历上下左右四个格子
    for (let dir of dirs) {
      // 获得四周格子的row和col
      const xn = x + dir[0];
      const yn = y + dir[1];
      // col，row大于gird大小或者小于0就终止本次遍历，继续循环
      if (xn < 0 || xn >= grid.length || yn < 0 || yn >= grid[0].length)
        continue;
      // 如果不是连通格子就终止本次遍历，继续循环
      if (grid[xn][yn] !== baseColor) {
        continue;
      } else {
        links++;
      }
      // 判断是否是新的连通格子，是的话就进队列
      if (ans[xn][yn] !== 0) {
        continue;
      }
      queue.push([xn, yn]);
    }
    // 判断本次出队的格子是否是边界格子
    ans[x][y] = links == 4 ? grid[x][y] : color;
  }
  // 将没有遍历到的不是连通格子的颜色修正为grid中对应的颜色
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 如果ans中未修改颜色的格子即是非连通格子
      if (ans[i][j] === 0) {
        ans[i][j] = grid[i][j];
      }
    }
  }
  return ans;
};
console.log(
  colorBorder(
    [
      [2, 3, 4],
      [3, 4, 4],
      [4, 2, 2],
    ],
    1,
    1,
    5
  )
);

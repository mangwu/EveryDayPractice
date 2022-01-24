/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-24 15:33:18                                                  *
 * @LastModifiedDate: 2022-01-24 20:35:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 城市用一个 双向连通 图表示，图中有 n 个节点，从 1 到 n 编号（包含 1 和 n）。图中的边用一个二维整数数组 edges 表示，其中每个 edges[i] = [ui, vi] 表示一条节点 ui 和节点 vi 之间的双向连通边。每组节点对由 最多一条 边连通，顶点不存在连接到自身的边。穿过任意一条边的时间是 time 分钟。

// 每个节点都有一个交通信号灯，每 change 分钟改变一次，从绿色变成红色，再由红色变成绿色，循环往复。所有信号灯都 同时 改变。你可以在 任何时候 进入某个节点，但是 只能 在节点 信号灯是绿色时 才能离开。如果信号灯是  绿色 ，你 不能 在节点等待，必须离开。

// 第二小的值 是 严格大于 最小值的所有值中最小的值。

// 例如，[2, 3, 4] 中第二小的值是 3 ，而 [2, 2, 4] 中第二小的值是 4 。
// 给你 n、edges、time 和 change ，返回从节点 1 到节点 n 需要的 第二短时间 。

// 注意：

// 你可以 任意次 穿过任意顶点，包括 1 和 n 。
// 你可以假设在 启程时 ，所有信号灯刚刚变成 绿色 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  // 第二小值：严格大于最小值，[2, 2, 4]中4是第二小值
  // 对于路径中的每个通过时间time是恒等的，求第二小值就是求第二小的最短路径
  // 最短路径可以使用bfs求解，求出第二段的路径后，乘以time就是不考虑红绿灯花费的时间
  // 最后考虑红绿灯的情况下求出总时间
  // 注意路径可以重复访问，即不存在visited的情况
  // n是目的地

  // 声明遍历层数
  let recode = 0;
  // BFS搜索的队列
  let queue = [];
  // 记录最小路径
  const minPath = [];

  // 起始点入队
  queue.push(1);

  let flag = true;
  // 不记录是否visited
  while (flag) {
    // 下一轮的节点
    let nxt = new Array();
    // 遍历一层的节点
    for (const node of queue) {
      // 如果节点为n就且minPath存在第二小值就结束循环
      if (node === n) {
        minPath.push(recode);
        // 如果存在第二小值，设置flag结束循环
        if (minPath[minPath.length - 1] > minPath[0]) {
          flag = false;
          break;
        }
      }
      // 相邻节点入队
      for (const edge of edges) {
        if (edge[0] === node) {
          nxt.push(edge[1]);
        }
        if (edge[1] === node) {
          nxt.push(edge[0]);
        }
      }
    }
    // 轮数增加
    recode++;
    // 下一轮节点
    queue = nxt;
  }
  console.log(minPath);
  // 计算结果
  // 第二路径
  const secondPath = minPath[minPath.length - 1];
  let ans = 0;
  for (let i = 0; i < secondPath; i++) {
    ans += time;
    if (i < secondPath - 1 && Math.floor(ans / change) % 2 == 1)
      ans = Math.floor((ans + change) / change) * change;
  }
  return ans;
};

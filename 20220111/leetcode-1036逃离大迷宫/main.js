/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-11 16:09:27                                                  *
 * @LastModifiedDate: 2022-01-11 20:42:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个 106 x 106 的网格中，每个网格上方格的坐标为 (x, y) 。

// 现在从源方格 source = [sx, sy] 开始出发，意图赶往目标方格 target = [tx, ty] 。数组 blocked 是封锁的方格列表，其中每个 blocked[i] = [xi, yi] 表示坐标为 (xi, yi) 的方格是禁止通行的。

// 每次移动，都可以走到网格中在四个方向上相邻的方格，只要该方格 不 在给出的封锁列表 blocked 上。同时，不允许走出网格。

// 只有在可以通过一系列的移动从源方格 source 到达目标方格 target 时才返回 true。否则，返回 false。

// 声明邻接结点的上下左右四个数
const k = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
// 边界值
const bound = Math.pow(10, 6);

/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function (blocked, source, target) {
  // source到target之间有路径就可以返回true
  // 使用dfs的深度遍历可以访问到以source为结点的所有可到达结点，如果其中有target就可以

  // 声明访问过的结点
  const visited = [];
  visited[source] = true;
  // 遍历阻塞的方格，设置为不可再访问
  for (let b of blocked) {
    visited[b] = true;
  }
  // 声明栈
  let stack = [source];
  // 获取栈顶
  // 声明是否有新的结点入栈
  let is_push = false; // 有说明回退了
  while (stack.length > 0) {
    // 本次栈顶结点
    const node = stack[stack.length - 1];
    // 设置本次是否有新结点出栈
    is_push = false;
    // 遍历node的邻接结点，查找是否有等于target的结点
    for (let i of k) {
      const newNode = [node[0] + i[0], node[1] + i[1]];
      console.log(newNode);
      if (
        newNode[0] < 0 ||
        newNode[0] >= Math.pow(10, 6) ||
        newNode[1] < 0 ||
        newNode[1] >= Math.pow(10, 6)
      )
        continue;
      // 如果是目标未被访问过且其值大于0，入栈,否则继续遍历
      if (!visited[newNode]) {
        stack.push(newNode);
        visited[newNode] = true;
        is_push = true;
        if (newNode[0] === target[0] && newNode[1] === target[1]) {
          return true;
        }
        break;
      }
    }
    // 如果没有入栈的，回退出栈
    if (!is_push) {
      stack.pop();
    }
  }
  // dfs搜索完了还没有target则返回false
  return false;
};
// 这种方式的时间复杂度太高了为10 ^6 * 10^6
// console.log(isEscapePossible([], [0, 0], [999999, 999999]));

// 使用其它方式：通过判断block是否阻断了source和target计算
/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible2 = function (blocked, source, target) {
  // 1.需要通过blocked判断是否阻断了source和target，
  // 2.因为block数组的大小是有限制的(200)
  // 3.他能组成的最大区域的方格个数如果比source到target或者target到source的少，则必定能达到
  // 4.blocked有三种情况组成一个封闭区域：①自己封闭②使用两条边界线③使用一条分界线
  // 5.方式②才能近可能组成一个最大的封闭空间，即等边直角三角形，个数为1 + 2 + ... n-1 （n为blocked的长度）即 (n-1)n/2
  // 阻塞块的长度
  const len = blocked.length;
  // 获得max
  const max = Math.floor(((len - 1) * len) / 2);
  console.log(max);
  /**
   * @description 用于限定计算队列长度的bfs算法
   * @param {Array} start 开始结点
   * @param {Array} end 结束结点
   * @param {Number} max 队列的最大值
   */
  const bfs = (start, end) => {
    // 声明队列，（非出队队列），需要到达max值，如果达不到或者提前遍历不到则退出
    const list = [start];
    // 获得开始结点，和block结点，置为已访问
    // 使用hash或数组记录阻塞的记录
    const visited = [];
    for (let b of blocked) {
      visited[b] = true;
    }
    visited[start] = true;
    console.log(visited);
    // 遍历list 期间会不断的增加list长度, 如果增大大于max就退出循环,或者提前退出
    for (let i = 0; i < list.length && list.length <= max; i++) {
      // 广度遍历
      for (let j of k) {
        // 新结点
        const newNode = [list[i][0] + j[0], list[i][1] + j[1]];
        // 如果不在 10^6 到 10^6之间且不是已访问过的
        if (
          newNode[0] >= 0 &&
          newNode[0] < bound &&
          newNode[1] >= 0 &&
          newNode[1] < bound &&
          !visited[newNode]
        ) {
          // 判断是否是目标
          if (newNode[0] === end[0] && newNode[1] === end[1]) return true;
          // 不是就入队
          list.push(newNode);
          // 入队
          visited[newNode] = true;
        }
      }
    }
    // 当队列长度大于max时，表示已经超过最大区域，说明是可达的
    console.log(list);
    return list.length > max;
  };
  // 都需要到达
  return bfs(source, target) && bfs(target, source);
};

console.log(
  isEscapePossible2(
    [
      [0, 1],
      [1, 0],
    ],
    [0, 0],
    [0, 2]
  )
);

console.log(
  isEscapePossible2(
    [
      [0, 4],
      [1, 3],
      [2, 2],
      [3, 1],
      [4, 0],
    ],
    [0, 0],
    [0, 9999]
  )
);

/**
 * @description 广度优先算法
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-16 10:26:50
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @type {Number[]} 邻接矩阵
 * @description 横向看：每个结点是否指向索引结点，是则为1，否则为0
 * 竖向看：每个结点被那个结点指向，1则为被改索引结点指向，0则不被改索引结点指向
 */
const maze = [
  [0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
];

// 访问过的结点
const visited = [];
/**
 * @description 使用联接矩阵遍历
 * @param {Number} start 开始结点 0 - n-1
 * @param {Number[]} maze 邻接矩阵
 */
var bfs = function (start, maze) {
  // 队列
  const queue = [];
  // 开始结点入队
  queue.push(start);
  // 队列不为空时遍历
  while (queue.length > 0) {
    // 结点出队
    let node = queue.shift();
    // 结点被访问过了
    // visited.push(node);
    visited[node] = true;
    console.log(node);
    for (let i = 0; i < maze.length; i++) {
      // 如果结点指向的索引结点是有邻接（等于1）的，且没有访问过也在队列中没有出现，则入队
      if (maze[node][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};
/**
 * @description 将所有的结点都作为开始广度优先遍历一遍，那么有向图就可以遍历完
 */
const BFS = () => {
  for (let i = 0; i < maze.length; i++) {
    if (visited[i]) {
      continue;
    }
    bfs(i, maze);
  }
};
BFS();

/**
 * @type {Number[]} 邻接表
 * @description 索引值表示结点，索引值指向的列表中的值为索引值结点指向的索引结点
 */
const adList = [[1, 2], [2, 3], [1, 2, 3], [0], [2, 3]];
// 记录访问过的结点
const visited2 = [];

/**
 * @description 使用邻接表的bfs算法
 * @param {Number} start 开始结点
 * @param {Number[]} list 邻接表
 */
const bfs2 = (start, list) => {
  // 声明队列
  const queue = [];
  // 开始结点入队
  queue.push(start);
  // 遍历邻接表找出结点的相邻结点
  while (queue.length > 0) {
    // 顶点结点出队
    let node = queue.shift();
    // 设置为访问过的结点
    visited2[node] = true;
    // 获取相邻结点
    const neighbor = list[node];
    // 遍历邻居结点，判断是否是为访问结点
    for (let i = 0; i < neighbor.length; i++) {
      // 未访问过
      if (!visited2[neighbor[i]]) {
        visited2[neighbor[i]] = true;
        queue.push(neighbor[i]);
      }
    }
    console.log(node);
  }
};

bfs2(0, adList);

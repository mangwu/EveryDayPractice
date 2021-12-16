/**
 * @description 深度优先搜索
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-16 14:46:24
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @type {Number[]} 邻接矩阵
 */
const maze = [
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 1, 0, 0],
];

const visited = [];
// 递归实现
/**
 * @description 递归 邻接矩阵 实现
 * @param {number} start 开始顶点
 */
const dfs = (start) => {
  visited[start] = true;
  // 遍历maze，获取邻接结点，选择其中一个递归设为访问过
  for (let i = 0; i < maze.length; i++) {
    // 如果未访问过，且有邻接结点
    if (!visited[i] && maze[start][i] === 1) {
      dfs(i);
    }
  }
  console.log(start);
};
// dfs(0)
const main = () => {
  for (let i = 0; i < maze.length; i++) {
    if (visited[i]) {
      continue;
    }
    dfs(i);
  }
};
main();
console.log("-----------------------");
/**
 * @type {Number[]} adList
 * @description 邻接表
 */
const adList = [[1, 2], [2, 4], [2], [0, 1, 4], [2]];

const visited2 = [];
/**
 * @param {Number} start
 * @description 递归 邻接表 实现
 */
const dfs2 = (start) => {
  visited2[start] = true;
  // 递归遍历
  for (let i = 0; i < adList[start].length; i++) {
    if (!visited2[adList[start][i]]) {
      dfs2(adList[start][i]);
    }
  }
  console.log(start);
};

const main2 = () => {
  for (let i = 0; i < adList.length; i++) {
    if (visited2[i]) {
      continue;
    }
    dfs2(i);
  }
};
main2();

console.log("------------------");
const visited3 = [];
/**
 * @param {Number} start
 * @description 非递归 栈操作 邻接矩阵
 */
const dfsWithStack = (start) => {
  visited3[start] = true;
  // 声明栈
  let stack = [start];
  // 声明是否有新的结点入栈
  let is_push = false;
  while (stack.length > 0) {
    // 获取本次栈顶结点
    const node = stack[stack.length - 1];
    // 设置本次是否有新结点为flase
    is_push = false;
    // 遍历邻接矩阵
    for (let i = 0; i < maze.length; i++) {
      // 是否与node邻接且未访问过
      if (maze[node][i] === 1 && !visited3[i]) {
        is_push = true;
        stack.push(i);
        visited3[i] = true;
        break; //每次只找一个邻接结点
      }
    }
    // 如果本次没有入栈的，说明该结点为没有未访问的邻接结点了，应该返回上一层
    if (!is_push) {
      console.log(stack.pop());
    }
  }
};

const main3 = () => {
  for (let i = 0; i < maze.length; i++) {
    if (visited3[i]) {
      continue;
    }
    dfsWithStack(i);
  }
};
main3();

console.log("------------------");
const visited4 = [];
/**
 * @param {Number} start
 * @description 非递归 栈操作 邻接表
 */
const dfsWithStack2 = (start) => {
  visited4[start] = true;
  // 声明栈
  let stack = [start];
  // 声明是否有新的结点入栈
  let is_push = false;
  while (stack.length > 0) {
    // 获取本次栈顶结点
    const node = stack[stack.length - 1];
    // 设置本次是否有新结点为flase
    is_push = false;
    // 遍历邻接矩阵
    for (let i = 0; i < adList[node].length; i++) {
      // 是否与node邻接且未访问过
      if (!visited4[adList[node][i]]) {
        is_push = true;
        stack.push(adList[node][i]);
        visited4[adList[node][i]] = true;
        break; //每次只找一个邻接结点
      }
    }
    // 如果本次没有入栈的，说明该结点为没有未访问的邻接结点了，应该返回上一层
    if (!is_push) {
      console.log(stack.pop());
    }
  }
};

const main4 = () => {
  for (let i = 0; i < maze.length; i++) {
    if (visited4[i]) {
      continue;
    }
    dfsWithStack2(i);
  }
};
main4();

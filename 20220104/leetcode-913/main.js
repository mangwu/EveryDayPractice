/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-04 16:11:08                                                  *
 * @LastModifiedDate: 2022-01-04 20:19:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 两位玩家分别扮演猫和老鼠，在一张 无向 图上进行游戏，两人轮流行动。

// 图的形式是：graph[a] 是一个列表，由满足 ab 是图中的一条边的所有节点 b 组成。

// 老鼠从节点 1 开始，第一个出发；猫从节点 2 开始，第二个出发。在节点 0 处有一个洞。

// 在每个玩家的行动中，他们 必须 沿着图中与所在当前位置连通的一条边移动。例如，如果老鼠在节点 1 ，那么它必须移动到 graph[1] 中的任一节点。

// 此外，猫无法移动到洞中（节点 0）。

// 然后，游戏在出现以下三种情形之一时结束：

// 如果猫和老鼠出现在同一个节点，猫获胜。
// 如果老鼠到达洞中，老鼠获胜。
// 如果某一位置重复出现（即，玩家的位置和移动顺序都与上一次行动相同），游戏平局。
// 给你一张图 graph ，并假设两位玩家都都以最佳状态参与游戏：

// 如果老鼠获胜，则返回 1；
// 如果猫获胜，则返回 2；
// 如果平局，则返回 0 。

/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function (graph) {
  // 1. 图的深度优先遍历算法
  // 2. 老鼠从1开始出发，选择一个邻接结点
  // 3. 猫从2开始出发，选择一个邻接结点
  // 4. 老鼠选择的邻接结点有两个条件：该邻接结点位置不在猫结点的旁边，该结点为距离0节点最近的结点
  // 5. 猫选择结点的条件：该结点不能是0，该结点距离在保证尽量不远离0节点的情况下距离老鼠所在节点最近
  // 声明保存老鼠走过的节点
  const mouseVisited = [];
  // 声明猫走过的节点
  const catVisited = [];
  // 初始化走过的节点
  mouseVisited[1] = true;
  catVisited[2] = true;
  // 位置初始化
  let mouse = 1;
  let cat = 2;
  let mouseRoad = null;
  // 声明步数，偶数表示老鼠走，奇数表示猫走
  let step = 0;
  // 最多走graph的步数
  while (step <= graph.length * 2) {
    // 老鼠先走
    if (step % 2 === 0) {
      // 查找最近的邻接节点，且该节点不在猫节点的邻接，如果没有那就退出循环，返回猫获胜的数2
      const mouseNeighbor = graph[mouse];
      const catNeighbor = graph[cat];
      // 可进入节点
      const isMouseNeighbor = [];
      for (let mn of mouseNeighbor) {
        if (mn === 0) {
          // 老鼠获胜
          return 1;
        }
        // 获取可选的邻接节点
        if (!catNeighbor.includes(mn)) {
          isMouseNeighbor.push(mn);
        }
      }
      if (isMouseNeighbor.length === 0) {
        // 无可选 直接猫获胜
        return 2;
      }
      const newGraph = graph.slice()
      newGraph[mouse] = isMouseNeighbor;
      // 获取最佳路径
      let minRoad = dfsWithStack(mouse, 0, newGraph);
      // console.log(minRoad, mouse, newGraph, isMouseNeighbor);
      if (minRoad === null) {
        // 无路可达0径，直接返回2猫获胜
        return 2;
      } else {
        console.log(minRoad);
        mouse = minRoad[1];
        mouseRoad = minRoad;
      }
      // 如果走过了就返回0（平局）
      if (mouseVisited[mouse]) {
        return 0;
      } else {
        mouseVisited[mouse] = true;
      }
    } else {
      // 猫的步数
      let minRoad = dfsWithStack(cat, mouse, graph, mouseRoad);
      console.log(minRoad);
      if (minRoad === null) {
        // 无路径可达 老鼠获胜
        return 1;
      } else {
        cat = minRoad[1];
      }
      // 如果走过了就返回0
      if (catVisited[cat]) {
        return 0;
      } else {
        catVisited[cat] = true;
      }
    }
    step++;
  }
};
// dfs算法
const dfsWithStack = (start, finish, graph, cat = false) => {
  let ans = null;
  let len = Number.MAX_VALUE;
  const visited = [];
  visited[start] = true;
  if (cat) {
    visited[0] = true;
  }
  // 栈
  const stack = [];
  // 入栈
  stack.push(start);
  // 栈不为空时遍历
  while (stack.length > 0) {
    // 获取栈顶结点
    let node = stack[stack.length - 1];
    // 结点本次是否为新结点
    is_push = false;
    for (let i = 0; i < graph[node].length; i++) {
      //是否与node邻接且未访问过
      if (!visited[graph[node][i]]) {
        stack.push(graph[node][i]);
        // 设置为true
        visited[graph[node][i]] = true;
        // 新结点入栈
        is_push = true;
        if (graph[node][i] === finish && stack.length < len) {
          ans = stack.slice();
          len = stack.length;
          visited[finish] = false;
        }

        if (graph[node][i] === finish && stack.length === len && cat) {
          if (stack.includes[cat[1]]) {
            ans = stack.slice();
          }
        }
        break;
      }
    }
    if (!is_push) {
      // 该结点没有未访问的邻接结点，返回上一层
      stack.pop();
    }
  }
  return ans;
};

console.log(catMouseGame([[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]))
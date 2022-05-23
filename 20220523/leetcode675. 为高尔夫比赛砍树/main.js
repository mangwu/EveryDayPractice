/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-23 09:10:37                                                  *
 * @LastModifiedDate: 2022-05-23 11:30:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你被请来给一个要举办高尔夫比赛的树林砍树。树林由一个 m x n 的矩阵表示， 在这个矩阵中：

// 0 表示障碍，无法触碰
// 1 表示地面，可以行走
// 比 1 大的数 表示有树的单元格，可以行走，数值表示树的高度
// 每一步，你都可以向上、下、左、右四个方向之一移动一个单位，如果你站的地方有一棵树，那么你可以决定是否要砍倒它。

// 你需要按照树的高度从低向高砍掉所有的树，每砍过一颗树，该单元格的值变为 1（即变为地面）。

// 你将从 (0, 0) 点开始工作，返回你砍完所有树需要走的最小步数。 如果你无法砍完所有的树，返回 -1 。

// 可以保证的是，没有两棵树的高度是相同的，并且你至少需要砍倒一棵树。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
  const m = forest.length;
  const n = forest[0].length;
  // 获取每一棵树的高度
  const heights = [];
  const visited = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 1) {
        heights.push(forest[i][j]);
      } else if (forest[i][j] == 0) {
        visited[i * n + j] = true;
      }
    }
  }
  heights.sort((a, b) => a - b);
  let trees = heights.length;
  let ans = 0;
  // dfs 查找的treeIdx
  const dfs = (start, treeIdx) => {
    if (treeIdx == trees) {
      // 结束遍历
      return;
    }
    if (heights[treeIdx] == forest[start[0]][start[1]]) {
      dfs(start, treeIdx + 1);
      return;
      // 不需要再遍历后面
    }
    // 开始bfs
    const newVisited = visited.slice();
    newVisited[start[0] * n + start[1]] = true;
    let pathLen = 0;
    let queue = [start];
    let findIt = false;
    let newStart = null;
    while (queue.length > 0) {
      const nxt = [];
      for (const q of queue) {
        if (forest[q[0]][q[1]] == heights[treeIdx]) {
          findIt = true;
          newStart = q;
          break;
        }
        for (const dir of DIRS) {
          const x = q[0] + dir[0];
          const y = q[1] + dir[1];
          if (x >= 0 && x < m && y >= 0 && y < n && !newVisited[x * n + y]) {
            nxt.push([x, y]);
            newVisited[x * n + y] = true;
          }
        }
      }
      if (findIt) {
        break;
      }
      queue = nxt;
      pathLen++;
    }
    if (findIt) {
      // 寻找下一个
      ans += pathLen;
      dfs(newStart, treeIdx + 1);
    } else {
      // 直接退出递归
      ans = -1;
    }
  };
  dfs([0, 0], 0);
  return ans;
};

//
// [[1,4,6,8,5],
// [1,7,9,3,2]]
// 5 1 3 3 2 2 3 2
//
// 没有两棵树的高度是相同的
[
  [4, 3, 4],
  [0, 0, 5],
  [8, 7, 6],
];

[
  [1, 4, 6, 8, 5],
  [1, 7, 9, 3, 2],
];

//
[
  [2, 3, 4],
  [0, 0, 5],
  [8, 7, 6],
];

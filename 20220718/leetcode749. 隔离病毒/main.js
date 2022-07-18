/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-18 08:47:34                                                  *
 * @LastModifiedDate: 2022-07-18 10:27:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 病毒扩散得很快，现在你的任务是尽可能地通过安装防火墙来隔离病毒。

// 假设世界由 m x n 的二维矩阵 isInfected 组成， isInfected[i][j] == 0 表示该区域未感染病毒，
// 而  isInfected[i][j] == 1 表示该区域已感染病毒。
// 可以在任意 2 个相邻单元之间的共享边界上安装一个防火墙（并且只有一个防火墙）。

// 每天晚上，病毒会从被感染区域向相邻未感染区域扩散，除非被防火墙隔离。现由于资源有限，
// 每天你只能安装一系列防火墙来隔离其中一个被病毒感染的区域（一个区域或连续的一片区域），
// 该感染区域对未感染区域的威胁最大且 保证唯一 。

// 你需要努力使得最后有部分区域不被病毒感染，如果可以成功，那么返回需要使用的防火墙个数;
// 如果无法实现，则返回在世界被病毒全部感染时已安装的防火墙个数。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function (isInfected) {
  const m = isInfected.length;
  const n = isInfected[0].length;
  const visited = [];
  let virusArea = [];
  // 计算出每个病毒区域
  const dfs = (i, j, cur, visited) => {
    cur.push([i, j]);
    for (const dir of DIRS) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (
        x >= 0 &&
        x < m &&
        y >= 0 &&
        y < n &&
        isInfected[x][y] &&
        !visited[x * n + y]
      ) {
        visited[x * n + y] = true;
        dfs(x, y, cur, visited);
      }
    }
  };
  // 遍历isInfected
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isInfected[i][j] && !visited[i * n + j]) {
        visited[i * n + j] = true;
        const cur = [];
        dfs(i, j, cur, visited);
        virusArea.push(cur);
      }
    }
  }
  // 用于表示感染区域
  let idx = 2;
  let ans = 0;
  const newVisited = [];
  // 遍历virusArea
  while (virusArea.length > 0) {
    let spreadMaxBorder = 0;
    let spreadMaxCell = [];
    let spreadMaxIdx = -1;
    const allCell = [];
    for (let i = 0; i < virusArea.length; i++) {
      // 计算边界与感染地方
      let curBorder = 0;
      let curCell = [];
      for (const a of virusArea[i]) {
        console.log(virusArea[i]);
        for (const dir of DIRS) {
          const x = dir[0] + a[0];
          const y = dir[1] + a[1];
          if (x >= 0 && y >= 0 && x < m && y < n) {
            // 重复感染区域需要计算边界值
            if (isInfected[x][y] == idx) {
              curBorder++;
            } else if (isInfected[x][y] == 0) {
              // 新感染区域需要计算边界值和感染单元
              curBorder++;
              curCell.push([x, y]);
              isInfected[x][y] = idx;
            }
          }
        }
      }
      // 回溯
      for (const c of curCell) {
        isInfected[c[0]][c[1]] = 0;
      }
      allCell.push(curCell);
      virusArea[i] = virusArea[i].concat(curCell);
      if (curCell.length > spreadMaxCell.length) {
        spreadMaxBorder = curBorder;
        spreadMaxIdx = i;
        spreadMaxCell = curCell;
      }
    }
    // 将最大传染单元格子进行封控
    ans += spreadMaxBorder;
    for (const a of virusArea[spreadMaxIdx]) {
      newVisited[a[0] * n + a[1]] = true;
    }
    // 删除allCell中无效的一部分
    allCell.splice(spreadMaxIdx, 1);
    for (const ac of allCell) {
      for (const a of ac) {
        isInfected[a[0]][a[1]] = idx;
      }
    }
    idx++;
    // 删除这一区域
    virusArea.splice(spreadMaxIdx, 1);
    const nesVirusArea = [];
    const newVisited2 = newVisited.slice();
    // 计算出每个病毒区域
    // 将现有区域进行dfs遍历
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (isInfected[i][j] && !newVisited2[i * n + j]) {
          newVisited2[i * n + j] = true;
          const cur = [];
          dfs(i, j, cur, newVisited2);
          nesVirusArea.push(cur);
        }
      }
    }
    virusArea = nesVirusArea;
    console.log(virusArea);
  }
  return ans;
};

[
  [0, 0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
[
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
];

// 5 +

[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

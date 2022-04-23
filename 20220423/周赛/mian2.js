/*
 * @Author: mangwu                                                             *
 * @File: mian2.js                                                             *
 * @Date: 2022-04-23 15:14:23                                                  *
 * @LastModifiedDate: 2022-04-23 15:55:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 欢迎各位勇者来到力扣城，本次试炼主题为「信物传送」。

// 本次试炼场地设有若干传送带，matrix[i][j] 表示第 i 行 j 列的传送带运作方向，
// "^","v","<",">" 这四种符号分别表示 上、下、左、右 四个方向。信物会随传送带的方向移动。
// 勇者每一次施法操作，可临时变更一处传送带的方向，在物品经过后传送带恢复原方向。
// 通关信物初始位于坐标 start处，勇者需要将其移动到坐标 end 处，请返回勇者施法操作的最少次数。

// 注意：

// start 和 end 的格式均为 [i,j]
// 示例 1:

// 输入：matrix = [">>v","v^<","<><"], start = [0,1], end = [2,0]

// 输出：1

// 解释：
// 如上图所示
// 当信物移动到 [1,1] 时，勇者施法一次将 [1,1] 的传送方向 ^ 从变更为 <
// 从而信物移动到 [1,0]，后续到达 end 位置
// 因此勇者最少需要施法操作 1 次

const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];
const ARROWS = {
  0: {
    1: ">",
    "-1": "<",
  },
  1: {
    0: "v",
  },
  "-1": {
    0: "^",
  },
};
/**
 * @param {string[]} matrix
 * @param {number[]} start
 * @param {number[]} end
 * @return {number}
 */
var conveyorBelt = function (matrix, start, end) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (start[0] == end[0] && start[1] == end[1]) {
    return 0;
  }
  let ans = Infinity;
  const visited = [];
  const dfs = (start, end, ops) => {
    if (
      start[0] < 0 ||
      start[1] < 0 ||
      start[0] >= m ||
      start[1] >= n ||
      visited[start[0] * n + start[1]] ||
      ops >= ans
    ) {
      return;
    }

    if (start[0] == end[0] && start[1] == end[1]) {
      ans = Math.min(ans, ops);
      return;
    }
    for (const dir of DIRS) {
      const x = dir[0] + start[0];
      const y = dir[1] + start[1];
      let newOps = ops;
      if (ARROWS[dir[0]][dir[1]] !== matrix[start[0]][start[1]]) {
        newOps++;
      }
      visited[start[0] * n + start[1]] = true;
      dfs([x, y], end, newOps);
      visited[start[0] * n + start[1]] = false;
    }
  };
  dfs(start, end, 0);
  return ans;
};


// dfs解法正确但是时间复杂度过高
// 现有一个下标从 1 开始的 8 x 8 棋盘，上面有 3 枚棋子。

// 给你 6 个整数 a 、b 、c 、d 、e 和 f ，其中：

// (a, b) 表示白色车的位置。
// (c, d) 表示白色象的位置。
// (e, f) 表示黑皇后的位置。
// 假定你只能移动白色棋子，返回捕获黑皇后所需的最少移动次数。

// 请注意：

// 车可以向垂直或水平方向移动任意数量的格子，但不能跳过其他棋子。
// 象可以沿对角线方向移动任意数量的格子，但不能跳过其他棋子。
// 如果车或象能移向皇后所在的格子，则认为它们可以捕获皇后。
// 皇后不能移动。
const dirs1 = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
const dirs2 = [
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
  // 判断车[a,b]能否直接到达皇后位置[e,f]
  // 判断象[c,d]能否直接到达皇后的位置[e,f]
  let x = a;
  let y = b;
  for (const dir of dirs1) {
    while (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
      if (x === c && y === d) break;
      if (x === e && y === f) return 1;
      x += dir[0];
      y += dir[1];
    }
    x = a;
    y = b;
  }
  x = c;
  y = d;
  for (const dir of dirs2) {
    while (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
      if (x === a && y === b) break;
      if (x === e && y === f) return 1;
      x += dir[0];
      y += dir[1];
    }
    x = c;
    y = d;
  }
  return 2;
};

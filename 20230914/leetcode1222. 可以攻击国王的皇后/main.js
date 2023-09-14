// 在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。

// 给定一个由整数坐标组成的数组 queens ，表示黑皇后的位置；以及一对坐标 king ，表示白国王的位置，返回所有可以攻击国王的皇后的坐标(任意顺序)。
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [1, 0],
  [-1, 0],
  [-1, -1],
];
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  const ans = [];
  const queue = new Array(8).fill(0).map(() => king.slice());
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 8; j++) {
      if (queue[j]) {
        queue[j][0] += DIRS[j][0];
        queue[j][1] += DIRS[j][1];
        const [x, y] = queue[j];
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
          if (queens.findIndex((v) => v[0] === x && v[1] === y) !== -1) {
            ans.push([x, y]);
            queue[j] = false;
          }
        } else {
          queue[j] = false;
        }
      }
    }
  }
  return ans;
};

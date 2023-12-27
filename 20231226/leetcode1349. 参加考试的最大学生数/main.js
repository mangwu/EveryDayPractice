// 给你一个 m * n 的矩阵 seats 表示教室中的座位分布。如果座位是坏的（不可用），就用 '#' 表示；否则，用 '.' 表示。

// 学生可以看到左侧、右侧、左上、右上这四个方向上紧邻他的学生的答卷，但是看不到直接坐在他前面或者后面的学生的答卷。请你计算并返回该考场可以容纳的同时参加考试且无法作弊的 最大 学生人数。

// 学生必须坐在状况良好的座位上。

const DIRS = [
  [0, 0],
  [0, 1],
  [0, -1],
  [-1, 1],
  [-1, -1],
  [1, 1],
  [1, -1],
];
/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (seats) {
  const m = seats.length;
  const n = seats[0].length;
  const visited = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  // 记录选择节点的数量
  let num = 0;
  const seatsArr = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (seats[i][j] === ".") {
        seatsArr.push([i, j]);
      }
    }
  }
  let res = 0;
  let flag = false;
  // dfs暴力解法
  const dfs = (idx) => {
    if (idx === seatsArr.length) {
      // console.log(nums, visited);
      res = Math.max(res, num);
      if (res >= Math.ceil(n / 2) * m) {
        flag = true;
      }
      return;
    }
    // 如果已经找到最大值可以直接返回了
    if (flag) return;
    // 查看能否选择当前节点
    const [i, j] = seatsArr[idx];
    if (isValid(i, j)) {
      // 合法，可以选择当前节点
      num++;
      visited[i][j] = 1;
      dfs(idx + 1);
      num--;
      visited[i][j] = 0;
    }
    // 无论合法与否都可以不选择当前节点
    // 减枝，如果当前res比剩下的全选都打可以不用遍历了
    if (res >= num + seatsArr.length - idx - 1) return;
    dfs(idx + 1);
  };
  function isValid(i, j) {
    for (const dir of DIRS) {
      const [x, y] = [i + dir[0], j + dir[1]];
      if (x >= 0 && x < m && y >= 0 && y < n) {
        if (visited[x][y]) return false;
      }
    }
    return true;
  }
  dfs(0);
  return res;
};

[
  ["#", ".", ".", ".", "#", ".", ".", "."],
  [".", "#", ".", "#", ".", ".", ".", "."],
  [".", ".", "#", ".", ".", ".", ".", "."],
  [".", "#", ".", "#", ".", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
];

maxStudents([
  ["#", ".", "#", ".", "#", "#", ".", "#"],
  [".", "#", ".", "#", ".", ".", "#", "."],
  [".", ".", "#", ".", "#", "#", ".", "."],
  [".", "#", ".", "#", ".", ".", "#", "."],
  ["#", "#", ".", ".", "#", ".", ".", "#"],
  ["#", ".", "#", ".", "#", "#", "#", "."],
  ["#", "#", "#", "#", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", "#", ".", "#"],
]);
maxStudents([
  ["#", ".", ".", ".", "#", ".", ".", "."],
  [".", "#", ".", "#", ".", ".", ".", "."],
  [".", ".", "#", ".", ".", ".", ".", "."],
  [".", "#", ".", "#", ".", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", "."],
]);
maxStudents([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", "#", ".", ".", ".", ".", ".", "."],
  [".", ".", "#", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "#", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "#", ".", "."],
  [".", "#", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
]);
maxStudents(new Array(8).fill(".").map((_v) => new Array(8).fill(".")));
// 上述暴力解答的答案没问题，但是时间复杂度会超过要求(即使已经减枝)
// 时间复杂度为O(2 ^ (m * n))

// 使用状态压缩加记忆化动态规划可以解决此问题

/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (seats) {
  const m = seats.length;
  const n = seats[0].length;
  // dp[row][mask] 表示第row排，落座情况为mask的情况，
  // mask是一个压缩的状态值，每位表示落座情况
  // dp[row][mask]的值表示第row排及其之前所有座位能够容纳最多的学生数
  // 本函数的最终结果就是dp[m-1][mask]的最大值
  // 需要注意，如果mask所表示的落座情况不能出现则值为-Inifinity
  function isSingleValid(mask, row) {
    // 判断单行落座情况是否合理
    // 不能出现落座位置是#的情况，不能出现相邻位都落座的情况
    for (let j = 0; j < n; j++) {
      if ((mask >> j) & 1) {
        if (seats[row][j] === "#") return false; // 落座#
        if (j > 0 && (mask >> (j - 1)) & 1) return false; // 相邻的也落座了
      }
    }
    return true;
  }
  function isCrossValid(mask, preMask) {
    // 判断上下两行落座情况是否合理
    // preMask不一定通过了单行校验，但是这不影响，
    // 因为dp[preRow][preMask]是的值为-Infinity
    for (let j = 0; j < n; j++) {
      if ((mask >> j) & 1) {
        if (j > 0 && (preMask >> (j - 1)) & 1) return false;
        if (j < n - 1 && (preMask >> (j + 1)) & 1) return false;
      }
    }
    return true;
  }
  function bitCount(mask) {
    // mask中的落座数量计算
    let count = 0;
    for (let j = 0; j < n; j++) if ((mask >> j) & 1) count++;
    return count;
  }
  const maxMask = 2 ** n;
  const dp = new Array(m).fill(0).map(() => new Array(maxMask).fill(-1));
  const dfs = (row, mask) => {
    if (dp[row][mask] === -1) {
      // 计算当前行的落座最大值
      if (!isSingleValid(mask, row)) {
        dp[row][mask] = -Infinity;
      } else if (row === 0) {
        // 第0行的情况，直接返回mask中1的数量
        dp[row][mask] = bitCount(mask);
      } else {
        // 遍历上一行的各种落座情况
        let mx = 0;
        for (let preMask = 0; preMask < maxMask; preMask++) {
          if (isCrossValid(mask, preMask)) {
            mx = Math.max(mx, dfs(row - 1, preMask));
          }
        }
        dp[row][mask] = mx + bitCount(mask);
      }
    }
    return dp[row][mask];
  };
  // 遍历解决最后一行的所有落座情况
  let res = 0;
  for (let mask = 0; mask < maxMask; mask++) {
    res = Math.max(res, dfs(m - 1, mask));
  }
  return res;
};

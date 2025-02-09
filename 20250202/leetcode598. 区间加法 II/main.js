// 给你一个 m x n 的矩阵 M 和一个操作数组 op 。矩阵初始化时所有的单元格都为 0 。ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。

// 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  // 最大整数是ops中x,y的最小交集
  let minX = m;
  let minY = n;
  for (const [x, y] of ops) {
    minX = Math.min(x, minX);
    minY = Math.min(y, minY);
  }
  return minX * minY;
};

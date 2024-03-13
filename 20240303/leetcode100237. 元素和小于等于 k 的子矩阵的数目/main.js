// 给你一个下标从 0 开始的整数矩阵 grid 和一个整数 k。

// 返回包含 grid 左上角元素、元素和小于或等于 k 的 子矩阵 的数目。

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;
  const preffixs = new Array(m).fill(0).map(() => [0]);
  for (let i = 0; i < m; i++) {
    const curPre = preffixs[i];
    for (let j = 0; j < n; j++) {
      curPre[j + 1] = curPre[j] + grid[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    let cur = preffixs[0][i + 1];
    if (cur <= k) ans++;
    else break;
    for (let j = 1; j < m; j++) {
      cur += preffixs[j][i + 1];
      if (cur <= k) ans++;
      else break;
    }
  }
  return ans;
};

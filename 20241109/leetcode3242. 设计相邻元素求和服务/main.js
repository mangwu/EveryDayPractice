// 给你一个 n x n 的二维数组 grid，它包含范围 [0, n2 - 1] 内的不重复元素。

// 实现 neighborSum 类：

// neighborSum(int [][]grid) 初始化对象。
// int adjacentSum(int value) 返回在 grid 中与 value 相邻的元素之和，相邻指的是与 value 在上、左、右或下的元素。
// int diagonalSum(int value) 返回在 grid 中与 value 对角线相邻的元素之和，对角线相邻指的是与 value 在左上、右上、左下或右下的元素。

/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  this.data = [];
  this.grid = grid;
  for (const items of grid) for (const item of items) this.data.push(item);
  this.n = grid.length;
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  const idx = this.data.indexOf(value);
  const x = Math.floor(idx / this.n);
  const y = idx % this.n;
  let res = 0;
  if (x > 0) res += this.grid[x - 1][y];
  if (x < this.n - 1) res += this.grid[x + 1][y];
  if (y > 0) res += this.grid[x][y - 1];
  if (y < this.n - 1) res += this.grid[x][y + 1];
  return res;
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  const idx = this.data.indexOf(value);
  const x = Math.floor(idx / this.n);
  const y = idx % this.n;
  let res = 0;
  if (x > 0 && y > 0) res += this.grid[x - 1][y - 1];
  if (x > 0 && y < this.n - 1) res += this.grid[x - 1][y + 1];
  if (x < this.n - 1 && y > 0) res += this.grid[x + 1][y - 1];
  if (x < this.n - 1 && y < this.n - 1) res += this.grid[x + 1][y + 1];
  return res;
};

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */

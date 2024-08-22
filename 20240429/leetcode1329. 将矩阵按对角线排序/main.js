// 矩阵对角线 是一条从矩阵最上面行或者最左侧列中的某个元素开始的对角线，沿右下方向一直到矩阵末尾的元素。例如，矩阵 mat 有 6 行 3 列，从 mat[2][0] 开始的 矩阵对角线 将会经过 mat[2][0]、mat[3][1] 和 mat[4][2] 。

// 给你一个 m * n 的整数矩阵 mat ，请你将同一条 矩阵对角线 上的元素按升序排序后，返回排好序的矩阵。

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const res = new Array(m + n - 1).fill(0).map((v) => new Array(0));
  for (let i = 0; i < m + n - 1; i++) {
    let x = i < m ? m - i - 1 : 0;
    let y = i < m ? 0 : i - m + 1;
    const nums = res[i];
    while (x >= 0 && x < m && y >= 0 && y < n) {
      nums.push(mat[x++][y++]);
    }
    nums.sort((a, b) => a - b);
    x--;
    y--;
    while (x >= 0 && x < m && y >= 0 && y < n) {
      mat[x--][y--] = nums.pop();
    }
  }
  return mat;
};

// m = 3 ,n = 4
// [2,0]
// [1,0]
// [0,0]
// [0,1]
// [0,2]
// [0,3]
// [0,4]

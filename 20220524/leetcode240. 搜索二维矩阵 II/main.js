// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 搜选第一列，找出target，或者第一个比target大的元素
  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = n;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (matrix[0][mid] == target) {
      return true;
    } else if (matrix[0][mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  // 在left - 1列进行查找
  while (left - 1 >= 0) {
    let l = 0;
    let r = m;
    while (l < r) {
      let mid = (l + r) >> 1;
      if (matrix[mid][left - 1] == target) {
        return true;
      } else if (matrix[mid][left - 1] > target) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    left--;
  }
  return false;
};

// [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [6, 7, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];

// 6

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Z字形搜索
  // start在右上角， 当前为[x, y], 搜索区域为[x, m - x] [0,y](以当前元素为右上角)
  // 由矩阵的每行每列增减特性可以知道
  // 如果target > matrix[x][y] 说明当前列都是大于target的，所以将y自减
  // 如果target < matrix[x][y] 说明当前行都是小于target的，所以将自增
  // 如果[x,y]超出矩阵边界，那么没有结果
  const m = matrix.length;
  const n = matrix[0].length;
  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    if (target == matrix[x][y]) {
      return true;
    } else if (target > matrix[x][y]) {
      // 当前行都比target小
      x++;
    } else {
      y--;
      // 当前列都比target大
    }
  }
  return false;
};

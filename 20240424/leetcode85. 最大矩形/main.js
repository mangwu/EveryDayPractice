// 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  // 前缀和
  const rowPreffix = new Array(m).fill(-1).map((v) => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowPreffix[i][j + 1] = rowPreffix[i][j] + parseInt(matrix[i][j]);
    }
  }
  let ans = 0;
  const binarySearch = (row, start) => {
    const arr = rowPreffix[row];
    let left = start;
    let right = n - 1;
    // [start, mid]的和值
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (mid - start + 1 === arr[mid + 1] - arr[start]) {
        left = mid + 1;
      } else right = mid - 1;
    }
    return right - start + 1;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        let width = binarySearch(i, j);
        let res = width;
        for (let k = i + 1; k < m; k++) {
          if (matrix[k][j]) {
            width = Math.min(width, binarySearch(k, j));
            res = Math.max(res, width * (k - i + 1));
          } else break;
        }
        ans = Math.max(ans, res);
      }
    }
  }
  return ans;
};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  // 如果 matrix[i][j] 是 "1"，那么以它为矩形的右下角，需要计算它左边1的个数
  // 然后向上遍历，matrix[k][j] (k >= 0 && k < i)，同样需要计算它左边1的个数
  // 这样就是leetcode84题一样了
  const leftArr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        leftArr[i][j] = (j > 0 ? leftArr[i][j - 1] : 0) + 1;
      }
    }
  }
  let ans = 0;
  for (let j = 0; j < n; j++) {
    const nums = [];
    for (let i = 0; i < m; i++) {
      nums.push(leftArr[i][j]);
    }
    ans = Math.max(ans, largestRectangleArea(nums));
  }
  return ans;
};

/**
 * @description
 * @param {number[]} nums
 * @returns {number}
 */
var largestRectangleArea = function (nums) {
  const n = nums.length;
  const stack = [];
  const leftLess = new Array(n).fill(-1);
  const rightLess = new Array(n).fill(n);
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
      rightLess[stack.pop()] = i;
    }
    if (stack.length) leftLess[i] = stack[stack.length - 1];
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const left = leftLess[i] + 1;
    const right = rightLess[i] - 1;
    ans = Math.max(ans, (right - left + 1) * nums[i]);
  }
  return ans;
};

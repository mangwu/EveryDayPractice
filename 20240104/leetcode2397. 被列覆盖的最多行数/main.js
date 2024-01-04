// 给你一个下标从 0 开始、大小为 m x n 的二进制矩阵 matrix ；另给你一个整数 numSelect，表示你必须从 matrix 中选择的 不同 列的数量。

// 如果一行中所有的 1 都被你选中的列所覆盖，则认为这一行被 覆盖 了。

// 形式上，假设 s = {c1, c2, ...., cnumSelect} 是你选择的列的集合。对于矩阵中的某一行 row ，如果满足下述条件，则认为这一行被集合 s 覆盖：

// 对于满足 matrix[row][col] == 1 的每个单元格 matrix[row][col]（0 <= col <= n - 1），col 均存在于 s 中，或者
// row 中 不存在 值为 1 的单元格。
// 你需要从矩阵中选出 numSelect 个列，使集合覆盖的行数最大化。

// 返回一个整数，表示可以由 numSelect 列构成的集合 覆盖 的 最大行数 。

/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function (matrix, numSelect) {
  // 选择一些列，使得每行都是0的的行最多的列选取法，返回这种情况下的覆盖最大行数
  // C12 6 = A12 6 / A6 6
  const m = matrix.length;
  const n = matrix[0].length;
  let ans = 0;
  matrix = matrix.map((v) => {
    let cur = 0;
    for (let i = 0; i < n; i++) {
      if (v[i] === 1) {
        cur += 2 ** (n - i - 1);
      }
    }
    return cur;
  });
  const max = 1 << n;
  for (let i = 0; i < max; i++) {
    if (getBitCount(i) === n - numSelect) {
      // numSelect个0， n - numSelect个1
      let cur = matrix.reduce((pre, cur) => ((cur & i) === 0 ? ++pre : pre), 0);
      ans = Math.max(ans, cur);
    }
  }
  return ans;
};

/**
 * @description 数字中1的个数
 * @param {number} num
 * @returns {number}
 */
function getBitCount(num) {
  let res = 0;
  while (num) {
    if ((num & 1) === 1) res++;
    num = num >> 1;
  }
  return res;
}

const countOnes = function (n) {
  let res = 0;
  while (n) {
    n &= n - 1;
    res++;
  }
  return res;
};

const bitLength = function (n) {
  let res = 0;
  while (n) {
    n >>= 1;
    res++;
  }
  return res;
};

const countTrailingZeros = function (n) {
  return bitLength(n & -n) - 1;
};

// cur = ...0111
// lb = cur & -cur =  1
// r = cur + lb = ...1000
// m = r ^ cur = 000..1111
// k = m >> 2= 000011
// cur = k | r = 11 | ...1000 = ...1011

// 使用Gosper's Hack算法优化题解

/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function (matrix, numSelect) {
  // 选择一些列，使得每行都是0的的行最多的列选取法，返回这种情况下的覆盖最大行数
  // C12 6 = A12 6 / A6 6
  const m = matrix.length;
  const n = matrix[0].length;
  let ans = 0;
  matrix = matrix.map((v) => {
    let cur = 0;
    for (let i = 0; i < n; i++) {
      if (v[i] === 1) {
        cur += 2 ** (n - i - 1);
      }
    }
    return cur;
  });
  const max = 1 << n;
  let cur = (1 << (n - numSelect)) - 1;
  if (cur === 0) return m;
  while (cur < max) {
    ans = Math.max(
      ans,
      matrix.reduce((a, b) => ((b & cur) === 0 ? ++a : a), 0)
    );
    let lb = cur & -cur;
    let r = cur + lb;
    cur = ((r ^ cur) >> (countTrailingZeros(lb) + 2)) | r;
  }
  return ans;
};
maximumRows([[1], [0]], 1);

function GospersHack(k, n, callback = (cur) => {}) {
  let cur = (1 << k) - 1;
  const limit = 1 << n;
  while (cur < limit) {
    callback(cur); // dosomething
    const lb = cur & -cur;
    const r = cur + lb;
    cur = ((r ^ cur) >> (countTrailingZeros(lb) + 2)) | r;
  }
}
GospersHack(3, 5, (cur) => console.log(cur.toString(2)));

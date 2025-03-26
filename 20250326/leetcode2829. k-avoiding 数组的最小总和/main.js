// 给你两个整数 n 和 k 。

// 对于一个由 不同 正整数组成的数组，如果其中不存在任何求和等于 k 的不同元素对，则称其为 k-avoiding 数组。

// 返回长度为 n 的 k-avoiding 数组的可能的最小总和。

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
  const half = Math.floor(k / 2);
  if (n <= half) return (n * (1 + n)) / 2;
  let res = (half * (1 + half)) / 2;
  n -= half;
  res += ((k - 1 + k + n) * n) / 2;
  return res;
};

// 1 2
// 5 6 7

// 给你一个二维整数数组 ranges ，其中 ranges[i] = [starti, endi] 表示 starti 到 endi 之间（包括二者）的所有整数都包含在第 i 个区间中。

// 你需要将 ranges 分成 两个 组（可以为空），满足：

// 每个区间只属于一个组。
// 两个有 交集 的区间必须在 同一个 组内。
// 如果两个区间有至少 一个 公共整数，那么这两个区间是 有交集 的。

// 比方说，区间 [1, 3] 和 [2, 5] 有交集，因为 2 和 3 在两个区间中都被包含。
// 请你返回将 ranges 划分成两个组的 总方案数 。由于答案可能很大，将它对 109 + 7 取余 后返回。

/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  // 有交集的区间可以合并成一个区间，当成一个区间看待
  // 有n个区间就会有2**n种分配方式
  ranges.sort((a, b) => (a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1]));
  let pre = ranges[0];
  const n = ranges.length;
  let k = 1;
  for (let i = 1; i < n; i++) {
    const [start, end] = ranges[i];
    if (start <= pre[1]) {
      pre[1] = Math.max(pre[1], end);
    } else {
      k++;
      pre = [start, end];
    }
  }
  return fastPow(2, k, 10n ** 9n + 7n);
};
/**
 * @description 快速幂公式
 * @param {number} base
 * @param {number} n
 * @param {BigInt} mod
 * @returns {BigInt}
 */
function fastPow(base, n, mod) {
  let ans = 1n;
  let a = BigInt(base) % mod;
  n = BigInt(n);
  while (n) {
    if (n % 2n === 1n) {
      ans = (ans * a) % mod;
      n -= 1n;
    }
    a = (a * a) % mod;
    n = n / 2n;
  }
  return ans;
}
// 1 => 2   {1 1} | {2 1}
// 2 => 4   {1 1}  {2 1} | {1 2} | {2 2} | {2 1}  {1 1}
// 3 => 8

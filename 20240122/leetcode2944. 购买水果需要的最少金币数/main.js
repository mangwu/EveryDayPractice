// 你在一个水果超市里，货架上摆满了玲琅满目的奇珍异果。

// 给你一个下标从 1 开始的数组 prices ，其中 prices[i] 表示你购买第 i 个水果需要花费的金币数目。

// 水果超市有如下促销活动：

// 如果你花费 price[i] 购买了水果 i ，那么接下来的 i 个水果你都可以免费获得。
// 注意 ，即使你 可以 免费获得水果 j ，你仍然可以花费 prices[j] 个金币去购买它以便能免费获得接下来的 j 个水果。

// 请你返回获得所有水果所需要的 最少 金币数。

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  const n = prices.length;
  if (n === 1) return prices[0];
  const dp = new Array(n + 1)
    .fill(Infinity)
    .map(() => new Array(2).fill(Infinity));
  dp[1] = [prices[0], prices[0]]; // [x, y]  x是不购买自身的最小值，y是购买自身的最小值
  dp[2] = [prices[0], prices[0] + prices[1]];
  for (let i = 2; i < n; i++) {
    // 第 i + 1个水果的结果
    dp[i + 1][1] = Math.min(dp[i][0], dp[i][1]) + prices[i];
    for (let j = i - 1; (j + 1) * 2 - 1 >= i; j--) {
      dp[i + 1][0] = Math.min(dp[i + 1][0], dp[j + 1][1]);
    }
  }
  return Math.min(dp[n][0], dp[n][1]);
};

// 1 2 3 4 5 6 7 8

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  const n = prices.length;
  // 递归
  const memo = new Array(n + 1).fill(-1);
  const dfs = (i) => {
    // 获取i及其之后的水果需要的最少金币数
    // 第i个水果一定购买，之后的[i+1, 2i]可以免费获取，也可以购买
    // 枚举[i+1, 2i+1]的dfs值
    // 当2i >= n 时，后面的水果无需购买了，可以直接获取
    if (i * 2 >= n) return prices[i - 1];
    if (memo[i] !== -1) return memo[i];
    const res =
      prices[i - 1] +
      Math.min.apply(
        null,
        new Array(i + 1).fill(0).map((_v, j) => dfs(j + i + 1))
      );
    memo[i] = res;
    return res;
  };
  return dfs(1);
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  const n = prices.length;
  // 改为递推，将dfs函数改为f数组
  // 递归改为倒序循环f数组
  // 递归边界改为f数组的初始值
  // 递归入口（答案）改为f数组的第1个值
  // f[i] = prices[i-1] + min(f[j]) j ∈ [i+1, 2i + 1]
  const f = new Array(n + 1)
    .fill(0)
    .map((v, i) => (2 * i >= n ? prices[i - 1] : v));
  for (let i = Math.floor((n - 1) / 2); i >= 1; i--) {
    let res = Infinity;
    for (let j = i + 1; j <= 2 * i + 1; j++) {
      res = Math.min(res, prices[i - 1] + f[j]);
    }
    f[i] = res;
  }
  return f[1];
};

// 上面这个做法在求f[j]的最小值，j ∈ [i+1, 2i + 1]
// 可以使用单调队列的方式求最小值，缩减时间复杂度
/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  const n = prices.length;
  const pq = []; // 单调递增序列
  const f = new Array(n + 1)
    .fill(0)
    .map((v, i) => (2 * i >= n ? prices[i - 1] : v));
  for (let i = n; 2 * i >= n; i--) {
    while (pq.length && f[pq[pq.length - 1]] >= f[i]) pq.pop();
    pq.push(i);
  }

  for (let i = Math.floor((n - 1) / 2); i >= 1; i--) {
    // 出队
    while (pq.length && pq[0] > 2 * i + 1) pq.shift();
    f[i] = prices[i - 1] + f[pq[0]];
    // 入队f[i]
    while (pq.length && f[pq[pq.length - 1]] >= f[i]) pq.pop();
    pq.push(i);
  }
  return f[1];
};
class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    if (value == null) return false;
    this.items[this.lowest--] = value;
    return true;
  }
  enqueueBack(value) {
    if (value == null) return false;
    this.items[this.highest++] = value;
    return true;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}
/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  const n = prices.length;
  const pq = new Dqueue(); // 单调递增序列
  const f = new Array(n + 1)
    .fill(0)
    .map((v, i) => (2 * i >= n ? prices[i - 1] : v));
  for (let i = n; 2 * i >= n; i--) {
    while (!pq.isEmpty() && f[pq.peekBack()] >= f[i]) pq.dequeueBack();
    pq.enqueueBack(i);
  }

  for (let i = Math.floor((n - 1) / 2); i >= 1; i--) {
    // 出队
    while (!pq.isEmpty() && pq.peekFront() > 2 * i + 1) pq.dequeueFront();
    f[i] = prices[i - 1] + f[pq.peekFront()];
    // 入队f[i]
    while (!pq.isEmpty() && f[pq.peekBack()] >= f[i]) pq.dequeueBack();
    pq.enqueueBack(i);
  }
  return f[1];
};

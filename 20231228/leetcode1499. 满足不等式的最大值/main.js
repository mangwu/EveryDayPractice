// 给你一个数组 points 和一个整数 k 。数组中每个元素都表示二维平面上的点的坐标，并按照横坐标 x 的值从小到大排序。也就是说 points[i] = [xi, yi] ，并且在 1 <= i < j <= points.length 的前提下， xi < xj 总成立。

// 请你找出 yi + yj + |xi - xj| 的 最大值，其中 |xi - xj| <= k 且 1 <= i < j <= points.length。

// 题目测试数据保证至少存在一对能够满足 |xi - xj| <= k 的点。

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
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
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
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function (points, k) {
  // x是严格递增的，所以一定能找到一个子数组，该子数组中的任意两个x值之差小于等于k
  // 这一题和leetcode1425带限制的子序列和以及leetcode1438绝对差不超过限制的最长连续子数组类似
  // 区别是要计算的值包含x和y这两种变量，且需要对 yi + yj + |xi - xj|的最大值进行查找
  // 不容易进行简单的单调或优先排序
  // 为此，需要将yi+yj+|xi-xj|进行转换
  // 因为x是严格单调递增的，所以上述式子可以进行如下转换(j > i)
  // yi + yj + xj - xi
  // 对于固定的j，要求出这个式子的最大值，需要保证 yi - xi越大越好
  // 所以，我们在使用单调队列时，比较 每个元素的 yi - xi值即可
  if (k === 0) return 0;
  const dq = new Dqueue();
  dq.enqueueBack(0);
  let res = -Infinity;
  const n = points.length;
  for (let i = 1; i < n; i++) {
    const [xi, yi] = points[i];
    // 出队不符合条件的
    while (!dq.isEmpty() && xi - points[dq.peekFront()][0] > k) {
      dq.dequeueFront();
    }
    if (!dq.isEmpty()) {
      const [xj, yj] = points[dq.peekFront()];
      res = Math.max(res, yi + yj + xi - xj);
    }
    // 入队，保证单调性 yi - xi的单调性
    while (
      !dq.isEmpty() &&
      points[dq.peekFront()][1] - points[dq.peekFront()][0] < yi - xi
    ) {
      dq.dequeueFront();
    }
    dq.enqueueBack(i);
  }
  return res === -Infinity ? 0 : res;
};

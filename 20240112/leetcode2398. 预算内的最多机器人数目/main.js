// 你有 n 个机器人，给你两个下标从 0 开始的整数数组 chargeTimes 和 runningCosts ，两者长度都为 n 。第 i 个机器人充电时间为 chargeTimes[i] 单位时间，花费 runningCosts[i] 单位时间运行。再给你一个整数 budget 。

// 运行 k 个机器人 总开销 是 max(chargeTimes) + k * sum(runningCosts) ，其中 max(chargeTimes) 是这 k 个机器人中最大充电时间，sum(runningCosts) 是这 k 个机器人的运行时间之和。

// 请你返回在 不超过 budget 的前提下，你 最多 可以 连续 运行的机器人数目为多少。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compareFn = compareFn;
  }
  compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]);
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this.swap(0, size - 1);
    const res = this.heap.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  // 二分查找
  const n = chargeTimes.length;
  // 按照runningCosts进行排序
  const indexes = new Array(n).fill(0).map((_, i) => i);
  const oneMin = Math.min.apply(
    null,
    indexes.map((_, i) => chargeTimes[i] + runningCosts[i])
  );
  if (budget < oneMin) return 0;
  indexes.sort((a, b) => runningCosts[a] - runningCosts[b]);
  const costs = runningCosts.slice().sort((a, b) => a - b);
  const times = new Array(n).fill(0).map((_, i) => chargeTimes[indexes[i]]);
  let left = 0;
  let right = n;
  // 如果要选择num个机器人，它需要花费的最少开销如何计算
  const check = (num) => {
    if (num <= 1) return true;
    const pq = new PQ((a, b) => times[b] - times[a]);
    let curBudget = 0;
    for (let i = 0; i < num; i++) {
      curBudget += num * costs[i];
      pq.insert(i);
    }
    curBudget += times[pq.peek()];
    for (let i = num; i < n; i++) {
      // 检查能否替代当前pq中的值
      const curIdx = pq.poll();
      // 使用当前i替换curIdx要进行的操作是
      // curBudget - times[curIdx] - num * costs[curIdx] + Math.max(times[pq.peek()], times[i]) + num * costs[i]
      // 所以比较 Math.max(times[pq.peek()], times[i]) + num * costs[i] 与
      // times[curIdx] + num * costs[curIdx]的大小即可
      if (
        times[i] < times[curIdx] &&
        Math.max(times[(pq.peek(), times[i])]) + num * costs[i] <
          times[curIdx] + num * costs[curIdx]
      ) {
        pq.insert(i);
        // 可以替换
        curBudget =
          curBudget -
          times[curIdx] -
          num * costs[curIdx] +
          times[pq.peek()] +
          num * costs[i];
      } else {
        // 不替换就重新入队
        pq.insert(curIdx);
      }
    }
    return curBudget <= budget;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

// chargeTimes  13,2,2,1,1
// runningCosts 1,2,3,4,5

// 上面解答的是非连续运行（在数组中任意取k个机器人的）
// 如果是连续的，那么这题更简单了

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  // 二分查找
  const n = chargeTimes.length;
  // 按照runningCosts进行排序
  const oneMin = Math.min.apply(
    null,
    new Array(n).fill(0).map((_, i) => chargeTimes[i] + runningCosts[i])
  );
  if (budget < oneMin) return 0;
  let left = 0;
  let right = n;
  // 如果要选择num个机器人，它需要花费的最少开销如何计算
  const check = (num) => {
    if (num <= 1) return true;
    const pq = new PQ((a, b) => chargeTimes[b] - chargeTimes[a]);
    let curBudget = 0;
    for (let i = 0; i < num; i++) {
      curBudget += num * runningCosts[i];
      pq.insert(i);
    }
    curBudget += chargeTimes[pq.peek()];
    if (curBudget <= budget) return true;
    for (let i = num; i < n; i++) {
      curBudget -= num * runningCosts[i - num];
      curBudget += num * runningCosts[i];
      curBudget -= chargeTimes[pq.peek()];
      while (!pq.isEmpty() && pq.peek() <= i - num) {
        pq.poll();
      }
      pq.insert(i);
      curBudget += chargeTimes[pq.peek()];
      if (curBudget <= budget) return true;
    }
    return false;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
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
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  // 滑动窗口，单调队列
  const dq = new Dqueue();
  let sum = 0;
  let left = 0;
  let ans = 0;
  const n = chargeTimes.length;
  for (let j = 0; j < n; j++) {
    sum += runningCosts[j];
    while (!dq.isEmpty() && chargeTimes[dq.peekBack()] < chargeTimes[j]) {
      dq.dequeueBack();
    }
    dq.enqueueBack(j);
    const curBudget = chargeTimes[dq.peekFront()] + (j - left + 1) * sum;
    if (curBudget <= budget) {
      ans = Math.max(ans, j - left + 1);
    } else {
      // 出队直到budget满足条件
      while (left <= j) {
        sum -= runningCosts[left++];
        while (!dq.isEmpty() && dq.peekFront() < left) {
          dq.dequeueFront();
        }
        const curBudget =
          (dq.isEmpty() ? 0 : chargeTimes[dq.peekFront()]) +
          (j - left + 1) * sum;
        if (curBudget <= budget) {
          ans = Math.max(ans, j - left + 1);
          break;
        }
      }
    }
  }
  return ans;
};

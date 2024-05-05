// 给你一个下标从 0 开始的整数数组 costs ，其中 costs[i] 是雇佣第 i 位工人的代价。

// 同时给你两个整数 k 和 candidates 。我们想根据以下规则恰好雇佣 k 位工人：

// 总共进行 k 轮雇佣，且每一轮恰好雇佣一位工人。
// 在每一轮雇佣中，从最前面 candidates 和最后面 candidates 人中选出代价最小的一位工人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
// 比方说，costs = [3,2,7,7,1,2] 且 candidates = 2 ，第一轮雇佣中，我们选择第 4 位工人，因为他的代价最小 [3,2,7,7,1,2] 。
// 第二轮雇佣，我们选择第 1 位工人，因为他们的代价与第 4 位工人一样都是最小代价，而且下标更小，[3,2,7,7,2] 。注意每一轮雇佣后，剩余工人的下标可能会发生变化。
// 如果剩余员工数目不足 candidates 人，那么下一轮雇佣他们中代价最小的一人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
// 一位工人只能被选择一次。
// 返回雇佣恰好 k 位工人的总代价。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return;
    return this.items[0];
  }
  insert(value) {
    if (value == null) return false;
    this.items.push(value);
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
    if (this.isEmpty()) return;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
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
      if (temp !== idx) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  const n = costs.length;
  let ans = 0;
  if (candidates * 2 >= n) {
    costs.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) ans += costs[i];
    return ans;
  }
  // 优先队列
  const leftPq = new PQ();
  const rightPq = new PQ();
  let left = 0;
  let right = n - 1;
  while (candidates) {
    leftPq.insert(costs[left++]);
    rightPq.insert(costs[right--]);
    candidates--;
  }
  while (k) {
    const leftMin = !leftPq.isEmpty() ? leftPq.peek() : Infinity;
    const rightMin = !rightPq.isEmpty() ? rightPq.peek() : Infinity;
    if (leftMin <= rightMin) {
      // 使用leftMin
      ans += leftPq.poll();
      if (left <= right) leftPq.insert(costs[left++]);
    } else {
      // 使用rightMin
      ans += rightPq.poll();
      if (left <= right) rightPq.insert(costs[right--]);
    }
    k--;
  }
  return ans;
};

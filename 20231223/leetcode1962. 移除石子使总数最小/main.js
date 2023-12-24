// 给你一个整数数组 piles ，数组 下标从 0 开始 ，其中 piles[i] 表示第 i 堆石子中的石子数量。另给你一个整数 k ，请你执行下述操作 恰好 k 次：

// 选出任一石子堆 piles[i] ，并从中 移除 floor(piles[i] / 2) 颗石子。
// 注意：你可以对 同一堆 石子多次执行此操作。

// 返回执行 k 次操作后，剩下石子的 最小 总数。

// floor(x) 为 小于 或 等于 x 的 最大 整数。（即，对 x 向下取整）。

class PQ {
  constructor(compare = (a, b) => a - b, heap = []) {
    this.compare = compare;
    this.heap = heap;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
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
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  compareFn(a, b) {
    return this.compare(this.heap[a], this.heap[b]);
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
    const size = this.size();
    let idx = size - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compareFn(idx, parentIdx) < 0) {
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
      if (leftIdx < size && this.compareFn(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compareFn(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
  const pq = new PQ(
    (a, b) => b - a,
    piles.sort((a, b) => b - a)
  );
  while (k) {
    const cur = pq.poll();
    pq.insert(Math.ceil(cur / 2));
    k--;
  }
  return pq.heap.reduce((pre, cur) => pre + cur, 0);
};

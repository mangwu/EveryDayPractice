// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

// 一次操作中，你将执行：

// 选择 nums 中最小的两个整数 x 和 y 。
// 将 x 和 y 从 nums 中删除。
// 将 min(x, y) * 2 + max(x, y) 添加到数组中的任意位置。
// 注意，只有当 nums 至少包含两个元素时，你才可以执行以上操作。

// 你需要使数组中的所有元素都大于或等于 k ，请你返回需要的 最少 操作次数。
class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.items.length;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  isEmpty() {
    return this.size() === 0;
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
  peek() {
    if (this.isEmpty()) return;
    return this.items[0];
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
    const size = this.size();
    let idx = 0;
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
  insert(value) {
    this.items.push(value);
    this.shiftUp();
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
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const pq = new PQ();
  for (const num of nums) {
    pq.insert(num);
  }
  let res = 0;
  while (pq.peek() < k) {
    const min1 = pq.poll();
    const min2 = pq.poll();
    pq.insert(min1 * 2 + min2);
    res++;
  }
  return res;
};

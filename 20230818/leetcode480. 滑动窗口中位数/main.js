/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-18 14:51:11                                                  *
 * @LastModifiedDate: 2023-08-18 17:10:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。

// 例如：

// [2,3,4]，中位数是 3
// [2,3]，中位数是 (2 + 3) / 2 = 2.5
// 给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。
class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.data = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.data[this.size() - 1];
  }
  insert(value) {
    if (value == null) return false;
    const idx = this.binarySearch(value);
    this.data.splice(idx, 0, value);
    return true;
  }
  binarySearch(value) {
    // 找到第一个大于等于value的索引，没有就返回数据长度
    let left = 0;
    let right = this.size();
    while (left < right) {
      const mid = (left + right) >> 1;
      if (this.compareFn(this.data[mid], value) >= 0) {
        // mid比value大
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }
  poll() {
    return this.data.pop();
  }
  remove(value) {
    if (value == null) return false;
    const idx = this.binarySearch(value);
    this.data.splice(idx, 1);
    return true;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  // 这题和滑动窗口的最大值有相似之处，但是此处求的是中位数而不是最大值
  const n = nums.length;
  const pq = new PQ();
  const res = [];
  for (let i = 0; i < k; i++) {
    pq.insert(nums[i]);
  }
  let right = Math.floor(k / 2);
  let left = Math.ceil(k / 2) - 1;
  res.push((pq.data[left] + pq.data[right]) / 2);
  for (let i = k; i < n; i++) {
    pq.insert(nums[i]);
    pq.remove(nums[i - k]);
    res.push((pq.data[left] + pq.data[right]) / 2);
  }
  return res;
};

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  _getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  _getLeftIdx(idx) {
    return 2 * idx + 1;
  }
  _getRightIdx(idx) {
    return 2 * idx + 2;
  }
  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this._shiftUp();
    return true;
  }
  _compare(idx1, idx2) {
    return this.compareFn(this.heap[idx1], this.heap[idx2]) > 0;
  }
  _shiftUp() {
    let idx = this.size() - 1;
    let pIdx = this._getParentIdx(idx);
    while (idx > 0 && this._compare(pIdx, idx)) {
      this._swap(idx, pIdx);
      idx = pIdx;
      pIdx = this._getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this._swap(0, size - 1);
    const removeV = this.heap.pop();
    this._shiftDown();
    return removeV;
  }
  _shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this._getLeftIdx(idx);
      const rightIdx = this._getRightIdx(idx);
      if (leftIdx < size && this._compare(idx, leftIdx)) idx = leftIdx;
      if (rightIdx < size && this._compare(idx, rightIdx)) idx = rightIdx;
      if (temp !== idx) {
        this._swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

class DualHeap {
  constructor(k) {
    this.small = new MinHeap((a, b) => b - a);
    this.large = new MinHeap();
    this.delayed = new Map(); // 延迟删除
    this.k = k; // 滑动窗口大小
    this.smallSize = 0; // 小堆的实际大小（减去需要延迟删除的数量）
    this.largeSize = 0; // 大堆的实际大小（减去需要延迟删除的数量）
  }
  getMedian() {
    return (this.k & 1) === 1
      ? this.small.peek()
      : (this.small.peek() + this.large.peek()) / 2;
  }
  insert(num) {
    if (this.small.isEmpty() || num <= this.small.peek()) {
      this.small.insert(num);
      this.smallSize++;
    } else {
      this.large.insert(num);
      this.largeSize++;
    }
    this._makeBalance(); // 保证平衡
  }
  _prune(heap) {
    // 弹出要删除的堆顶元素
    while (!heap.isEmpty()) {
      if (this.delayed.has(heap.peek())) {
        const num = heap.poll();
        this.delayed.set(num, this.delayed.get(num) - 1);
        if (this.delayed.get(num) === 0) this.delayed.delete(num); // 删除完成
      } else break;
    }
  }
  _makeBalance() {
    if (this.smallSize > this.largeSize + 1) {
      // samll元素比large元素多两个
      this.large.insert(this.small.poll());
      this.smallSize--;
      this.largeSize++;
      // samll的堆顶元素被移除，需要判断新的堆顶元素是否是要延迟删除
      this._prune(this.small);
    } else if (this.smallSize < this.largeSize) {
      // samll元素比large元素少
      this.small.insert(this.large.poll());
      this.smallSize++;
      this.largeSize--;
      // large元素的堆顶元素被移除，需要判断新的堆顶元素是否要延迟删除
      this._prune(this.large);
    }
  }
  erase(num) {
    // 延迟删除，先记录下来
    this.delayed.set(num, (this.delayed.get(num) | 0) + 1);
    if (num <= this.small.peek()) {
      // 在samll堆中
      this.smallSize--;
      if (num === this.small.peek()) {
        // 直接删除
        this._prune(this.small);
      }
    } else {
      // 在large堆中
      this.largeSize--;
      if (num === this.large.peek()) {
        // 直接删除
        this._prune(this.large);
      }
    }
    this._makeBalance();
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  // 这题和滑动窗口的最大值有相似之处，但是此处求的是中位数而不是最大值
  const dh = new DualHeap(k);
  const n = nums.length;
  for (let i = 0; i < k; i++) dh.insert(nums[i]);
  const res = [dh.getMedian()];
  for (let i = k; i < n; i++) {
    dh.insert(nums[i]);
    dh.erase(nums[i - k]);
    res.push(dh.getMedian());
  }
  return res;
};

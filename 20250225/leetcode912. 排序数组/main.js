// 给你一个整数数组 nums，请你将该数组升序排列。

// 你必须在 不使用任何内置函数 的情况下解决问题，时间复杂度为 O(nlog(n))，并且空间复杂度尽可能小。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
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
    let temp = 0;
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
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const pq = new PQ();
  for (const num of nums) pq.insert(num);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = pq.poll();
  }
  return nums;
};

// 快速排序超时
const quickSort = (nums, start, end) => {
  if (start >= end) return nums;
  const n = end - start + 1;
  const idx = Math.floor(Math.random() * n) + start;
  const p = nums[idx]; // 比较值
  [nums[idx], nums[start]] = [nums[start], nums[idx]];
  let left = start;
  let right = end;
  while (left < right) {
    // 找到下一个比p小的元素
    while (right > left && nums[right] >= p) right--;
    // 找到下一个比p大的元素
    while (left < right && nums[left] <= p) left++;
    if (left < right) [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  // 将中间值放入left
  [nums[start], nums[left]] = [nums[left], nums[start]];
  quickSort(nums, start, left - 1);
  quickSort(nums, left + 1, end);
  return nums;
};
// console.log(quickSort([5, 1, 2, -4, 5], 0, 4));

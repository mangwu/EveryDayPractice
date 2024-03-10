// 给你一个整数数组 nums 和一个 正 整数 k 。你可以选择数组的任一 子序列 并且对其全部元素求和。

// 数组的 第 k 大和 定义为：可以获得的第 k 个 最大 子序列和（子序列和允许出现重复）

// 返回数组的 第 k 大和 。

// 子序列是一个可以由其他数组删除某些或不删除元素排生而来的数组，且派生过程不改变剩余元素的顺序。

// 注意：空子序列的和视作 0 。

class PQ {
  constructor(compare = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compare;
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
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
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.items.length;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }
  insert(val) {
    if (!val) return false;
    this.items.push(val);
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
    if (size === 1) return this.items.pop();
    this.swap(size - 1, 0);
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
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function (nums, k) {
  const n = nums.length;
  let maxNum = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
    } else maxNum += nums[i];
  }
  // 找到第k-1个最小序列
  nums.sort((a, b) => a - b);
  const pq = new PQ((a, b) => a[0] - b[0]);
  pq.insert([0, 0]); // [sum, idx]，第一个是空序列
  while (k > 1) {
    k -= 1;
    const [sum, idx] = pq.poll();
    if (idx < n) {
      // 选择idx所在的值
      pq.insert([sum + nums[idx], idx + 1]);
      if (idx) {
        // 不选idx
        pq.insert([sum + nums[idx] - nums[idx - 1], idx + 1]);
      }
    }
  }
  return maxNum - pq.peek()[0];
};

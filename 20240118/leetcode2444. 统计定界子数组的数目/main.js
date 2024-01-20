// 给你一个整数数组 nums 和两个整数 minK 以及 maxK 。

// nums 的定界子数组是满足下述条件的一个子数组：

// 子数组中的 最小值 等于 minK 。
// 子数组中的 最大值 等于 maxK 。
// 返回定界子数组的数目。

// 子数组是数组中的一个连续部分。

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
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  const incrementDq = new Dqueue(); // 单调递增队列，得出最小值
  const decrementDq = new Dqueue(); // 单调递减队列，得出最大值
  const n = nums.length;
  let ans = 0;
  let left = 0;
  for (let i = 0; i < n; i++) {
    // 计算以nums[i]为最后一个元素的定界子数组
    // 入队i
    while (!incrementDq.isEmpty() && nums[incrementDq.peekBack()] >= nums[i]) {
      incrementDq.dequeueBack();
    }
    incrementDq.enqueueBack(i);
    while (!decrementDq.isEmpty() && nums[decrementDq.peekBack()] <= nums[i]) {
      decrementDq.dequeueBack();
    }
    decrementDq.enqueueBack(i);
    if (
      nums[incrementDq.peekFront()] >= minK &&
      nums[decrementDq.peekFront()] <= maxK
    ) {
      if (
        nums[incrementDq.peekFront()] === minK &&
        nums[decrementDq.peekFront()] === maxK
      ) {
        // 找到以nums[i]为底的最长定界子数组了
        let minIdx = incrementDq.peekFront();
        let maxIdx = decrementDq.peekFront();
        ans += Math.min(maxIdx, minIdx) - left + 1;
      }
      // 可以继续遍历
    } else {
      // 需要移动left到i+1，当前nums[i]不可能有定界子数组
      left = i + 1;
      while (!incrementDq.isEmpty()) incrementDq.dequeueBack();
      while (!decrementDq.isEmpty()) decrementDq.dequeueBack();
    }
  }
  return ans;
};

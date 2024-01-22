// 给你一个下标从 0 开始的整数数组 nums 。nums 的一个子数组如果满足以下条件，那么它是 不间断 的：

// i，i + 1 ，...，j  表示子数组中的下标。对于所有满足 i <= i1, i2 <= j 的下标对，都有 0 <= |nums[i1] - nums[i2]| <= 2 。
// 请你返回 不间断 子数组的总数目。

// 子数组是一个数组中一段连续 非空 的元素序列。

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
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  // 子数组中的最大值和最小值之差小于等于2
  // 单调队列
  const incrementDq = new Dqueue(); // 递增队列，保存最小值
  const decrementDq = new Dqueue(); // 递减队列，保存最大值
  let left = 0;
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // 入队
    while (!incrementDq.isEmpty() && nums[incrementDq.peekBack()] >= nums[i]) {
      incrementDq.dequeueBack();
    }
    incrementDq.enqueueBack(i);
    while (!decrementDq.isEmpty() && nums[decrementDq.peekBack()] <= nums[i]) {
      decrementDq.dequeueBack();
    }
    decrementDq.enqueueBack(i);
    // 判断left是否需要左移
    while (left <= i) {
      if (nums[decrementDq.peekFront()] - nums[incrementDq.peekFront()] <= 2) {
        ans += i - left + 1;
        break;
      }
      if (!incrementDq.isEmpty() && incrementDq.peekFront() <= left)
        incrementDq.dequeueFront();
      if (!decrementDq.isEmpty() && decrementDq.peekFront() <= left)
        decrementDq.dequeueFront();
      left++;
    }
  }
  return ans;
};

// 给你一个整数数组 nums 。每一次操作中，你可以将 nums 中 任意 一个元素替换成 任意 整数。

// 如果 nums 满足以下条件，那么它是 连续的 ：

// nums 中所有元素都是 互不相同 的。
// nums 中 最大 元素与 最小 元素的差等于 nums.length - 1 。
// 比方说，nums = [4, 2, 5, 3] 是 连续的 ，但是 nums = [1, 2, 3, 5, 6] 不是连续的 。

// 请你返回使 nums 连续 的 最少 操作次数。

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
    return this.items[this.lowest + 1];
  }
  peekBack() {
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
  dequeueFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  // 需要去除重复的数字
  nums = [...new Set(nums)].sort((a, b) => a - b);
  // 滑动窗口
  const queue = new Dqueue();
  queue.enqueueBack(nums[0]);
  let ans = n - 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < queue.peekFront() + n) {
      queue.enqueueBack(nums[i]);
      ans = Math.min(ans, n - queue.size());
    } else {
      while (!queue.isEmpty() && nums[i] >= queue.peekFront() + n) {
        queue.dequeueFront();
      }
      queue.enqueueBack(nums[i]);
      ans = Math.min(ans, n - queue.size());
    }
  }
  return ans;
};

// [8,5,9,9,8,4]
// 4 5 8 8 9 9

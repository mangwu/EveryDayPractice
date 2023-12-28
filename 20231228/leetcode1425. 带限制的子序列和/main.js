// 给你一个整数数组 nums 和一个整数 k ，请你返回 非空 子序列元素和的最大值，子序列需要满足：子序列中每两个 相邻 的整数 nums[i] 和 nums[j] ，它们在原数组中的下标 i 和 j 满足 i < j 且 j - i <= k 。

// 数组的子序列定义为：将数组中的若干个数字删除（可以删除 0 个数字），剩下的数字按照原本的顺序排布。

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
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  // 本题除了优先队列外，还可以使用单调队列
  // 将dp值和索引保存到相应的单调队列中，如果队列中的索引超出范围可以出队
  const queue = new Dqueue();
  queue.enqueueBack([nums[0], 0]);
  const n = nums.length;
  let res = nums[0];
  for (let i = 1; i < n; i++) {
    // 出队 i - k- 1
    while (
      i - k - 1 >= 0 &&
      !queue.isEmpty() &&
      queue.peekFront()[1] <= i - k - 1
    ) {
      queue.dequeueFront();
    }
    // 计算当前dp值
    const cur = Math.max(nums[i], nums[i] + queue.peekFront()[0]);
    res = Math.max(cur, res);
    // 入队
    while (!queue.isEmpty() && cur > queue.peekBack()[0]) {
      queue.dequeueBack();
    }
    queue.enqueueBack([cur, i]);
  }
  return res;
};

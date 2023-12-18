// 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。

// 环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。

// 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length;
  let pre = nums[0];
  let ans = pre;
  let sum = nums[0];
  let hasPositive = sum > 0;
  // 不包括环形数组的最大和
  for (let i = 1; i < n; i++) {
    let cur = Math.max(pre + nums[i], nums[i]);
    pre = cur;
    ans = Math.max(ans, cur);
    sum += nums[i];
    hasPositive |= nums[i] > 0;
  }
  pre = nums[0];
  let minAns = pre;
  // 最小和
  for (let i = 1; i < n; i++) {
    let cur = Math.min(pre + nums[i], nums[i]);
    pre = cur;
    minAns = Math.min(minAns, cur);
  }
  return hasPositive ? Math.max(sum - minAns, ans) : ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length;
  let pre = nums[0];
  let ans = pre;
  // 不包括环形数组的最大和
  for (let i = 1; i < n; i++) {
    let cur = Math.max(pre + nums[i], nums[i]);
    pre = cur;
    ans = Math.max(ans, cur);
  }
  let sum = nums[0];
  const leftMax = [nums[0]];
  for (let i = 1; i < n - 1; i++) {
    sum += nums[i];
    leftMax[i] = Math.max(leftMax[i - 1], sum);
  }
  let right = 0;
  for (let i = n - 1; i > 0; i--) {
    right += nums[i];
    ans = Math.max(ans, right + leftMax[i - 1]);
  }
  return ans;
};

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
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
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
var maxSubarraySumCircular = function (nums) {
  const dqueue = new Dqueue();
  let res = Math.max.apply(null, nums);
  nums.push(...nums);
  const n = nums.length;
  const half = n / 2;
  const prefix = [0];
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
  }
  // 获取不超过 half长度的最大数组和
  for (let i = 0; i <= n; i++) {
    while (!dqueue.isEmpty() && i - dqueue.peekFront() > half) {
      dqueue.dequeueFront();
    }
    while (!dqueue.isEmpty() && prefix[i] <= prefix[dqueue.peekBack()]) {
      dqueue.dequeueBack();
    }
    dqueue.enqueueBack(i);
    if (dqueue.size() > 1) {
      res = Math.max(
        res,
        prefix[dqueue.peekBack()] - prefix[dqueue.peekFront()]
      );
    }
  }
  return res;
};


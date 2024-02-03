/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-01 10:08:38                                                  *
 * @LastModifiedDate: 2024-02-01 16:52:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小扣在秋日市集入口处发现了一个数字游戏。主办方共有 N 个计数器，计数器编号为 0 ~ N-1。每个计数器上分别显示了一个数字，小扣按计数器编号升序将所显示的数字记于数组 nums。每个计数器上有两个按钮，分别可以实现将显示数字加一或减一。小扣每一次操作可以选择一个计数器，按下加一或减一按钮。

// 主办方请小扣回答出一个长度为 N 的数组，第 i 个元素(0 <= i < N)表示将 0~i 号计数器 初始 所示数字操作成满足所有条件 nums[a]+1 == nums[a+1],(0 <= a < i) 的最小操作数。回答正确方可进入秋日市集。

// 由于答案可能很大，请将每个最小操作数对 1,000,000,007 取余。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numsGame = function (nums) {
  // 将nums变成numa = [a, a+1, a + 2, a + 3, a + 4,... a + k,..., a + n - 1]
  const n = nums.length;
  // 当a等于多少时，
  // [abs(a - nums[0]), abs(a - nums[1] + 1),... abs(a - nums[k] + k), ...abs(a - nums[n-1] + n -1)]
  // 之和最小
};

// 2   7  4 3 1 9

// -3 -2 -1 0 1 2
class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.heap = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]);
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
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
    let temp = idx;
    const size = this.size();
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
const MOD = 10 ** 9 + 7;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numsGame = function (nums) {
  const n = nums.length;
  // 假设最终变化的结果是x, x + 1, x + k ... x + n - 1
  // 其中相同的值包含x，不同的是每个数后面加的恰好是数组索引
  // 那么，我们把nums中的每个元素都减去对应的索引值，进行同样的操作
  // 最终变化的结果就是x, x, ... x
  // 可以将问题转换成将nums[i] - i变成相同数的最小操作数
  // 我们可以称nums[i]-i组成的数组为一个新的数组newNums，
  // 问题就转换成了给定一个数组newNums，将其中的每个数变成同一个数需要的最小操作次数
  // 那么这个题目就和leetcode462. 最小操作次数使数组元素相等 II，一模一样，是一个中等题
  // 最终变成的数就是中位数
  const newNums = nums.map((v, i) => v - i);
  // 题目要求的是对于每一个i，使得newNums.slice(0, i)中的每个数相等的最小操作数
  const leftPQ = new PQ((a, b) => b - a); // 左边的小值，顶部为左边最大值
  const rightPQ = new PQ((a, b) => a - b); // 右边的大致，顶部为右边的最小值
  const ans = [];
  let leftSum = 0;
  let rigthSum = 0;
  for (let i = 0; i < n; i++) {
    let halfNum = 0;
    if (i % 2 === 0) {
      // 奇数个，此时leftPQ和rightPQ的size相同
      if (leftPQ.isEmpty() || leftPQ.peek() <= newNums[i]) {
        rightPQ.insert(newNums[i]);
        halfNum = rightPQ.peek();
        rigthSum += newNums[i];
      } else {
        // newNums[i]比较小只能进入leftPQ
        rigthSum += leftPQ.peek();
        leftSum -= leftPQ.peek();
        rightPQ.insert(leftPQ.poll());
        leftSum += newNums[i];
        leftPQ.insert(newNums[i]);
        halfNum = rightPQ.peek();
      }
      ans.push((rigthSum - leftSum - halfNum) % MOD);
    } else {
      // 偶数个，此时rightPQ比leftPQ多一个元素
      if (newNums[i] <= rightPQ.peek()) {
        // 直接加入到leftPQ中
        leftPQ.insert(newNums[i]);
        leftSum += newNums[i];
      } else {
        // 加入到rightPQ中然后移出一个
        rigthSum += newNums[i];
        rightPQ.insert(newNums[i]);
        rigthSum -= rightPQ.peek();
        leftSum += rightPQ.peek();
        leftPQ.insert(rightPQ.poll());
      }
      ans.push((rigthSum - leftSum) % MOD);
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numsGame = function (nums) {
  const n = nums.length;
  const newNums = nums.map((v, i) => v - i);
  const leftPQ = new PQ((a, b) => b - a); // 左边的小值，顶部为左边最大值
  const rightPQ = new PQ((a, b) => a - b); // 右边的大致，顶部为右边的最小值
  const ans = [];
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < n; i++) {
    let halfNum = 0;
    if (i % 2 === 0) {
      // 奇数个，此时leftPQ和rightPQ的size相同
      leftSum += newNums[i];
      leftPQ.insert(newNums[i]);
      leftSum -= leftPQ.peek();
      rightSum += leftPQ.peek();
      rightPQ.insert(leftPQ.poll());
      halfNum = rightPQ.peek();
      ans.push((rightSum - leftSum - halfNum) % MOD);
    } else {
      // 偶数个，此时rightPQ比leftPQ多一个元素
      rightSum += newNums[i];
      rightPQ.insert(newNums[i]);
      leftSum += rightPQ.peek();
      rightSum -= rightPQ.peek();
      leftPQ.insert(rightPQ.poll());
      ans.push((rightSum - leftSum) % MOD);
    }
  }
  return ans;
};

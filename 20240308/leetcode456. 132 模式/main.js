// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  // 单调栈
  const stack = [];
  const n = nums.length;
  let min = Infinity;
  let prePop = -Infinity;
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) {
      const top = stack.pop();
      if (stack.length) {
        min = Math.min(min, stack[0]);
        prePop = Math.max(prePop, top);
      }
    }
    if (nums[i] < prePop && nums[i] > min) return true;
    stack.push(nums[i]);
  }
  return false;
};
// [1,2,3,4,-4,-3,-5,-1]
// 1 2 3 4   -4
// (-4) (-3)     -5
// (-5) (-1)
//
// [3,5,0,3]
// [3,5,0,4]
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
 * @return {boolean}
 */
var find132pattern = function (nums) {
  // 单调栈陷阱
  // 枚举3
  const n = nums.length;
  let leftMin = nums[0];
  const pq = new PQ((a, b) => nums[a] - nums[b]);
  for (let i = 1; i < n; i++) pq.insert(i);
  for (let i = 1; i < n; i++) {
    // 弹出索引在[0,i]的值
    while (!pq.isEmpty() && pq.peek() <= i) {
      pq.poll();
    }
    if (nums[i] > leftMin) {
      if (pq.isEmpty()) return false;
      else if (nums[pq.peek()] < nums[i]) return true;
    }
    leftMin = Math.min(leftMin, nums[i]);
  }
  return false;
};

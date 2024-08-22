// 给你一个整数数组 nums 和一个正整数 k ，返回长度为 k 且最具 竞争力 的 nums 子序列。

// 数组的子序列是从数组中删除一些元素（可能不删除元素）得到的序列。

// 在子序列 a 和子序列 b 第一个不相同的位置上，如果 a 中的数字小于 b 中对应的数字，那么我们称子序列 a 比子序列 b（相同长度下）更具 竞争力 。 例如，[1,3,4] 比 [1,3,5] 更具竞争力，在第一个不相同的位置，也就是最后一个位置上， 4 小于 5 。

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
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
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return;
    return this.items[0];
  }
  insert(value) {
    if (value == null) return false;
    this.items.push(value);
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
    if (this.isEmpty()) return;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
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
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  const n = nums.length;
  const pq = new PQ((a, b) =>
    nums[a] !== nums[b] ? nums[a] - nums[b] : a - b
  );
  for (let i = 0; i < n; i++) pq.insert(i);
  const stack = [-1];
  const ans = new Array(n).fill(-1);
  const pops = new PQ((a, b) => b - a);
  while (k) {
    if (stack.length) {
      const top = stack[stack.length - 1];
      while (!pq.isEmpty() && pq.peek() <= top) {
        pops.insert(pq.poll());
      }
    }
    if (pq.isEmpty()) {
      // 回溯
      stack.pop();
      const preIdx = stack[stack.length - 1];
      while (!pops.isEmpty() && pops.peek() > preIdx) {
        pq.insert(pops.poll());
      }
    } else {
      const curIdx = pq.poll();
      ans[curIdx] = nums[curIdx];
      stack.push(curIdx);
      k--;
    }
    // console.log(ans);
  }
  return ans.filter((v) => v !== -1);
};
const random = require("../../publicFunc/random/random");
const {
  recordInOutContent,
} = require("../../publicFunc/recordInOutContent/recordInOutContent");
const arr = random.randomArr(100, 1, 200);
// const arr = [
//   10, 143, 138, 129, 47, 135, 118, 158, 59, 163, 125, 160, 108, 48, 180, 199,
//   31, 179, 79, 167, 150, 88, 161, 120, 161, 154, 152, 109, 107, 19, 47, 171,
//   172, 146, 60, 19, 74, 21, 101, 37, 127, 143, 151, 154, 159, 187, 195, 139,
//   122, 100, 59, 155, 5, 120, 75, 146, 78, 186, 44, 52, 107, 136, 84, 107, 37,
//   199, 119, 93, 128, 27, 118, 16, 57, 150, 103, 61, 11, 21, 42, 64, 133, 180,
//   138, 68, 94, 194, 84, 3, 17, 72, 131, 23, 144, 74, 93, 104, 139, 142, 125,
//   147,
// ];
recordInOutContent(
  mostCompetitive,
  [71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2],
  3
);

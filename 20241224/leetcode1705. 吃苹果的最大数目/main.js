/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-24 10:43:22                                                  *
 * @LastModifiedDate: 2024-12-24 17:32:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。在第 i 天，树上会长出 apples[i] 个苹果，这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。

// 你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。

// 给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  // 因为每天最多吃一个苹果，可以通过平铺的方式将苹果分摊
  const n = apples.length;
  const maxApple = Math.max.apply(null, apples);
  const maxDays = Math.max.apply(null, days);
  const arr = new Array(n + maxApple + maxDays).fill(0);
  for (let i = 0; i < n; i++) {
    const max = Math.min(days[i], apples[i]);
    for (let j = i; j < i + max; j++) {
      arr[j]++;
    }
  }
  return arr.reduce((pre, cur) => pre + Number(Boolean(cur)));
};
// 可以构建一个区间列表，表示苹果有效的区间
// 1     2     3     5     2
// [0,2] [1,2] [3,3] [4,7] [5,6]
// [1,2,3,5,2,8,59,2,24]
// [3,2,1,4,2,10,62,21,4]

eatenApples([1, 2, 3, 5, 2, 8, 29, 2, 24], [3, 2, 1, 4, 2, 10, 32, 21, 4]);

class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.items = [];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.items.length;
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
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
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
    let idx = 0;
    let temp = 0;
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
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  const n = apples.length;
  // 优先队列，保存每天生产的苹果的苹果，每次选取符合条件的
  const pq = new PQ((a, b) => a[1] - b[1]);
  let i = 0;
  let res = 0;
  while (!pq.isEmpty() || i < n) {
    if (i < n) {
      pq.insert([apples[i], i + days[i] - 1]);
    }
    while (!pq.isEmpty() && (pq.peek()[1] < i || pq.peek()[0] === 0)) {
      pq.poll();
    }
    const cur = pq.poll();
    if (cur) {
      const [num, last] = cur;
      res++;
      if (num > 1) {
        pq.insert([num - 1, last]);
      }
    }
    i++;
  }
  return res;
};
const pq = new PQ((a, b) => a - b);
pq.insert(5);
pq.insert(17);
pq.insert(6);
pq.insert(-2);
pq.insert(9);
pq.insert(11);
pq.insert(-15);
pq.insert(6);
while (!pq.isEmpty()) console.log(pq.poll());
// [1,2,3,5,2,8,9,2,24]
// [3,2,1,4,2,10,12,15,4]

// idx app last left use
// 0   1   3    0    t
// 1   2   3    1    t
// 2   3   2    1    t
// 3   5   6    6    t
// 4   2   5

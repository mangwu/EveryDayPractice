/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-28 22:35:05                                                  *
 * @LastModifiedDate: 2023-05-28 23:46:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m * n 的矩阵 mat，以及一个整数 k ，矩阵中的每一行都以非递减的顺序排列。

// 你可以从每一行中选出 1 个元素形成一个数组。返回所有可能数组中的第 k 个 最小 数组和
class MinHeap {
  constructor(compareFunc = (a, b) => a < b) {
    this.compare = compareFunc;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyUp() {
    let currentIndex = this.size - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.compare(this.heap[currentIndex], this.heap[parentIndex])) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (currentIndex < this.size) {
      let largestIndex = currentIndex;
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      if (
        leftChildIndex < this.size &&
        this.compare(this.heap[leftChildIndex], this.heap[largestIndex])
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size &&
        this.compare(this.heap[rightChildIndex], this.heap[largestIndex])
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[largestIndex]] = [
          this.heap[largestIndex],
          this.heap[currentIndex],
        ];
        currentIndex = largestIndex;
      } else {
        break;
      }
    }
  }
}
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {
  // 选择的最小的数组肯定是 mat[0][0] ~ mat[i][0]
  const m = mat.length;
  const n = mat[0].length;
  // 共有 n ^ m 次方种选择，所以不能穷举
  // 归并+优先队列
  // 假设  PriorityQueue 是一个优先队列
  // 其中 保存的元素 是 [idx1,idx2,...idxm-1,sum]
  // 比较的就是最后一个元素sum 的大小
  const queue = new MinHeap((a, b) => a[m] < b[m]);
  // 初始需要把 [0,0,0..,0,sum(mat[i][0])] 入驻
  const initialEle = new Array(m + 1).fill(0);
  initialEle[m] = mat.reduce((pre, cur) => pre + cur[0], 0); // 第一个元素和
  queue.add(initialEle);
  const set = new Set();
  while (k) {
    const curMin = queue.poll(); // 取得最小值
    console.log(curMin);
    if (k === 1) {
      return curMin[m];
    }
    // 遍历获取下一次选择
    for (let i = 0; i < m; i++) {
      if (curMin[i] < n - 1) {
        // 可以顺利找到下一个
        const nxt = curMin.slice();
        nxt[i]++;
        nxt[m] += mat[i][nxt[i]] - mat[i][nxt[i] - 1];
        const str = nxt.toString();
        if (!set.has(nxt.toString())) {
          set.add(str);
          queue.add(nxt);
        }
      }
    }
    console.log(queue.heap);
    k--;
  }
};

// [0,1,1,2,]
// [0,1,]
// [
//   [1, 3, 11],
//   [2, 4, 6],
// ];

// [0,0,3]
// [1,0,5]
// [0,1,5]
// [1,1,7]
// [2,0,13]
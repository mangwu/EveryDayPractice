/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-15 10:36:19                                                  *
 * @LastModifiedDate: 2023-08-15 11:08:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getLeftIdx(idx) {
    return 2 * idx + 1;
  }
  getRightIdx(idx) {
    return 2 * idx + 2;
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value === null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    const size = this.size();
    let idx = size - 1;
    let parentIdx = this.getParentIdx(idx);
    while (
      idx > 0 &&
      this.compareFn(this.heap[idx], this.heap[parentIdx]) < 0
    ) {
      // 当前节点值比父节点值小，需要上移
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
    const removeValue = this.heap.pop();
    this.shiftDown();
    return removeValue;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx; // 保存当前节点索引
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (
        leftIdx < size &&
        this.compareFn(this.heap[idx], this.heap[leftIdx]) > 0
      ) {
        // 当前节点比左子节点大，需要下移
        idx = leftIdx;
      }
      if (
        rightIdx < size &&
        this.compareFn(this.heap[idx], this.heap[rightIdx]) > 0
      ) {
        // 当前节点比右子节点大，需要下移
        idx = rightIdx;
      }
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const minHeap = new MinHeap((a, b) => a.val - b.val);
  const header = new ListNode();
  for (const list of lists) {
    minHeap.insert(list);
  }
  let pre = header;
  while (!minHeap.isEmpty()) {
    const curMin = minHeap.poll();
    const nxt = curMin.next;
    pre.next = curMin;
    curMin.next = null;
    pre = curMin;
    minHeap.insert(nxt);
  }
  return header.next;
};

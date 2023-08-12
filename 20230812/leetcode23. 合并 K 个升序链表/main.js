/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-12 22:48:35                                                  *
 * @LastModifiedDate: 2023-08-12 23:07:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

class PriorityQueue2 {
  // 默认小根堆
  constructor(compare = (a, b) => a - b < 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 返回队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 返回队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 队首出队
  shift() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    }
  }
  // 队尾出队
  pop() {
    if (this.size > 0) {
      this.size--;
      return this.data.pop();
    }
  }
  // 入队
  push(val) {
    // 二分插入
    this.binaryInsert(this.size++, val);
  }
  binaryInsert(idx, val) {
    // 查找范围 [0, size)
    let left = 0;
    let right = idx;
    // 循环查找
    while (left < right) {
      // 中间索引
      let mid = Math.floor((left + right) / 2);

      if (this.compare(this.data[mid], val)) {
        // mid 比 val小 取右边 [mid + 1, right)
        left = mid + 1;
      } else {
        // mid 比 val 大 取左边 [left, mid)
        right = mid;
      }
      // 直到left === right ;
    }
    // 插入到left前
    this.data.splice(left, 0, val);
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
  const pq = new PriorityQueue2((a, b) => b.val - a.val < 0);
  const header = new ListNode();
  for (const list of lists) {
    if (list) {
      pq.push(list);
    }
  }
  let pre = header;
  while (pq.size) {
    const cur = pq.pop();
    if (cur.next) {
      pq.push(cur.next);
    }
    cur.next = null;
    pre.next = cur;
    pre = cur;
  }
  return header.next;
};

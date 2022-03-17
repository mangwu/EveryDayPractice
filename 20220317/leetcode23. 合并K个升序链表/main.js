/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-17 20:12:08                                                  *
 * @LastModifiedDate: 2022-03-17 20:41:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

class PriorityQueue {
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
  // 构造一个优先队列保存每个链表的当前节点
  const len = lists.length;
  if (len == 0) {
    return null;
  }
  if (len == 1) {
    return lists[0];
  }
  const pq = new PriorityQueue((a, b) => a.val - b.val > 0);
  // 哨兵
  const head = new ListNode();
  let pre = head;
  for (const node of lists) {
    if (node) {
      pq.push(node);
    }
  }
  while (pq.size > 0) {
    // 出队
    const top = pq.pop();
    // 有后序节点就入队
    if (top.next) {
      pq.push(top.next);
    }
    // 找到下一个节点
    pre.next = top;
    pre = top;
  }
  return head.next;
};

const pq1 = new PriorityQueue((a, b) => a - b > 0);
pq1.push(0);
pq1.push(2);
pq1.push(-1);
pq1.push(4);
pq1.push(5);
pq1.pop()
console.log(pq1.data);

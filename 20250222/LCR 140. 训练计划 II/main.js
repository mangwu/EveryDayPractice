/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-22 15:00:48                                                  *
 * @LastModifiedDate: 2025-02-22 15:33:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个头节点为 head 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 cnt 个训练项目编号。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
  const arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  return arr[arr.length - cnt];
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
  // 记录长度
  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }
  let res = head;
  while (len > cnt) {
    res = res.next;
    len--;
  }
  return res;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
  // 快慢指针
  let slow = head;
  let fast = head;
  while (cnt && fast) {
    fast = fast.next;
    cnt--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

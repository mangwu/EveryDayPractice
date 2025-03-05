/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-05 10:16:01                                                  *
 * @LastModifiedDate: 2025-03-05 10:56:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const arr = [];
  let node = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  const len = arr.length;
  // 删除len - n;
  const header = new ListNode(-1, head);
  let pre = len - n - 1 >= 0 ? arr[len - n - 1] : header;
  node = arr[len - n];
  const nxt = node.next;
  pre.next = nxt;
  node.next = null;
  return header.next;
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const header = new ListNode(-1, head);
  let slow = head;
  let fast = head;
  let pre = header;
  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
    pre = pre.next;
  }
  pre.next = slow.next;
  slow.next = null;
  return header.next;
};

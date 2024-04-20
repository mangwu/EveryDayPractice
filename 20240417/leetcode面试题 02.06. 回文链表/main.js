/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-17 14:55:16                                                  *
 * @LastModifiedDate: 2024-04-17 16:40:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 编写一个函数，检查输入的链表是否是回文的。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const n = arr.length;
  for (let i = 0; i < n / 2; i++) if (arr[i] !== arr[n - i - 1]) return false;
  return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const n = arr.length;
  for (let i = 0; i < n / 2; i++) if (arr[i] !== arr[n - i - 1]) return false;
  return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const n = arr.length;
  for (let i = 0; i < n / 2; i++) if (arr[i] !== arr[n - i - 1]) return false;
  return true;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;
  // 快慢指针
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 翻转slow后的
  let node = reverseList(slow.next);
  slow.next = node;
  while (node) {
    if (node.val !== head.val) return false;
    node = node.next;
    head = head.next;
  }
  return true;
};

var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    const nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
};

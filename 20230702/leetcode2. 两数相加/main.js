/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-02 22:43:33                                                  *
 * @LastModifiedDate: 2023-07-02 22:57:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let ans = [l1, l2];
  let idx = 0;
  let next = null;
  let last = null;
  while (l1 || l2 || carry) {
    let cur1 = l1 ? l1.val : 0;
    let cur2 = l2 ? l2.val : 0;
    let cur = cur1 + cur2 + carry;
    carry = Math.floor(cur / 10);
    cur = cur % 10;
    if (l1 && l2) {
      l1.val = cur;
      l2.val = cur;
      last = l1;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      l1.val = cur;
      last = l1;
      l1 = l1.next;
      idx = 0;
    } else if (l2) {
      l2.val = cur;
      last = l2;
      l2 = l2.next;
      idx = 1;
    } else {
      next = new ListNode(cur);
    }
  }
  if (next) {
    last.next = next;
  }
  return ans[idx];
};

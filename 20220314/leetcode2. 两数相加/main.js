/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-14 11:09:54                                                  *
 * @LastModifiedDate: 2022-03-14 14:27:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  // 需要注意进位
  // l1和l2的长度可能不相等
  const l = new ListNode(0, null);
  let node = l;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = l1
      ? l2
        ? l1.val + l2.val + carry
        : l1.val + carry
      : l2
      ? l2.val + carry
      : carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    node.val = sum;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
    if (l1 || l2 || carry) {
      node.next = new ListNode();
      node = node.next;
    }
  }
  return l;
};

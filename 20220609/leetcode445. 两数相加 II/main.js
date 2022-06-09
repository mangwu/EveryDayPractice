/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-09 09:55:28                                                  *
 * @LastModifiedDate: 2022-06-09 10:05:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。
// 将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

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
  // 需要从最后面开始
  const arr1 = [];
  const arr2 = [];
  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  const n1 = arr1.length;
  const n2 = arr2.length;
  let carry = 0;
  const nodes = [];
  for (let i = n1 - 1, j = n2 - 1; i >= 0 || j >= 0; i--, j--) {
    let a = arr1[i] != undefined ? arr1[i] : 0;
    let b = arr2[j] != undefined ? arr2[j] : 0;
    let sum = a + b + carry;
    carry = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    nodes.push(new ListNode(sum, null));
  }
  if (carry) {
    nodes.push(new ListNode(carry, null));
  }
  const nodesLen = nodes.length;
  for (let i = nodesLen - 1; i > 0; i--) {
    nodes[i].next = nodes[i - 1];
  }
  return nodes[nodesLen - 1];
};

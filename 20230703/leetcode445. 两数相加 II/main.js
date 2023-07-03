/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-03 08:57:52                                                  *
 * @LastModifiedDate: 2023-07-03 09:16:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。
// 它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

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
  const list1 = [];
  const list2 = [];
  while (l1) {
    list1.push(l1);
    l1 = l1.next;
  }
  while (l2) {
    list2.push(l2);
    l2 = l2.next;
  }
  let ans = list1.length > list2.length ? list1[0] : list2[0];
  let carry = 0;
  const m = list1.length;
  const n = list2.length;
  for (let i = m - 1, j = n - 1; i >= 0 || j >= 0; i--, j--) {
    let cur1 = i >= 0 ? list1[i].val : 0;
    let cur2 = j >= 0 ? list2[j].val : 0;
    let cur = cur1 + cur2 + carry;
    carry = Math.floor(cur / 10);
    cur %= 10;
    list1[i] && (list1[i].val = cur);
    list2[j] && (list2[j].val = cur);
  }
  let first = null;
  if (carry) first = new ListNode(carry, ans);
  return first || ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-09 23:10:36                                                  *
 * @LastModifiedDate: 2025-02-09 23:17:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

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
  let node1 = l1;
  let node2 = l2;
  let jinwei = 0;
  let ans = new ListNode();
  let curNode = ans;
  while (true) {
    const val = (node1 && node1.val) + (node2 && node2.val) + jinwei;
    jinwei = Math.floor(val / 10);
    curNode.val = val % 10;
    node1 && (node1 = node1.next);
    node2 && (node2 = node2.next);
    if (node1 || node2 || jinwei) {
      curNode.next = new ListNode();
      curNode = curNode.next;
    } else break;
  }
  return ans;
};

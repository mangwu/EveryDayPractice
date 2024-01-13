/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-06 23:05:03                                                  *
 * @LastModifiedDate: 2024-01-06 23:21:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头 head ，每个结点包含一个整数值。

// 在相邻结点之间，请你插入一个新的结点，结点值为这两个相邻结点值的 最大公约数 。

// 请你返回插入之后的链表。

// 两个数的 最大公约数 是可以被两个数字整除的最大正整数。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let header = new ListNode(0, head);
  let node = head;
  while (node && node.next) {
    const insertNode = new ListNode(gcd(node.val, node.next.val));
    insertNode.next = node.next;
    node.next = insertNode;
    node = insertNode.next;
  }
  return header.next;
};

function gcd(a, b) {
  if (a < b) return gcd(b, a);
  if (b === 0) return a;
  return gcd(b, a % b);
}

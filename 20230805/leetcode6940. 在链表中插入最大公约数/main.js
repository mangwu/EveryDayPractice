/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-05 22:33:27                                                  *
 * @LastModifiedDate: 2023-08-05 22:38:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头 head ，每个结点包含一个整数值。

// 在相邻结点之间，请你插入一个新的结点，结点值为这两个相邻结点值的 最大公约数 。

// 请你返回插入之后的链表。

// 两个数的 最大公约数 是可以被两个数字整除的最大正整数

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
  let pre = head;
  let cur = head.next;
  while (cur) {
    const val = gcd(pre.val, cur.val);
    const newNode = new ListNode(val, cur);
    pre.next = newNode;
    pre = cur;
    cur = cur.next;
  }
  return head;
};

var gcd = function (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
};

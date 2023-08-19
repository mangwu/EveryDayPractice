/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-13 10:57:18                                                  *
 * @LastModifiedDate: 2023-08-13 11:03:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 非空 链表的头节点 head ，表示一个不含前导零的非负数整数。

// 将链表 翻倍 后，返回头节点 head 。

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
var doubleIt = function (head) {
  const arr = [];

  while (head) {
    arr.push(head);
    head = head.next;
  }
  let carry = 0;
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let cur = carry + 2 * arr[i].val;
    arr[i].val = cur % 10;
    carry = Math.floor(cur / 10);
  }
  if (carry) {
    return new ListNode(carry, arr[0]);
  }
  return arr[0];
};

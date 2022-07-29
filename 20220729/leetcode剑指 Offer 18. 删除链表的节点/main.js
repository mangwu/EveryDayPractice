/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-29 10:35:44                                                  *
 * @LastModifiedDate: 2022-07-29 10:38:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 注意：此题对比原题有改动

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  const header = new ListNode(-1);
  header.next = head;
  let pre = header;
  let cur = head;
  while (cur) {
    if (cur.val == val) {
      // 删除cur
      pre.next = cur.next;
      cur.next = null;
      break;
    }
    pre = cur;
    cur = cur.next;
  }
  return header.next;
};

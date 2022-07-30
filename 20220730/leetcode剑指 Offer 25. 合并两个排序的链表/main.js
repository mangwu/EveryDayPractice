/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-30 22:01:55                                                  *
 * @LastModifiedDate: 2022-07-30 22:07:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let header = new ListNode();
  let pre = header;
  while (l1 || l2) {
    if (!l2) {
      // 只有l1剩余
      pre.next = l1;
      break;
    }
    if (!l1) {
      // 只有l2剩余
      pre.next = l2;
      break;
    }
    // 比较l1和l2的大小
    if (l1.val > l2.val) {
      // 选择l2
      pre.next = l2;
      l2 = l2.next;
      pre = pre.next;
      pre.next = null;
    } else {
      pre.next = l1;
      l1 = l1.next;
      pre = pre.next;
      pre.next = null;
    }
  }
  return header.next;
};

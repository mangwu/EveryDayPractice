/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-20 15:17:38                                                  *
 * @LastModifiedDate: 2022-04-20 15:29:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
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
var deleteDuplicates = function (head) {
  // 哨兵节点
  const header = new ListNode(-101);
  header.next = head;
  let node = header;
  let pre = header.val;
  while (head) {
    if (head.val !== pre) {
      pre = head.val;
      head = head.next;
      // 判断node是否需要修改
      if (node && node.next && node.next.val !== pre) {
        node = node.next;
      }
      continue;
    }
    if (head.val == pre) {
      // 要删除的重复节点
      let h = node.next;
      while (h.val == pre) {
        h = h.next;
      }
      node.next = h;
      head = h;
    }
  }
  return header.next;
};

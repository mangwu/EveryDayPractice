/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-17 13:53:17                                                  *
 * @LastModifiedDate: 2022-05-17 14:13:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头节点 head 和一个特定值 x ，
// 请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

// 你应当 保留 两个分区中每个节点的初始相对位置。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 出现在大于等于x的节点之前
  const header = new ListNode();
  header.next = head;
  // 插入位置
  let pre = header;
  // head的前一个位置
  let pre2 = header;
  while (head) {
    if (head.val >= x) {
      pre2 = head;
      head = head.next;
    } else {
      if (pre.next == head) {
        pre = pre.next;
        pre2 = head;
        head = head.next;
      } else {
        // 插入到pre后
        let temp = head.next;
        head.next = pre.next;
        pre.next = head;
        pre2.next = temp;
        head = temp;
        pre = pre.next;
      }
    }
  }
  return header.next;
};

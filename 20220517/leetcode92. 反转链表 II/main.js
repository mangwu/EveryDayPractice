/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-17 16:12:22                                                  *
 * @LastModifiedDate: 2022-05-17 17:26:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 假设
  if (!head || !head.next || left == right) {
    return head;
  }
  let num = 1;
  // 哨兵节点
  let header = new ListNode();
  header.next = head;
  head = header;
  // left和right指的是链表中的位置，而非节点值
  let leftNode = header;
  let rightNode = null;
  while (num < left) {
    num++;
    head = head.next;
  }
  // left节点的前一个节点
  leftNode = head;
  // 记录需要交换的节点
  const res = [];
  while (num <= right) {
    head = head.next;
    num++;
    res.push(head);
  }
  // right节点的后一个节点
  rightNode = head.next;
  // 遍历res，进行交换
  const n = res.length;
  leftNode.next = res[n - 1];
  res[0].next = rightNode;
  for (let i = n - 1; i > 0; i--) {
    res[i].next = res[i - 1];
  }
  return header.next;
};

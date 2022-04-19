/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 11:10:38                                                  *
 * @LastModifiedDate: 2022-04-19 11:29:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 新建哨兵节点
  const header = new ListNode();
  header.next = head;
  // 头节点
  pre = header;
  while (head) {
    if (head.val == val) {
      // 删除head节点
      pre.next = head.next;
      head.next = null;
      head = pre.next;
    } else {
      pre = head;
      head = head.next;
    }
  }
  return header.next;
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 递归解法
  if (head == null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  return head.val == val ? head.next : head;
};

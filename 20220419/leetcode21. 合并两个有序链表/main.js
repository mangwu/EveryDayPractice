/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 10:40:36                                                  *
 * @LastModifiedDate: 2022-04-19 11:10:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 双指针
  let p1 = list1;
  let p2 = list2;
  // 哨兵节点
  const head = new ListNode();
  let node = head;
  while (p1 || p2) {
    if (!p1) {
      node.next = p2;
      p2 = null;
      continue;
    }
    if (!p2) {
      node.next = p1;
      p1 = null;
      continue;
    }
    if (p1.val > p2.val) {
      node.next = p2;
      p2 = p2.next;
      node = node.next;
    } else {
      node.next = p1;
      p1 = p1.next;
      node = node.next;
    }
  }
  return head.next;
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 递归
  if (list1 == null) {
    return list2;
  } else if (list2 == null) {
    return list1;
  } else if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
};

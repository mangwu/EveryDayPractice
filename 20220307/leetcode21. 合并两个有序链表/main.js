/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-07 09:20:58                                                  *
 * @LastModifiedDate: 2022-03-07 10:00:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 如 1 -> 2 -> 4 和1 -> 3 -> 5  => 1 -> 1 -> 2 -> 3 -> 4 -> 5

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
  // 将list2合入list1中
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  // 使用一个node保存list2
  let node2 = list2;
  // 使用一个node保存list1
  let node1 = list1;
  // 一个新节点
  let list = null;
  if (node1.val >= node2.val) {
    list = node2;
    node2 = node2.next;
  } else {
    list = node1;
    node1 = node1.next;
  }
  let node = list;
  // 当node不为空时
  while (node2 || node1) {
    // 决定将list2的节点插入到list1的哪个位置
    if (!node1) {
      node.next = node2;
      break;
    }
    if (!node2) {
      node.next = node1;
      break;
    }
    if (node1.val >= node2.val) {
      node.next = node2;
      node = node.next;
      node2 = node2.next;
    } else {
      node.next = node1;
      node = node.next;
      node1 = node1.next;
    }
  }
  return list;
};
// 不用额外使用node1和node2
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 将list2合入list1中
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  // 一个新节点
  let list = null;
  if (list1.val >= list2.val) {
    list = list2;
    list2 = list2.next;
  } else {
    list = list1;
    list1 = list1.next;
  }
  let node = list;
  // 当node不为空时
  while (list2 || list1) {
    // 决定将list2的节点插入到list1的哪个位置
    if (!list1) {
      node.next = list2;
      break;
    }
    if (!list2) {
      node.next = list1;
      break;
    }
    if (list1.val >= list2.val) {
      node.next = list2;
      node = node.next;
      list2 = list2.next;
    } else {
      node.next = list1;
      node = node.next;
      list1 = list1.next;
    }
  }
  return list;
};

// 递归写法
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1
  }
};

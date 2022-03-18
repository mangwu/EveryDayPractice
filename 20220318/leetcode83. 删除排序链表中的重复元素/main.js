/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-18 18:41:02                                                  *
 * @LastModifiedDate: 2022-03-18 19:22:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

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
  // 因为节点已经排序，所以可以记录前一个节点，删除与前一个节点不相同的节点
  if (!head) {
    return null;
  }
  let node = head.next;
  let pre = head;
  while (node) {
    if (node.val == pre.val) {
      // 节点值和上一个相同
      pre.next = node.next;
      node.next = null;
      node = pre.next;
      // 因为删除了值，所以pre不用改变
    } else {
      pre = node;
      node = node.next;
    }
  }
  return head;
};

// 实际上使用一个变量保存当前值，和下一个比较即可
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }
  let node = head;
  while (node && node.next) {
    if (node.val == node.next.val) {
      // 删除节点
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};

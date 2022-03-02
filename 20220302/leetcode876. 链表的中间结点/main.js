/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-02 16:04:35                                                  *
 * @LastModifiedDate: 2022-03-02 16:37:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

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
var middleNode = function (head) {
  // 可以通过判断节点的next是否为空对节点的长度进行计算
  // 然后取得中间值再遍历一遍即可
  let len = 0;
  let node = head;
  while (node) {
    node = node.next;
    len++;
  }
  let mid = len % 2 == 0 ? len / 2 : (len - 1) / 2;
  while (mid > 0) {
    head = head.next;
    mid--;
  }
  return head;
};

// 使用快慢指针
// 快指针一下遍历两步，慢指针一下遍历一步，当快指针结束时，返回慢指针即可

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode2 = function (head) {
  // 快指针不为空且有下一节点时为遍历条件
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

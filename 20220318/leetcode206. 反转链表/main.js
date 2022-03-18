/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-18 18:37:06                                                  *
 * @LastModifiedDate: 2022-03-18 18:48:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {
  // 当节点为null或下一位位空时，直接返回
  if (head == null || head.next == null) {
    return head;
  }
  // 把当前节点的后面所有节点进行反转, 得到的p
  let p = reverseList(head.next);
  // 将head后的节点反转 
  head.next.next = head;
  // 避免形成循环
  head.next = null;
  return p;
};
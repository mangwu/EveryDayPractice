/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-30 22:17:02                                                  *
 * @LastModifiedDate: 2022-07-30 22:30:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (set.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let len1 = 0;
  let len2 = 0;
  let nodeA = headA;
  let nodeB = headB;
  while (nodeA) {
    len1++;
    nodeA = nodeA.next;
  }
  while (nodeB) {
    len2++;
    nodeB = nodeB.next;
  }
  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) {
      headA = headA.next;
    }
  } else {
    for (let i = 0; i < len2 - len1; i++) {
      headB = headB.next;
    }
  }
  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;
};

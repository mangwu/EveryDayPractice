/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-29 20:48:08                                                  *
 * @LastModifiedDate: 2022-03-29 21:08:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
// 如果两个链表不存在相交节点，返回 null 。

// 图示两个链表在节点 c1 开始相交：

// 题目数据 保证 整个链式结构中不存在环。

// 注意，函数返回结果后，链表必须 保持其原始结构 。

// 自定义评测：

// 评测系统 的输入如下（你设计的程序 不适用 此输入）：

// intersectVal - 相交的起始节点的值。如果不存在相交节点，这一值为 0
// listA - 第一个链表
// listB - 第二个链表
// skipA - 在 listA 中（从头节点开始）跳到交叉节点的节点数
// skipB - 在 listB 中（从头节点开始）跳到交叉节点的节点数
// 评测系统将根据这些输入创建链式数据结构，并将两个头节点 headA 和 headB 传递给你的程序。
// 如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。

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
  const setA = new Set();
  const setB = new Set();
  while (headA || headB) {
    setA.add(headA);
    setB.add(headB);
    if (setA.has(headB)) {
      return headB;
    }
    if (setB.has(headA)) {
      return headA;
    }
    if (headA) {
      headA = headA.next;
    }
    if (headB) {
      headB = headB.next;
    }
  }
  return null;
};

// 双指针
// 如果两个链表相加，则A链表 m = a + c B链表 n = b + c
// 可知a + b + c的长度是固定的，即，链表指向A的指针在移动完后，继续指向链表b就能再走b长度
// 同理指向B的指针再移动完后，继续指向链表a就能走完a长度，同时走到公共节点
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let nodea = headA;
  let nodeb = headB;
  while (nodea !== nodeb) {
    if (nodea) {
      nodea = nodea.next;
    } else {
      nodea = headB;
    }
    if (nodeb) {
      nodeb = nodeb.next;
    } else {
      nodeb = headA;
    }
  }
  return nodea;
};

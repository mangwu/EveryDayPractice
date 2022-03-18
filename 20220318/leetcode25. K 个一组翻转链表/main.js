/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-18 19:58:45                                                  *
 * @LastModifiedDate: 2022-03-18 20:27:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 进阶：

// 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 节点的数量大于等于k才能翻转
  // 用于记录第一个节点
  let first = head;
  let node = head;
  let nodes = [];
  while (node) {
    let i = 0;
    // 开始入栈
    while (i < k && node) {
      nodes.push(node);
      let next = node.next;
      node.next = null;
      node = next;
      i++;
    }
    console.log(i);
    // 节点个数满足条件，进行翻转 最终i会变为k
    if (i == k) {
      while (i > 1) {
        nodes[i - 1].next = nodes[i - 2];
        i--;
      }
      nodes[0].next = node;
      if (first == head) {
        first = nodes[k-1];
      }
    }
    nodes = [];
  }
  return first;
};

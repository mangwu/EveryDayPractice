/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-18 21:28:17                                                  *
 * @LastModifiedDate: 2022-06-18 22:47:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，
// 使这个列表仍然是循环升序的。

// 给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

// 如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，
// 插入后整个列表仍然保持有序。

// 如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。
// 否则。请返回原先给定的节点。

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (!head) {
    head = new Node(insertVal);
    head.next = head;
    return head;
  }
  if (head.val == insertVal || head == head.next) {
    // 直接插入
    let next = head.next;
    let newNode = new Node(insertVal);
    head.next = newNode;
    newNode.next = next;
    return head;
  }
  // 找到最大的节点
  let maxNode = head;
  while (maxNode.val <= maxNode.next.val) {
    maxNode = maxNode.next;
    if (maxNode == head) {
      // 都是相同值
      break;
    }
  }
  // 大于最大值或者小于最小值
  if (insertVal >= maxNode.val || insertVal <= maxNode.next.val) {
    // 直接插入的maxNode后
    let next = maxNode.next;
    maxNode.next = new Node(insertVal);
    maxNode.next.next = next;
    return head;
  }

  // 找到比insertVal大的节点
  let node = maxNode.next;
  while (node.val < insertVal) {
    maxNode = node;
    node = node.next;
  }
  let next = maxNode.next;
  maxNode.next = new Node(insertVal);
  maxNode.next.next = next;
  return head;
};

// 3 4 5 6 2
// 1

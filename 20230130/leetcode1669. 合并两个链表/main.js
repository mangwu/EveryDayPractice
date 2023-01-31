/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-30 09:01:41                                                  *
 * @LastModifiedDate: 2023-01-30 09:20:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。

// 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。

// 下图中蓝色边和节点展示了操作后的结果：

// 请你返回结果链表的头指针。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  const head = new ListNode(undefined, list1);
  let end = head;
  let start = head;
  for (let i = 0; i <= b; i++) {
    if (i < a) {
      start = start.next;
    }
    end = end.next;
  }
  start.next = list2;
  let next = list2;
  while (next && next.next) {
    next = next.next;
  }
  next.next = end.next;
  end.next = null;
  return head.next;
};

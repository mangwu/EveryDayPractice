/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-31 00:20:44                                                  *
 * @LastModifiedDate: 2022-07-31 00:25:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定单链表的头节点 head ，
// 将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

// 第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。

// 请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

// 你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。

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
var oddEvenList = function (head) {
  const headOdd = new ListNode();
  const headEven = new ListNode();
  let idx = 1;
  let preOdd = headOdd;
  let preEven = headEven;
  while (head) {
    if (idx % 2 == 1) {
      // 奇数
      preOdd.next = head;
      head = head.next;
      preOdd = preOdd.next;
      preOdd.next = null;
    } else {
      // 偶数
      preEven.next = head;
      head = head.next;
      preEven = preEven.next;
      preEven.next = null;
    }
    head = head.next;
    idx++;
  }
  preOdd.next = headEven.next;
  headEven.next = null;
  return headOdd.next;
};

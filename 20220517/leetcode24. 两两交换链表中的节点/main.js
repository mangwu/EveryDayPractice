/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-17 10:57:57                                                  *
 * @LastModifiedDate: 2022-05-17 11:28:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
// 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
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
var swapPairs = function (head) {
  // 两两交换
  // 奇数个节点最后一个节点位置不变

  // 哨兵节点
  const header = new ListNode();
  header.next = head;
  let pre = header;
  while (head && head.next) {
    // 交换head和head.next
    pre.next = head.next;
    let temp = pre.next.next;
    head.next.next = head;
    head.next = temp;

    // 更新
    pre = head;
    head = head.next;
  }
  return header.next;
};

// a -> b -> c -> d
// a -> c b -> c -> d
// b -> d c -> d a -> c
// c -> b b -> d a -> c

// 0 -> 1 -> 2 -> 3 -> 4
// head -> 1
// temp -> 2
// head -> 3
// temp ->

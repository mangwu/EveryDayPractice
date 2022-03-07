/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-07 09:56:13                                                  *
 * @LastModifiedDate: 2022-03-07 10:20:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 1 -> 2 -> 3 => 3 -> 2 -> 1
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node2.next = node3;
node1.next = node2;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 使用栈记录head然后出栈组成新链表即可
  const stack = [];
  let n = head;
  // 需要消除链表的链接关系，以免在后续合成形成链表环
  while (head) {
    head = head.next;
    n.next = null;
    stack.push(n);
    n = head;
  }
  let node = stack.pop();
  const ans = node;
  while (stack.length > 0) {
    console.log(node.val);
    node.next = stack.pop();
    node = node.next;
  }
  return ans ? ans : null;
};
reverseList(node1);

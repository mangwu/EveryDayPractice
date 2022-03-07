/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-07 09:56:13                                                  *
 * @LastModifiedDate: 2022-03-07 18:55:25                                      *
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

// 反转链表的迭代做法
// 双指针做法，将当前元素移动到最前面节点前

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  // 遍历head,当前节点为空时结束遍历
  while (cur) {
    // 保存当前节点的下一个节点
    let next = cur.next;
    // 将当前节点移动到上一个节点前
    cur.next = pre;
    // 将pre节点移动到当前最前面节点
    pre = cur;
    // 还原cur为下一个节点
    cur = next;
  }
  return pre;
};

// 递归法,可以使用栈解决的算法都能使用递归解决
// 假设nk -> nk+1 <-nk+2... nk+ 想要将nk+1指向nk,代码nk.next.next = nk即可
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

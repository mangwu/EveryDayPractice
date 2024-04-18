// 给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 可以假设除了数字 0 之外，这两个数字都不会以零开头。

const { ListNode } = require("../../publicFunc/ListNode/ListNode");

/**
 * @description 翻转链表
 * @param {ListNode} head
 * @returns {ListNode}
 */
var reverseLinkList = function (head) {
  let cur = head;
  let pre = null;
  while (cur) {
    const nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 翻转链表，然后相加
  l1 = reverseLinkList(l1);
  l2 = reverseLinkList(l2);
  let addition = 0;
  let node1 = l1;
  let node2 = l2;
  const header = new ListNode(-1, l1);
  while (node1 || node2) {
    let sum = 0;
    if (node1 && node2) {
      sum = node1.val + node2.val + addition;
      addition = Math.floor(sum / 10);
      sum = sum % 10;
      node1.val = sum;
      node2.val = sum;
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1) {
      sum = node1.val + addition;
      addition = Math.floor(sum / 10);
      sum = sum % 10;
      node1.val = sum;
      header.next = l1;
      node1 = node1.next;
    } else if (node2) {
      sum = node2.val + addition;
      addition = Math.floor(sum / 10);
      sum = sum % 10;
      node2.val = sum;
      header.next = l2;
      node2 = node2.next;
    }
  }
  header.next = reverseLinkList(header.next);
  if (addition) return new ListNode(addition, header.next);
  return header.next;
};

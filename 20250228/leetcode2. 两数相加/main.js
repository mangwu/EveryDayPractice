// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

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
  let header = new ListNode();
  let pre = header;
  let add = 0;
  while (l1 || l2 || add) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    add = Math.floor(sum / 10);
    pre.next = new ListNode(sum % 10);
    pre = pre.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  return header.next;
};

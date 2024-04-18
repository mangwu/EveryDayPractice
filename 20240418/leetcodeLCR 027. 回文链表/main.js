// 给定一个链表的 头节点 head ，请判断其是否为回文链表。

// 如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

const { ListNode } = require("../../publicFunc/ListNode/ListNode");

/**
 * @description 翻转链表
 * @param {ListNode} head
 * @returns {ListNode}
 */
var reverseLinkList = function (head) {
  if (!head) return null;
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let node = reverseLinkList(slow.next);
  slow.next = node;
  while (head && node) {
    if (head.val !== node.val) return false;
    head = head.next;
    node = node.next;
  }
  return true;
};

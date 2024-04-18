// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

//  L0 → L1 → … → Ln-1 → Ln
// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

const { ListNode } = require("../../publicFunc/ListNode/ListNode");

/**
 * @description 翻转链表
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseLinkList(head) {
  let cur = head;
  let pre = null;
  while (cur) {
    const nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 1 n 2 n-1 3 n-2
  // 快慢指针，然后翻转
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let node = reverseLinkList(slow.next);
  slow.next = null;
  const header = new ListNode(0, head);
  let pre = header;
  while (head) {
    const headNxt = head.next;
    const nodeNxt = node && node.next;
    pre.next = head;
    head.next = node;
    node && (node.next = null);
    pre = node;
    head = headNxt;
    node = nodeNxt;
  }
  header.next = null;
};

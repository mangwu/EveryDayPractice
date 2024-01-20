// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

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
var deleteDuplicates = function (head) {
  if (!head) return head;
  const header = new ListNode(0, head);
  let pre = header;
  let node = head;
  let curVal = node.val;
  while (node && node.next) {
    if (node.next.val === curVal) {
      // 重复元素
      while (node && node.next && node.next.val === curVal) {
        node = node.next;
      }
      const next = node.next;
      node.next = null;
      pre.next = next;
      node = next;
      curVal = next && next.val;
    } else {
      pre = node;
      node = node.next;
      curVal = node.val;
    }
  }
  return header.next;
};

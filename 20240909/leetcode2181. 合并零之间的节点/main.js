// 给你一个链表的头节点 head ，该链表包含由 0 分隔开的一连串整数。链表的 开端 和 末尾 的节点都满足 Node.val == 0 。

// 对于每两个相邻的 0 ，请你将它们之间的所有节点合并成一个节点，其值是所有已合并节点的值之和。然后将所有 0 移除，修改后的链表不应该含有任何 0 。

//  返回修改后链表的头节点 head 。
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
var mergeNodes = function (head) {
  const header = head;
  let pre = header;
  let node = head.next;
  while (node) {
    let sum = 0;
    const start = node;
    while (node && node.val !== 0) {
      sum += node.val;
      node = node.next;
    }
    start.val = sum;
    pre.next = start;
    pre = start;
    pre.next = null;
    const temp = node;
    node = node.next;
    temp.next = null;
  }
  return header.next;
};

/**
 * @description 链表节点
 * @param {number} val
 * @param {ListNode} next
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

module.exports = { ListNode };

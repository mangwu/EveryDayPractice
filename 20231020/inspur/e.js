/*
 * @Author: mangwu                                                             *
 * @File: e.js                                                                 *
 * @Date: 2023-10-20 09:35:08                                                  *
 * @LastModifiedDate: 2023-10-20 09:52:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小红拿到了一个偶数长度的链表。她希望你能把这个链表相邻的节点合并，两个节点合并后的权值为原来两个节点权值的乘积。最终返回一个原链表长度一半的链表。

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
function mergeNode(head) {
  if (!head) return head;
  // write code here
  const header = new ListNode(0);
  header.next = head;
  let pre = header;
  let node = head;
  while (node) {
    // 将node 和 node.next合并到node
    if (node.next) {
      const newNode = new ListNode(node.val * node.next.val);
      node = node.next.next;
      pre.next = newNode;
      pre = newNode;
    } else {
      const newNode = new ListNode(node.val);
      pre.next = newNode;
      break;
    }
  }
  return header.next;
}
module.exports = {
  mergeNode: mergeNode,
};

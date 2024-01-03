/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-03 09:01:06                                                  *
 * @LastModifiedDate: 2024-01-03 09:49:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头节点 head 。

// 移除每个右侧有一个更大数值的节点。

// 返回修改后链表的头节点 head 。

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
var removeNodes = function (head) {
  // 单调栈，下一个更大的元素
  const stack = [];
  let node = head;
  while (node) {
    while (stack.length && stack[stack.length - 1].val < node.val) {
      stack.pop();
    }
    stack.push(node);
    node = node.next;
  }
  let idx = 0;
  node = head;
  let pre = new ListNode(0, head);
  let stackPre = new ListNode(0, null);
  while (node) {
    if (node === stack[idx]) {
      pre.next = null;
      stackPre.next = stack[idx];
      idx++;
      stackPre = node;
    }
    pre = node;
    node = node.next;
  }
  return stack[0];
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-27 10:45:31                                                  *
 * @LastModifiedDate: 2022-11-27 10:56:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个链表的头节点 head 。

// 对于列表中的每个节点 node ，如果其右侧存在一个具有 严格更大 值的节点，则移除 node 。

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
  // 单调栈
  const arr = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  const stack = [];
  const n = arr.length;
  const res = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  const header = new ListNode(0, head);
  let pre = header;
  let cur = head;
  for (let i = 0; i < n; i++) {
    if (res[i] == -1) {
      pre = cur;
      cur = cur.next;
    } else {
      // 删除cur
      pre.next = cur.next;
      cur.next = null;
      cur = pre.next;
    }
  }
  return header.next;
};

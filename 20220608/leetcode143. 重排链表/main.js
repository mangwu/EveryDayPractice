/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-08 09:09:21                                                  *
 * @LastModifiedDate: 2022-06-08 09:19:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

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
  // 第一个节点位置不改变
  // 使用数组保存每个节点
  // 然后将位置进行替换
  const nodes = [];
  let node = head.next;
  while (node) {
    nodes.push(node);
    node = node.next;
  }
  const newNodes = [];
  const n = nodes.length;
  for (let i = 0; i < n / 2; i++) {
    if (i !== n - i - 1) {
      newNodes.push(nodes[n - i - 1]);
      newNodes.push(nodes[i]);
    } else {
      newNodes.push(nodes[i]);
    }
  }
  let pre = head;
  for (const next of newNodes) {
    next.next = null;
    pre.next = next;
    pre = next;
  }
  return head;
};

// 0 1 2 3 4
// 0 1 2 3
// 3 2 1 0

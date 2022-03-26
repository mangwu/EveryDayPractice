/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-26 19:18:01                                                  *
 * @LastModifiedDate: 2022-03-26 19:55:33                                      *
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }
  let header = new ListNode();
  header.next = head;
  let node = head;
  let pre = header;
  let cur = node.val;
  while (node && node.next) {
    let i = 0;
    while (node && node.next && node.next.val == cur) {
      node = node.next;
      // 记录是否是要删除的节点
      i++;
    }
    if (!i) {
      // 下一个不相同，cur只有一个
      pre = node;
      node = node.next;
      cur = node ? node.val : -101;
    } else {
      // 下一个相同，cur有i个需要删除
      pre.next = node.next;
      node = node.next;
      cur = node ? node.val : -101;
    }
  }
  return header.next;
};
